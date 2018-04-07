import {playMode} from 'common/js/config'

const state = {
  singer: {},
  // 播放器播放状态
  playing: false,
  // 播放器全屏状态
  fullScreen: false,
  // 播放列表
  playList: [],
  // 播放顺序列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放的索引
  currentIndex: -1,
  disc: {}
}

export default state
