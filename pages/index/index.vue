<template>
	<view class="content">
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" class="carousel">
			<swiper-item v-for="(items,index) in swiper" :key="index">
				<image :src="items.image" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图 end -->
		<!-- 九宫格  start-->
		<view class="nine-wapper">
			<view class="nine">
				<view class="son">
					<image src="/static/logo.png" class="son-img"></image>
					<view class="son-text">品牌介绍</view>
				</view>
				<view class="son">
					<image src="/static/logo.png" class="son-img"></image>
					<view class="son-text">课程体系</view>
				</view>
				<view class="son">
					<image src="/static/logo.png" class="son-img"></image>
					<view class="son-text">产品优势</view>
				</view>
				<view class="son">
					<image src="/static/logo.png" class="son-img"></image>
					<view class="son-text">教师团队</view>
				</view>
			</view>
			<view class="nine">
				<view class="son">
					<image src="/static/logo.png" class="son-img"></image>
					<view class="son-text">优秀学员</view>
				</view>
				<view class="son">
					<image src="/static/logo.png" class="son-img"></image>
					<view class="son-text">口碑见证</view>
				</view>
				<view class="son">
					<image src="/static/logo.png" class="son-img"></image>
					<view class="son-text">联系我们</view>
				</view>
				<view class="son">
					<image src="/static/logo.png" class="son-img"></image>
					<view class="son-text">问题咨询</view>
				</view>
			</view>
		</view>
		<!-- 九宫格  end-->
		<!-- 新闻头条  start-->
		<view class="news">
			<view class="news-title">新闻头条</view>
			<view class="news-start">
				<swiper :indicator-dots="false" :vertical="true" :autoplay="true" class="news-swiper">
					<swiper-item v-for="(items,index) in news" :key="index">
						<!-- <image  class="carousel"></image> -->
						<view class="news-start-text">{{items}}</view>
					</swiper-item>
				</swiper>

			</view>
			<view class=""><button type="primary" plain="true" size="mini">更多</button></view>
		</view>
		<!-- 新闻头条  end-->
		<!-- 推荐课程 start -->
		<view class="lesson-wapper">
			<view class="lesson-top">
				<view class="lesson-title">/ 推荐课程 /</view>
				<view class="lesson-much">
					<text class="text-much" :selectable="true">更多</text>
				</view>
			</view>
			<view class="lesson-content">
				<view class="lesson-content-out">
					<view class="lesson-content-in">
						<image class="lesson-content-img" src="../../static/logo.png"></image>
						<view class="lesson-content-text">99元单次课程体验</view>
					</view>
					<view class="lesson-content-in">
						<image class="lesson-content-img" src="../../static/logo.png"></image>
						<view class="lesson-content-text">舞动介绍视频</view>
					</view>
				</view>
				<view class="lesson-content-out">
					<view class="lesson-content-in">
						<image class="lesson-content-img" src="../../static/logo.png"></image>
						<view class="lesson-content-text">少儿爵士舞</view>
					</view>
					<view class="lesson-content-in">
						<image class="lesson-content-img" src="../../static/logo.png"></image>
						<view class="lesson-content-text">成人爵士舞</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 推荐课程 end -->
		<!-- 优惠活动  start -->
		<view class="activity-wapper">
			<view class="activity-top">
				<view class="activity-title">/ 优惠活动 /</view>
				<view class="activity-much">
					<text class="text-much" :selectable="true">更多</text>
				</view>
			</view>
			<view class="activity-out">
				<image class="activity-content" src="../../static/logo.png"></image>
				<view class="activity-text">7.30前报名 减免200元学费</view>
				<image class="activity-content" src="../../static/logo.png"></image>
				<view class="activity-text">7.30前报名 减免200元学费</view>
			</view>

		</view>
		<!-- 优惠活动 end -->
		<!-- TA们说  satrt -->
		<view class="say-wapper">
			<view class="say-top">
				<view class="say-title">/ TA们说 /</view>
				<view class="say-much">
					<text class="text-much" :selectable="true">更多</text>
				</view>
			</view>
			<view class="say-bottom">
				<view class="user-wapper">
					<image class="user-head" src="../../static/logo.png"></image>
					<text class="user-name">杨春晓</text>
					<text class="user-time">发表于2017/01/15</text>
				</view>
				<text class="user-discuss">感觉这个课程还是挺不错的，我家孩子特别有效果，感谢学校，感谢老师</text>
			</view>
			<view class="say-bottom">
				<view class="user-wapper">
					<image class="user-head" src="../../static/logo.png"></image>
					<text class="user-name">杨春晓</text>
					<text class="user-time">发表于2017/01/15</text>
				</view>
				<text class="user-discuss">感觉这个课程还是挺不错的，我家孩子特别有效果，感谢学校，感谢老师</text>
			</view>
			<view class="say-bottom">
				<view class="user-wapper">
					<image class="user-head" src="../../static/logo.png"></image>
					<text class="user-name">杨春晓</text>
					<text class="user-time">发表于2017/01/15</text>
				</view>
				<text class="user-discuss">感觉这个课程还是挺不错的，我家孩子特别有效果，感谢学校，感谢老师</text>
			</view>
			<!-- TA们说  end -->
		</view>
		<!-- 底部结束语   start -->
		<view class="end-wapper">
			<image class="end-logo" src="../../static/logo.png"></image>
			<text class="end-text">晨晓网络技术支持</text>
		</view>
		<!-- 底部结束语   end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper: [],
				news: ["爵士舞1班 开班仪式", "爵士舞2班 开班仪式", "爵士舞3班 开班仪式", "爵士舞4班 开班仪式", ],
			}
		},
		onLoad() {
			uni.request({
				url: this.serverUrl + "/slide", //仅为示例，并非真实接口地址。
				method: "GET",
				success: (res) => {
					console.log(res.data.data);
					this.swiper = res.data.data;
				}
			});

		},
		methods: {}
	}
