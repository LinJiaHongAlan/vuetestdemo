import ajax from './ajax'

const LOGIN_HANDLER = '/Handler/LoginHandler.ashx'
const PDA_HANDLER = '/Handler/PDAHandler.ashx'
const ISTO = '/Handler/IstoHandler.ashx'
const CONFIG_HANDLER = '/Handler/ConfigHandler.ashx'

//账套登陆
export function reqLoginzt(ztname, ztpwd) {
    //const _obj = {ztname, ztpwd, remenber: ""}
    return ajax.post(LOGIN_HANDLER, {
        action: 'CheckUserName',
        ztname,
        ztpwd
    })
}

//获取分公司信息
export function ZtameGetDpm({ztname, ztpwd}) {
    return ajax.post(LOGIN_HANDLER, {
        action: 'ZtameGetDpm',
        ztname,
        ztpwd
    })
}

//获取厂牌
export function DpmgetCp(dpm) {
    return ajax.post(LOGIN_HANDLER, {
        action: 'DpmgetCp',
        dpm
    })
} 

//获取操作员
export function DpmgetPer(dpm) {
    return ajax.post(LOGIN_HANDLER, {
        action: 'DpmgetPer',
        dpm
    })
}

//操作员登录
export function KhLogin(dpm, dpmname, cp, per, pwd) {
    const _obj = {dpm, dpmname, cp, per, pwd}
    const data = JSON.stringify(_obj)
    return ajax.post(LOGIN_HANDLER, {
        action: 'KhLogin',
        data
    })
}

//验证登陆
export function IsLogin() {
    return ajax.post(LOGIN_HANDLER, {
        action: 'VLogin'
    })
}

//进入首页获取模块数据
export function GitModuicon() {
    return ajax.post(LOGIN_HANDLER, {
        action: 'gitmoduicon'
    })
}

//操作员退出操作
export function LogoutPer() {
    return ajax.post(LOGIN_HANDLER, {
        action: 'LogoutPer'
    })
}

//获取表格字段
export function GetCols(ModuleName) {
    return ajax.post(PDA_HANDLER, {
        action: "GetCols",
        ModuleName
    })
}

//获取散件入库单
export function GetSJRKPaper(nno, date_s, date_e) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetSjrkPaper',
        nno,
        date_s,
        date_e
    })
}

//获取散件入库单明细
export function GetSJRKIsto(cno) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetSJRKIsto',
        cno
    })
}

//获取订单入库单
export function GetSea(nno, date_s, date_e) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetSea',
        nno,
        date_s,
        date_e
    })
}


//获取订单入库单明细
export function GetSeaNo(cno) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetSeaNo',
        cno,
        cp: "",
        dpm: ""
    })
}

//获取调拨入库单
export function GetDbrkPaper(nno, date_s, date_e) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetDbrkPaper',
        nno,
        date_s,
        date_e
    })
}


//获取调拨入库单明细
export function GetDBRKIsto(cno) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetDBRKIsto',
        cno,
        cp: "",
        dpm: ""
    })
}


//获取入库上架单
export function GetSjrkPaper_RKSJ(nno, date_s, date_e) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetSjrkPaper_RKSJ',
        nno,
        date_s,
        date_e
    })
}


//获取入库上架单明细
export function GetSJRKIsto_RKSJ(cno, moduletype) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetSJRKIsto_RKSJ',
        cno,
        cp: "",
        dpm: "",
        moduletype
    })
}

//根据零件获取库存信息（调仓管理）
export function GetDcIsto(nno) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetDcIsto',
        nno
    })
}

//获取销售备货单
export function GetbhPaper(nno, date_s, date_e) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetbhPaper',
        nno,
        date_s,
        date_e
    })
}

//获取销售备货单明细
export function GetBHIsto(paper) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetBHIsto',
        paper,
        cp: "",
        dpm: ""
    })
}

//获取销售验货单
export function GetSaPaper(nno, date_s, date_e) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetSaPaper',
        nno,
        date_s,
        date_e
    })
}

//获取销售验货单明细
export function GetNNOByPaper(paper) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetNNOByPaper',
        paper,
        cp: "",
        dpm: ""
    })
}

//获取销售装箱单
export function GetZXPaper(nno, date_s, date_e) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetZXPaper',
        nno,
        date_s,
        date_e
    })
}

//获取销售装箱单明细
export function GetZXIsto(paper) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetZXIsto',
        paper,
        cp: "",
        dpm: ""
    })
}

//获取盘点管理单
export function GetPdglPaper(nno, date_s, date_e) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetPdglPaper',
        nno,
        date_s,
        date_e
    })
}

//获取盘点管理单明细
export function GetPDGLIsto(paper) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetPDGLIsto',
        paper,
        cp: "",
        dpm: ""
    })
}

//获取仓库发货装箱单
export function get_ckfhtab() {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'get_ckfhtab'
    })
}


//获取司机（仓库发货）
export function get_rolesjper() {
    return ajax.post(PDA_HANDLER, {
        action: "get_rolesjper"
    })
}


//获取退货单
export function Getsatapaper(nno, date_s, date_e) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'Getsatapaper',
        nno,
        date_s,
        date_e
    })
}

//获取退货单明细
export function Getsataisto(paper) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'Getsataisto',
        paper,
        cp: "",
        dpm: ""
    })
}

//获取维修工单列表
export function GetXlGhpaper(distinct) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'GetXlGhpaper',
        distinct
    })
}

//维修领料根据零件获取库存
export function XlGetKcamount(nno, dpm) {
    return ajax.post(PDA_HANDLER, {
        action: "PDA",
        modulename: 'XlGetKcamount',
        dpm,
        nno
    })
}

//设置表头
export function GetConfigTitle(data) {
    return ajax.post(CONFIG_HANDLER, {
        action: "GetConfigTitle",
        data: escape(JSON.stringify(data)).replace('+', '%2B'),
    })
}

//获取库存数量
export function GetIstoList(value, page, istotable, istowhere, istoitems) {
    
    var _obj = {
        value, 
        items: istoitems, 
        table: istotable, 
        total: "'' as nno,'' as na1,isnull(sum(kcamount),0) as kcamount,isnull(sum(iprc),0) as iprc,isnull(sum(oprc),0) as oprc,'' as depotno,'' as posi,'' as ty,'' as fa,'' as cp", 
        condition: istowhere, 
        iprc_powerd: 1, 
        iprj_powerd: 0, 
        lr_powerd: 1
    }    
    return ajax.post(ISTO, {
        action: "GetIstoList",
        modulename: "isto",
        type: "isto",
        pageSize: 13,
        ordertype: 1,
        page,
        data: escape(JSON.stringify(_obj)).replace('+', '%2B')
    })
}


