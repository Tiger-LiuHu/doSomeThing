let Socket = ''
let setIntervalWesocketPush = null
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie'
/**
 * 建立websocket连接
 * @param {string} url ws地址
 */
//生成唯一标识;
if (!!!Cookies.get('socketId')) {
    // 这里为模拟生成唯一id 建议 require('uuid')
    var uuid = uuidv4();
    Cookies.set('socketId', uuid)
}
export const createSocket = (url = "ws://localhost:3000") => {
        // export const createSocket = (url = "ws://81.68.162.216:3001") => {
        Socket && Socket.close()
        if (!Socket) {
            console.log('建立websocket连接')
            Socket = new WebSocket(url)
            Socket.onopen = onopenWS
            Socket.onmessage = onmessageWS
            Socket.onerror = onerrorWS
            Socket.onclose = oncloseWS
        } else {
            console.log('websocket已连接')
        }
    }
    /**打开WS之后发送心跳 */
const onopenWS = () => {
        sendPing()
        sendWSPush({ type: "setSocketId" });
    }
    /**连接失败重连 */
const onerrorWS = () => {
    Socket.close()
    clearInterval(setIntervalWesocketPush)
    console.log('连接失败重连中')
    if (Socket.readyState !== 3) {
        Socket = null
        createSocket()
    }
}

/**WS数据接收统一处理 */
const onmessageWS = e => {
    window.dispatchEvent(new CustomEvent('onmessageWS', {
        detail: {
            data: e.data
        }
    }))
}

/**
 * 发送数据但连接未建立时进行处理等待重发
 * @param {any} message 需要发送的数据
 */
const connecting = message => {
        setTimeout(() => {
            if (Socket.readyState === 0) {
                connecting(message)
            } else {
                Socket.send(JSON.stringify(message))
            }
        }, 1000)
    }
    /**
     * 发送数据
     * @param {any} message 需要发送的数据
     */
export const sendWSPush = message => {
    if (Socket !== null && Socket.readyState === 3) {
        Socket.close()
        createSocket()
    } else if (Socket.readyState === 1) {
        let senddata = {};
        if ((typeof message) == "string") {
            senddata = {
                setSocketId: Cookies.get("socketId"),
                data: message
            }
        } else {
            message.setSocketId = Cookies.get("socketId");
            senddata = Object.assign({}, message)
        }
        Socket.send(JSON.stringify(senddata))
    } else if (Socket.readyState === 0) {
        connecting(message)
    }
}

/**断开重连 */
const oncloseWS = () => {
        clearInterval(setIntervalWesocketPush)
        console.log('websocket已断开....正在尝试重连')
        if (Socket.readyState !== 2) {
            Socket = null
            createSocket()
        }
    }
    /**发送心跳
     * @param {number} time 心跳间隔毫秒 默认5000
     * @param {string} ping 心跳名称 默认字符串ping
     */
export const sendPing = (time = 5000, ping = 'ping') => {
    clearInterval(setIntervalWesocketPush)
    Socket.send(ping)
    setIntervalWesocketPush = setInterval(() => {
        Socket.send(ping)
    }, time)
}