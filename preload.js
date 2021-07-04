import { contextBridge, ipcRenderer } from 'electron'
const apLib = require("./dll")

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
    send: (channel, data) => {
        // whitelist channels
        let validChannels = ["toMain"];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receive: (channel, func) => {
        let validChannels = ["fromMain"];
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender` 
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    }
});

contextBridge.exposeInMainWorld("apLib", {
    SearchDevice: (port) => {
        return apLib.SearchDevice(port);
    },
    OpenDevice: (comNo, combaud) => {
        return apLib.OpenDevice(comNo, combaud);
    },
    Close: () => {
        return apLib.Close();
    },
    GetSimKey: (access_code, sim_key, mod_key) => {
        return apLib.GetSimKey(access_code, sim_key, mod_key);
    },
    Dialup: (mod_accCode,
        recvStr,
        apn = "",
        username = "",
        pwd = "",
        proxyAddress = "",
        proxyPort = "",
        ipType = 0,
        authprefType = 1) => {
        if (!apn) {
            apn = "";
        }
        if (!username) {
            username = "";
        }
        if (!pwd) {
            pwd = "";
        }
        if (!proxyAddress) {
            proxyAddress = "";
        }
        if (!proxyPort) {
            proxyPort = "";
        }
        if (!ipType) {
            ipType = 0
        }
        if (!authprefType) {
            authprefType = 1;
        }
        return apLib.Dialup(mod_accCode, recvStr, apn, username, pwd, proxyAddress, proxyPort, ipType, authprefType);
    },
    DialupWithApn: (mod_accCode, recvStr, apn) => {
        return apLib.DialupWithApn(mod_accCode, recvStr, apn);
    },
    DialingBreak: () => {
        return apLib.DialingBreak();
    },
    ApduCmd: (access_code, cmd, cmdLen, recvBuff) => {
        return apLib.ApduCmd(access_code, cmd, cmdLen, recvBuff);
    },
    DeviceIpInfo: (isIpV6, recvData) => {
        return apLib.DeviceIpInfo(isIpV6, recvData);
    },
    RebootDevice: () => {
        apLib.RebootDevice();
    },
    ModRegisterCheck: () => {
        return apLib.ModRegisterCheck();
    },
    ModRegister: (key) => {
        return apLib.ModRegister(key);
    }
});