</script>

<style scoped>
	.carousel {
		width: 100%;
		height: 300upx;
	}

	.nine-wapper {
		display: flex;
		flex-direction: column;
		background-color: #fffcf3;
	}

	.nine {
		display: flex;
		flex-direction: row;
	}

	.son {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 157.5upx;
		width: 187.5upx;
		/* border: 1upx solid red; */
	}

	.son-img {
		height: 103.7upx;
		width: 103.7upx;
		border-radius: 50%;
		/* border: 0.1upx solid red; */
		margin-top: 10upx;

	}

	.son-text {
		height: 10upx;
		width: 100%;
		/* border: 0.1upx solid red; */
		flex-grow: 1;
		text-align: center;
	}

	.news {
		display: flex;
		flex-direction: row;
		background-color: #fffcf3;
		margin-top: 5upx;
		width: 100%;
		height: 65upx;
	}

	.news-title {
		font-weight: bold;
		line-height: 65upx;
		margin-left: 15upx;
	}

	.news-start {
		margin-left: 25upx;
		flex-grow: 1;
		color: #c1c1c1;
		line-height: 65upx;
	}

	.news-swiper {
		width: 100%;
		height: 100%;
	}

	.lesson-wapper {
		display: flex;
		flex-direction: column;
		margin-top: 15upx;
		background-color: #fffcf3;
	}

	.text-much {
		color: #3fbaf1;
		position: absolute;
		top: 0;
		right: 30upx;
	}

	.lesson-top {
		position: relative;
		margin-top: 20upx;
	}

	.lesson-title {
		text-align: center;
		margin: 0 auto;
	}

	.lesson-content {
		display: flex;
		flex-direction: column;
	}

	.lesson-content-out {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 15upx;
	}

	.lesson-content-img {
		height: 190upx;
		width: 355upx;
	}

	.lesson-content-in {
		/* border: 0.1px solid red; */
	}

	.activity-wapper {
		display: flex;
		flex-direction: column;
		margin-top: 15upx;
		background-color: #fffcf3;
		padding: 15upx 0;
	}

	.activity-top {
		position: relative;
	}

	.activity-title {
		text-align: center;
		margin: 0 auto;
	}

	.activity-out {
		display: flex;
		flex-direction: column;
	}

	.activity-content {
		height: 200upx;
		width: 100%;
		margin-top: 15upx;
	}

	.activity-text {
		margin-top: 15upx;
	}

	.say-wapper {
		display: flex;
		flex-direction: column;
		margin-top: 15upx;
		background-color: #fffcf3;
		padding: 15upx 0;
	}

	.say-top {
		position: relative;
	}

	.say-title {
		text-align: center;
		margin: 0 auto;
	}

	.say-bottom {
		margin: 20upx 0;
		/* border: 0.1px solid red; */
	}

	.user-wapper {
		display: flex;
		flex-direction: row;
		position: relative;
		margin-bottom: 25upx;
	}

	.user-head {
		height: 80upx;
		width: 80upx;
		border-radius: 50%;
	}

	.user-name {
		margin-left: 10upx;
	}

	.user-time {
		color: #c1c1c1;
		position: absolute;
		right: 20upx;
		bottom: 0;
	}

	.user-discuss {
		color: #c1c1c1;
	}

	.end-wapper {
		display: flex;
		flex-direction: column;
		text-align: center;
		margin-top: 10px;
	}

	.end-logo {
		height: 100upx;
		width: 100upx;
		border-radius: 50%;
		margin: 0 auto;
	}
</style>
