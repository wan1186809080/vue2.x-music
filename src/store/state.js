import { playMode } from 'common/js/config'
const state = {
  singer: {}, // 歌手信息
  playing: false, // 播放器播放状态
  fullScreen: false, // 播放器是否全屏
  playlist: [], // 播放列表
  sequenceList: [], // 原始播放列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前播放索引
}
export default state