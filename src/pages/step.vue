<template>
  <div class="page">
    <head-nav></head-nav>

    <swiper :options="swiperOption" ref="mySwiper">
      <!-- 第一页 -->
      <swiper-slide class="page01" id="page01">
        <div class="detail-page" >
          <!-- <div class="text-detail-box" :class="thisActiveIndex == 0 ? 'have-animation' : ''">
            <p class="font-title-color">时光总是偷偷流流逝</p>
            <p class="font-title-color">转眼间一年又过去了</p>
            <p class="font-title-color">打开新大陆APP</p>
            <p class="font-important-color font-bold margin-top-5px">这一年你走过的痕迹</p>
          </div>-->
          <div class="paper-box ps-a ptp-t-15 tf-r-5">
            <div class="hp-100 bs-bb">
              <div class="hp-100 f-c">
                <div class="p-30 ps-r zi-9998" style="display:none">
                  <div class="pb-10">
                    <div class="c-theme fw-b fz-15">2018年08月24日</div>
                    <div class="lh-17">
                      我的新大陆之旅从这一天开始,不知不觉间，我与新大陆已经一起奋斗了
                      <span class="c-theme">2年3个月26天</span>了。
                    </div>
                  </div>
                  <div class="pb-15">
                    <div class="c-theme fw-b fz-15">1月2日</div>
                    <div>我在这一天踏上了数字世界的新大陆。从此开启了“众人划桨开大船”式的征程，领略了“同舟共济海让路”的气魄。</div>
                  </div>
                  <div class="pb-15">
                    <div class="c-theme fw-b fz-15">2月17日</div>
                    <div>浪漫的新婚之行如期而至，至此我人生翻开了新篇章。愿得一人心，白首不相离。</div>
                  </div>
                  <div class="pb-10">
                    <div class="c-theme fw-b fz-15">11月13日</div>
                    <div>我前往迎接小天使的降临，生命的诞生是一个奇迹，而为人父母是一场修行。</div>
                  </div>
                </div>
                <div class="p-30 ps-r zi-9998">
                  <div>
                    <div class="fz-15 pb-10">
                      我已与新大陆同行
                      <span class="c-theme">5</span> 天
                    </div>
                    <div class="c-theme fw-b fz-15 pb-6">11月13日</div>
                    <div class="pb-6">我在这一天踏上了数字世界的新大陆。从此开启了“众人划桨开大船”式的征程，领略了“同舟共济海让路”的气魄。</div>
                    <div>
                      我错过新大陆的2020
                      <br />但与新大陆同在的2021，一定倍加精彩！
                    </div>
                  </div>
                </div>
              </div>
              <div class="ps-a ps-b-8 fz-10 ta-c wp-100">数据来源：集团EHR系统</div>
            </div>
            <div class="feather"></div>
          </div>
          <div class="fixed-hint f-ai-c" >
            <svg-icon icon-class="arrow" class="fz-18" />
            <span class="c-w fz-15">向上滑动查看下一页</span>
          </div>
          <div class="ps-a ps-b-0 zi-9999 p-20 c-w">
            <div class="c-w">姚琦玥 摄于 中国 · 新大陆科技园 · 北门</div>
            <div class="c-w">中国 · 福州 E116° 41' N26° 02’</div>
          </div>
        </div>
      </swiper-slide>
      <!-- 第二页 疫情-->
      <swiper-slide class="page02" id="page02">
        <div class="detail-page">
          <!-- <div
            class="text-detail-box text-detail-box-01"
            :class="thisActiveIndex == 1 ? 'animated flipInX' : ''"
          >
            <p class="font-important-color">2020年</p>
            <p class="font-title-color">你更爱新大陆了</p>
            <p class="font-title-color">这一年新大陆给你发了100w红包</p>
            <p class="font-title-color"></p>
          </div>
          <div
            class="text-detail-box text-detail-box-02"
            :class="thisActiveIndex == 1 ? 'animated flipInY' : ''"
          >
            <p class="font-title-color">在食堂加班餐省了99w</p>
            <p class="font-title-color">坐班车你省了1w</p>
          </div>-->
          <div class="paper-box ps-a ptp-t-15 tf-r-5">
            <div class="hp-100 bs-bb">
              <div class="p-30 ps-r zi-9998">
                <div class="pb-10">
                  2020年注定是不平凡的一年，突如其来的新冠肺炎疫情，让全人类陷入一场共同的灾难。
                  <br />我们见证了人类与病毒斗争的艰难过程，也见证了疫情中的世间百态。
                  <br />疫情来袭我们迎难而上，坚守岗位并积极配合各项防疫工作。
                </div>
                <div class="pb-10">
                  <div class="c-theme fw-b fz-15">2月18日</div>
                  <div class="lh-17">是我在疫情期间的第一次工作打卡。</div>
                </div>
                <div class="pb-10">
                  <div class="c-theme fw-b fz-15">45次</div>
                  <div class="lh-17">是我通过“健康上报”系统填报的“健康信息”次数。</div>
                </div>
                <div class="pb-10">
                  <div class="c-theme fw-b fz-15">3次，15天</div>
                  <div class="lh-17">是我在疫情严重期间（2020年2月18日~4月15日）的出差次数和天数</div>
                </div>
                <div class="fz-10" style="color:#990000">
                  温馨提示：
                  <br />春节将至，多地疫情反弹,个人防护请勿松懈。提倡就地过节，戴口罩，勤洗手，多通风，不聚集
                </div>
              </div>
              <div class="ps-a ps-b-8 fz-10 ta-c wp-100">数据来源：集团EHR系统</div>
            </div>
            <div class="feather"></div>
          </div>
          <div class="fixed-hint f-ai-c" >
            <svg-icon icon-class="arrow" class="fz-18" />
            <span class="c-w fz-15">向上滑动查看下一页</span>
          </div>
          <div class="ps-a ps-b-0 zi-9999 p-20 c-w">
            <div class="c-w">姚琦玥 摄于 中国 · 新大陆科技园 · 北门</div>
            <div class="c-w">中国 · 福州 E116° 41' N26° 02’</div>
          </div>
        </div>
      </swiper-slide>
      <!-- 第三页 考勤 -->
      <swiper-slide class="page03" id="page03">
        <div class="detail-page">
          <!-- <div
            class="text-detail-box text-detail-box-01"
            :class="thisActiveIndex == 2 ? 'animated bounceInLeft' : ''"
          >
            <p class="font-important-color">2020年</p>
            <p class="font-title-color">你已经来新大陆2000多年了</p>
            <p class="font-title-color">这么多年你保持了对新大陆的忠诚</p>
            <p class="font-title-color">真是长寿又忠诚</p>
          </div>
          <div
            class="text-detail-box text-detail-box-02"
            :class="thisActiveIndex == 2 ? 'animated bounceInUp' : ''"
          >
            <p class="font-title-color">你为新大陆定下一年帮它赚1个亿的目标</p>
            <p class="font-title-color">实际上你开年第一天就超额完成</p>
          </div>-->
          <div class="paper-box ps-a ptp-t-15 tf-r-5">
            <div class="hp-100 bs-bb">
              <div class="p-30 ps-r zi-9998">
                <div class="pb-10">
                  <div class="c-theme fw-b fz-15">170天，94.45%</div>
                  <div class="lh-17">
                    是这一年我的实际出勤天数与出勤率，我的出勤率超过了全集团70%员工。
                    <br />这一年有15个节假日，我仍在工作岗位上忙碌。爱岗敬业，从我做起。越努力，越幸运。
                  </div>
                </div>
                <div class="pb-15">
                  <div class="c-theme fw-b fz-15">9月27日</div>
                  <div>
                    是我最迟离开公司的一天，23:04我才拖着疲惫的身躯离开。这一年，我有30个夜晚，加班到21:00之后。
                    <br />2020，日夜兼程，我们领略了星辰，也坚定了远方，相信赶路的尽头，就是朝阳。
                  </div>
                </div>
              </div>
              <div class="ps-a ps-b-8 fz-10 ta-c wp-100">数据来源：集团考勤数据中心</div>
            </div>
            <div class="feather"></div>
          </div>
          <div class="fixed-hint f-ai-c" >
            <svg-icon icon-class="arrow" class="fz-18" />
            <span class="c-w fz-15">向上滑动查看下一页</span>
          </div>
          <div class="ps-a ps-b-0 zi-9999 p-20 c-w">
            <div class="c-w">姚琦玥 摄于 中国 · 新大陆科技园 · 北门</div>
            <div class="c-w">中国 · 福州 E116° 41' N26° 02’</div>
          </div>
        </div>
      </swiper-slide>
      <!-- 第四页：出差地 地图 -->
      <swiper-slide class="page04" id="page04">
        <div class="detail-page">
          <div class="box ps-a ptp-t-10 br-8 ml-30 mr-30">
            <div class="hp-100 bs-bb">
              <div class="pl-30 pr-30 pt-15 pb-10 ps-r zi-9998">
                <div class="pb-15">
                  <div class="lh-17 c-w pb-15">
                    2020年我的国内出差次数共计
                    <span style="color:#ffff00">20</span>次，出差天数合计
                    <span style="color:#ffff00">20</span>天，出差地分别为：
                    <span style="color:#ffff00">上海、深圳、厦门</span> 这
                    <span style="color:#ffff00">20</span>座城市
                  </div>
                  <div class="lh-17 c-w">奋斗者在汗水汇集的江河里，将事业之舟驶到了理想的彼岸。</div>
                </div>
                <div
                  class="c-w pb-15 fz-10"
                  style="color:#ffff00"
                >集团“商旅服务共享平台”已建立，2021年将可逐步享受一站式差旅服务。</div>
                <div class="fz-10 ta-c c-w">数据来源：新大陆APP-商旅服务平台</div>
              </div>
            </div>
          </div>
          <div>
            <china-map
              :mapData="mapData"
              class="ps-a ps-t-250"
              style="width: 100%;height: 50vh;"
              :mapOption="{
            'title': '地图',
            'titleColor': 'pink'}"
            ></china-map>
          </div>
          <div class="fixed-hint f-ai-c" >
            <svg-icon icon-class="arrow" class="fz-18" />
            <span class="c-w fz-15">向上滑动查看下一页</span>
          </div>
          <div class="ps-a ps-b-0 zi-9999 p-20 c-w">
            <div class="c-w">姚琦玥 摄于 中国 · 新大陆科技园 · 北门</div>
            <div class="c-w">中国 · 福州 E116° 41' N26° 02’</div>
          </div>
        </div>
      </swiper-slide>
      <!-- 第五页：刷码 -->
      <swiper-slide class="page05" id="page05">
        <div class="detail-page">
          <div class="paper-box ps-a ptp-t-15 tf-r-5">
            <div class="hp-100 bs-bb">
              <div class="pl-30 pr-30 pt-15 pb-10 ps-r zi-9998">
                <div>这一年，线上线下，园区服务的品质都有了显著的提升。</div>
                <div class="pb-10">
                  <div class="c-theme fw-b fz-15">50次</div>
                  <div class="lh-17">是我在园区刷脸“通行”的次数。</div>
                </div>
                <div class="pb-10">
                  <div class="c-theme fw-b fz-15">30次</div>
                  <div class="lh-17">是我通过扫描“CTID网证二维码”完成“身份核验”的次数。数字新大陆，数字新体验！</div>
                  <div class="lh-17">
                    我使用“访客系统”预约来访的次数和接待的人数分别为10次和20人。
                    <br />安全快捷，通行流畅！
                  </div>
                  <div class="lh-17">我通过“健身预约”提前预约健身的次数为20次。越自律越自由！</div>
                  <div class="lh-17">这一年我有150天乘坐班车上下班，20天自驾车来园。班车服务，快捷直达，风雨无阻，陪我同行</div>
                </div>
              </div>
              <div class="ps-a ps-b-8 fz-10 ta-l pl-30 pr-30">数据来源：集团考勤数据中心、新大陆APP-访客系统/健身房预约系统</div>
            </div>
            <div class="feather"></div>
          </div>
          <div class="fixed-hint f-ai-c" >
            <svg-icon icon-class="arrow" class="fz-18" />
            <span class="c-w fz-15">向上滑动查看下一页</span>
          </div>
          <div class="ps-a ps-b-0 zi-9999 p-20 c-w">
            <div class="c-w">姚琦玥 摄于 中国 · 新大陆科技园 · 北门</div>
            <div class="c-w">中国 · 福州 E116° 41' N26° 02’</div>
          </div>
        </div>
      </swiper-slide>
      <!-- 第六页：OA -->
      <swiper-slide class="page06" id="page06">
        <div class="detail-page">
          <div class="paper-box ps-a ptp-t-15 tf-r-5">
            <div class="hp-100 bs-bb">
              <div class="p-30 ps-r zi-9998">
                <div class="pb-10">
                  <div class="lh-17">2020，与我相关的集团OA流程共计50项，其中由我发起的流程10项。</div>
                </div>
                <div class="pb-15">
                  <div>NL-02-对公付款单申请流程(数字本部)是我最常办理的流程。</div>
                </div>
                <div class="pb-15">
                  <div>我处理OA流程的平均耗时 为1小时50分40秒，处理时效超过全集团70%员工。</div>
                </div>
              </div>
              <div class="ps-a ps-b-8 fz-10 ta-c wp-100">数据来源：集团OA系统</div>
            </div>
            <div class="feather"></div>
          </div>
          <div class="fixed-hint f-ai-c" >
            <svg-icon icon-class="arrow" class="fz-18" />
            <span class="c-w fz-15">向上滑动查看下一页</span>
          </div>
          <div class="ps-a ps-b-0 zi-9999 p-20 c-w">
            <div class="c-w">姚琦玥 摄于 中国 · 新大陆科技园 · 北门</div>
            <div class="c-w">中国 · 福州 E116° 41' N26° 02’</div>
          </div>
        </div>
      </swiper-slide>
      <!-- 第七页：更多发现 -->
      <swiper-slide class="page07" id="page07">
        <div class="detail-page">
          <div class="paper-box ps-a ptp-t-15 tf-r-5">
            <div class="hp-100 bs-bb">
              <div class="p-30 ps-r zi-9998">
                <div class="pb-10">
                  <div class="lh-17">有着1234人的新大陆，人才济济，我在这里有幸遇到了</div>
                </div>
                <div class="pb-15">
                  <div>20位校友，同校情谊难忘怀，一定是特别的缘分，让我们都选择了这里。</div>
                </div>
                <div class="pb-15">
                  <div>2位和我同名同姓的同事，张晓丽 真是个响亮的名字，茫茫人海总是缘,相逢何必曾认识。</div>
                </div>
              </div>

              <div class="ps-a ps-b-8 fz-10 ta-c wp-100">
                <div class="fz-10 pl-20 pr-20 ta-l pb-10">想知道ta是谁吗？快到“新大陆APP-通讯录”中查找吧。</div>数据来源：集团EHR系统
              </div>
            </div>
            <div class="feather"></div>
          </div>
          <div class="fixed-hint f-ai-c" >
            <svg-icon icon-class="arrow" class="fz-18" />
            <span class="c-w fz-15">向上滑动查看下一页</span>
          </div>
          <div class="ps-a ps-b-0 zi-9999 p-20 c-w">
            <div class="c-w">姚琦玥 摄于 中国 · 新大陆科技园 · 北门</div>
            <div class="c-w">中国 · 福州 E116° 41' N26° 02’</div>
          </div>
        </div>
        <china-map></china-map>
      </swiper-slide>
      <!-- 第八页：祝福语 -->
      <swiper-slide class="page08" id="page08">
        <div class="detail-page">
          <!-- <div
            class="text-detail-box text-detail-box-01"
            :class="thisActiveIndex == 7 ? 'animated bounce' : ''"
          >
            <p class="font-important-color">2020年过去了</p>
            <p class="font-title-color">
              不知不觉，我和xxx一起走过了
              <span class="font-col-blue">9999天</span>
            </p>
            <p class="font-title-color" @click="saveImg('page08')">在习以为常的生活里，总有些简单而美好的相遇</p>
          </div>-->
          <div class="box ps-a ptp-t-10 br-8 ml-30 mr-30">
            <div class="hp-100 bs-bb">
              <div class="pl-30 pr-30 pt-15 pb-10 ps-r zi-9998">
                <div class="pb-15">
                  <div class="lh-17 c-w">
                    如果说2020年是人类命运的分水岭，
                    <br />那么，2021年将是“百年未有之大变局”的开启之年。
                    <br />疫情加速了治理现代化瓶颈的到来，全人类对数字化思维和技术的需求在一夜之间变得无比迫切。
                    <br />疫情改变了人类，数字将重塑人类。
                    <br />
                  </div>
                  <div class="c-w">
                    <span style="color:#ffff00">看时代：</span>数字智能将成为新时代标配
                  </div>
                  <div class="c-w">
                    <span style="color:#ffff00">看全球：</span>疫情重塑全球治理格局。
                  </div>
                  <div class="c-w">
                    <span style="color:#ffff00">看国家：</span>大难之后的中国凤凰涅槃。
                  </div>
                  <div class="c-w">
                    <span style="color:#ffff00">看企业：</span>数字化转型是唯一出路
                  </div>

                  <div class="c-w">
                    <span style="color:#ffff00">看自己：</span>顺势而为、乘风破浪方能迈向未来
                    2021年，人类即将开启数字世界的新纪元。
                    大道甚夷，唯有明“道”方能知“道”；
                    唯有知行合一方能跟随大道、成就大业！
                  </div>
                  <div class="ta-r" style="color:#ffff00">-------新大陆科技集团CEO王晶 新年致辞</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div class="fixed-hint f-ai-c" >
            <svg-icon icon-class="arrow" class="fz-18" />
            <span class="c-w fz-15">向上滑动查看下一页</span>
          </div>
          <div class="ps-a ps-b-0 zi-9999 p-20 c-w">
            <div class="c-w">姚琦玥 摄于 中国 · 新大陆科技园 · 北门</div>
            <div class="c-w">中国 · 福州 E116° 41' N26° 02’</div>
          </div>
        </div>
      </swiper-slide>
      <!-- 第九页：幸运符 -->
      <swiper-slide class="page09" id="page09">
        <div class="detail-page">
          <div class="f-c ps-a wp-100 ps-b-100">
            <div class="mr-30 btn">重获幸运符</div>
            <div class="btn" @click="saveImg('page01')">分享我的幸运</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getReport } from "@/api/index";
