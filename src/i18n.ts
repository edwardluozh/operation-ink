/**
 * 简体中文本地化文本
 * Simplified Chinese localization strings
 */

export const zh = {
  // 游戏标题和基本信息
  gameTitle: '安全返回行动',
  gameSubtitle: '找到人质。一起逃出去。',
  
  // 加载和启动
  loading: '加载中…',
  loadingCompound: '加载营地中…',
  checkingVR: '检查 VR 支持…',
  unableToLoad: '无法加载',
  
  // 菜单主页
  beginMission: '开始任务',
  resumeMission: '继续任务',
  paused: '已暂停。',
  noWayThrough: '无路可走。',
  hostageSafe: '人质安全。',
  youBothMadeIt: '你们都逃出来了。',
  tryAgain: '再试一次',
  restartMission: '重启任务',
  playAgain: '再玩一次',
  
  // 菜单导航
  mission: '任务',
  controls: '控制',
  settings: '设置',
  back: '返回',
  
  // 任务页面
  theRescue: '营救行动',
  findDetention: '找到拘留所并到达牢房。',
  mapLegend: {
    railRoute: '— 铁路路线',
    serviceRoute: '┄ 服务路线',
    you: '▲ 你',
  },
  routeTips: '路线提示',
  routeTipsContent: {
    line1: '从食堂屋顶到铁路线，或从西侧服务门到有遮蔽的通道。',
    line2: '办公室终端可停用摄像头 60 秒。保安室可永久关闭摄像头。在营救前打开出口大门。',
    line3: '吉普车在拘留所东南方。如果人质落后，返回接他并引导他前进。警报会召来增援；你不需要消灭所有敌人。',
  },
  
  // 控制页面
  controlsTitle: '控制',
  controlKeys: {
    move: '移动',
    look: '查看',
    fire: '射击',
    toggleAim: '切换瞄准',
    interact: '互动/拾取',
    reload: '重新装填',
    sprint: '冲刺',
    jump: '跳跃',
    switchWeapon: '切换武器',
    dropWeapon: '丢弃武器',
    scopeZoom: '瞄准镜缩放',
    missionMap: '任务地图',
    pause: '暂停',
  },
  
  // 设置页面
  settingsTitle: '设置',
  volume: '音量',
  mute: '静音',
  reducedMotion: '减少动画',
  
  // VR 页面
  exploreInVR: '在 VR 中探索',
  vrDescription: '用头戴设备在营地中行走。你的任务保持暂停状态。',
  vrExperiment: 'META QUEST / VR 实验',
  checkingVRSupport: '检查此浏览器是否可以进入沉浸式 VR。',
  
  // 重启确认
  startOver: '重新开始？',
  restartWarning: '你当前的任务进度将被重置。',
  cancel: '取消',
  
  // 任务状态和目标
  objectives: {
    findDetention: '找到拘留所并到达牢房。',
    rescueHostage: '救出人质。',
    reachJeep: '到达吉普车。',
    escape: '逃离营地。',
  },
  
  // 统计信息
  stats: {
    time: '时间',
    kills: '击杀',
    health: '生命值',
  },
  
  // HUD 和游戏中文本
  onFoot: '徒步中',
  magazine: '弹匣',
  healthLabel: '生命值',
  reloading: '重新装填。',
  roundsInReserve: '备用弹药',
  magazines: '弹匣',
  
  // 交互提示
  interact: '互动',
  openDoor: '打开门',
  closeDoor: '关闭门',
  climbLadder: '爬梯子',
  useZipline: '使用滑索',
  pickUp: '拾取',
  
  // 威胁指示
  hitDirection: '命中',
  fallDamage: '坠落伤害',
  directions: {
    below: '下方',
    above: '上方',
    left: '左侧',
    right: '右侧',
    front: '前方',
    back: '后方',
  },
  
  // 探索模式
  exploreTheCompound: '探索营地',
  exploreHelp: {
    orbit: '拖动旋转 · 右键拖动平移 · 滚轮缩放',
    doors: '点击门以打开/关闭 · O 前方的门',
    freeCamera: 'V 自由相机 · W A S D 移动',
    movement: 'Q / E 降低/升高 · Shift 更快',
    presets: '6 屋顶 · 7 食堂 · 8 办公室',
    towers: '9 水塔 · 0 瞭望塔',
    views: 'I 内部剖面 · 1 概览',
    otherViews: '2–5 其他视图 · R 重置',
  },
  
  // 行走模式
  walkTheMap: '行走地图',
  inspectMap: '检查地图',
  compound: '营地',
  exploration: '探索',
  walkTitle: '脚踏实地。',
  walkDescription: '爬前方的梯子到食堂屋顶，然后下楼。沿着出口标志穿过餐厅到达营地院子。',
  startWalking: '开始行走',
  walkHelp: '寻找闪烁的标志。在可触及范围内按 F。',
  escPausesAndReleases: 'Esc 暂停并释放鼠标。',
  
  // 行走控制说明
  walkControls: {
    walk: '行走',
    lookAround: '环视',
    sprint: '冲刺',
    jump: '跳跃',
    doorsAndLadders: '门和梯子',
    backToEntrance: '返回入口',
  },
  
  // VR 控制
  vrControls: 'Left stick: 行走 · Right stick: 快速转向',
  vrInteract: 'Look + trigger: 门/梯子 · B: 入口',
  
  // 武器名称
  weapons: {
    pistol: '手枪',
    rifle: '步枪',
    smg: '冲锋枪',
    shotgun: '霰弹枪',
    sniper: '狙击步枪',
  },
  
  // 地点名称
  locations: {
    messHall: '食堂',
    serviceGate: '服务门',
    warehouse: '仓库',
    workshop: '车间',
    barracks: '军营',
    detention: '拘留所',
    officeTerminal: '办公室终端',
    security: '保安室',
    exitGate: '出口大门',
    jeep: '吉普车',
    cells: '牢房',
  },
  
  // 任务阶段
  phases: {
    active: '进行中',
    complete: '完成',
    dead: '失败',
  },
  
  // 字幕/提示文本 (根据需要添加更多)
  captions: {
    camerasStopped: '摄像头已停用 60 秒。',
    camerasShutdown: '摄像头系统已永久关闭。',
    gateOpened: '出口大门已打开。',
    alarmTriggered: '警报已触发！',
    reinforcementsIncoming: '增援正在赶来！',
  },
}

export type I18nStrings = typeof zh

// 默认导出中文
export default zh