import headNav from "../components/nav";
import html2canvas from "html2canvas";
import chinaMap from "../components/Map/ChinaChart";
export default {
  components: {
    swiper,
    swiperSlide,
    headNav,
    chinaMap
  },
  data() {
    return {
      mapData: [
        {
          // "flight_ids": "11,18,24",
          from: "保山",
          from_longitude: "118.90",
          from_latitude: "28.864",
          to: "南昌",
          to_longitude: "115.900",
          to_latitude: "28.864",
          num: 483
        },
        {
          from: "烟台",
          from_longitude: "128.48",
          from_latitude: "41.63",
          to: "沈阳",
          to_longitude: "123.48",
          to_latitude: "41.63",
          num: 237
        }
      ],
      // 是否展示提示滑动文本
      showFixedHint: true,
      // 记录滑动前的slideIndex
      beforeSlideIndex: 0,
      // 记录当前swiper的activeIndex
      thisActiveIndex: 0,
      // swiper配置项
      swiperOption: {
        // effect: "fade", // 淡入
        direction: "vertical", // 垂直切换选项
        autoplay: false, // 是否自动播放
        height: window.innerHeight, // 高
        width: window.innerWidth, //宽
        speed: 700, // 切换速度
        on: {
          slideChange: () => {
            // debugger;
            let swiper = this.$refs.mySwiper.swiper;
            let slideIndex = swiper.activeIndex;
            this.thisActiveIndex = slideIndex;
            // console.log(slideIndex);
            if (slideIndex - this.beforeSlideIndex > 0) {
              // 向下滑动
              if (slideIndex == "1") {
                this.playVideo("video1");
              } else if (slideIndex == "2") {
                this.playVideo("video2");
              } else if (slideIndex == "3") {
                this.playVideo("video3");
              } else if (slideIndex == "4") {
                this.playVideo("video4");
              } else if (slideIndex == "5") {
                this.playVideo("video5");
              } else if (slideIndex == "6") {
                this.playVideo("video6");
              } else if (slideIndex == "7") {
                // this.showFixedHint = false;
                this.playVideo("video7");
              } else if (slideIndex == "8") {
                this.showFixedHint = false;
                this.playVideo("video7");
              }
            } else {
              // 向上回滑
              this.showFixedHint = true;
              if (slideIndex == "6") {
                this.playVideo("video8");
              } else if (slideIndex == "5") {
                this.playVideo("video9");
              } else if (slideIndex == "4") {
                this.playVideo("video10");
              } else if (slideIndex == "3") {
                this.playVideo("video11");
              } else if (slideIndex == "2") {
                this.playVideo("video12");
              } else if (slideIndex == "1") {
                this.playVideo("video13");
              } else if (slideIndex == "0") {
                this.playVideo("video14");
              }
            }
            this.beforeSlideIndex = slideIndex;
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    getReport() {
      getReport();
    },
    playVideo(DOM) {
      // let ele = document.getElementById(DOM);
      // ele.style.display = "block";
      // ele.play();
      // // 监听视频播放是否结束，结束隐藏当前视频
      // ele.addEventListener("ended", function() {
      //   ele.style.display = "none";
      // });
    },
    saveImg(id) {
      this.htmToBase64(id).then(canvas => {
        var base64 = canvas.toDataURL("image/png");
        if (!base64) {
          this.$toast("获取图片失败");
          return;
        }
        var bs64 = base64.split("base64,")[1];
        window.cordova.exec(
          function(result) {
            this.$toast("图片已保存到本地相册，请将图片分享给好友吧~");
          },
          function(error) {
            this.$toast("调用失败");
          },
          "WorkPlus_Image",
          "actionForLongPressImage",
          [{ imageData: bs64 }]
        );
      });
    },
    async htmToBase64(id) {
      var shareContent = document.querySelector(".page");
      var width = shareContent.offsetWidth;
      var height = shareContent.offsetHeight;
      var scale = 2;
      var opts = {
        scale: scale,
        useCORS: true,
        logging: true,
        width: width,
        height: height
      };
      return await html2canvas(document.querySelector(".page"), opts);
    }
  },
  mounted() {
    this.getReport();
  }
};
</script>


<style lang="scss" scoped>
.page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .feather {
    position: absolute;
    right: -30px;
    bottom: 60px;
    width: 130px;
    height: 130px;
    background: url(../assets/feather.png) no-repeat;
    background-size: 130px 130px;
    z-index: 6;
  }
  .fixed-hint {
    position: absolute;
    z-index: 10;
    padding-top: 60px;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: 600;
    animation: fixedHintAnimation 1s linear infinite;
    .triangle-icon {
      // position: absolute;
      // display: block;
      // left: 50%;
      // transform: translateX(-50%);
      // width: 0;
      // height: 0;
      &.triangle-icon-small {
        top: 0;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(../assets/arrow_up.png) no-repeat;
        background-size: 20px 20px;
      }
      &.triangle-icon-big {
        top: 30px;
        border-bottom: 18px solid #fff;
        border-right: 12px solid transparent;
        border-left: 12px solid transparent;
      }
    }
  }
  @keyframes fixedHintAnimation {
    0% {
      bottom: 10%;
      opacity: 0.5;
    }
    100% {
      bottom: 14%;
      opacity: 1;
    }
  }
  .detail-page {
    position: relative;
    display: block;
    width: 100%;
    height: 100vh;
    .text-detail-box {
      position: absolute;
      display: inline-block;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 10px 14px;
      border-radius: 10px;
      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .page01 {
    background: url(../assets/2.jpg) no-repeat;
    background-size: 100% 100%;
    .detail-page {
      .text-detail-box {
        top: 20%;
        left: 10%;
        &.have-animation {
          animation: line01Animation 1s linear;
        }
      }
    }
  }
  @keyframes line01Animation {
    0% {
      left: 0%;
      opacity: 0.2;
    }
    50% {
      left: 25%;
      opacity: 0.7;
    }
    100% {
      left: 10%;
      opacity: 1;
    }
  }

  .page02 {
    background: url(../assets/3.png) no-repeat;
    background-size: 100% 100%;
    .detail-page {
      .text-detail-box-01 {
        top: 20%;
        left: 10%;
      }
      .text-detail-box-02 {
        top: 50%;
        right: 10%;
      }
    }
  }
  .page03 {
    background: url(../assets/4.jpg) no-repeat;
    background-size: 100% 100%;
    .detail-page {
      .text-detail-box-01 {
        top: 20%;
        left: 10%;
      }
      .text-detail-box-02 {
        top: 50%;
        right: 10%;
      }
    }
  }
  .page04 {
    background: url(../assets/5.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .page05 {
    background: url(../assets/6.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .page06 {
    background: url(../assets/7.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .page07 {
    background: url(../assets/8.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .page08 {
    background: url(../assets/9.jpg) no-repeat;
    background-size: 100% 100%;
    .text-detail-box-01 {
      top: 30%;
      right: 10%;
    }
  }
  .page09 {
    background: url(../assets/10.png) no-repeat;
    background-size: 100% 100%;
    .btn {
      color: white;
      //  padding:5px 20px;
      border: 2px solid white;
      border-radius: 30px;
      font-size: 13px;
      width: 100px;
      text-align: center;
      line-height: 30px;
    }
  }
  .paper-box {
    color: black;
    // padding:40px;
    left: 0;
    right: 0;
    margin: auto;
    background: url(../assets/paper.png) no-repeat;
    background-size: 300px 450px;
    width: 300px;
    height: 450px;
    box-sizing: border-box;
  }
  .box {
    background: rgba(0, 0, 0, 0.5);
    color: white;
  }
}
</style>
