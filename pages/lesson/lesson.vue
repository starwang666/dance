<template>
	<view class="content">
		<scroll-view scroll-x class="bg-white nav fixed">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in ['少儿','成人']" :key="index"
				 @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<!-- 少儿tab   start -->
		<view v-if="TabCur==0">
			<view class="child-wapper">
				<view class="stone"></view>
				<view class="child">
					<image class="child-img" src="../../static/logo.png"></image>
					<text class="child-title">少儿爵士舞考级</text>
					<text class="child-content">少年爵士舞考级教材适应于4-16岁青少年儿童，教材涵盖律动、嘻哈、白老汇等风格</text>
				</view>

				<view class="child">
					<image class="child-img" src="../../static/logo.png"></image>
					<text class="child-title">少儿爵士舞考级</text>
					<text class="child-content">少年爵士舞考级教材适应于4-16岁青少年儿童，教材涵盖律动、嘻哈、白老汇等风格</text>
				</view>

				<view class="child">
					<image class="child-img" src="../../static/logo.png"></image>
					<text class="child-title">少儿爵士舞考级</text>
					<text class="child-content">少年爵士舞考级教材适应于4-16岁青少年儿童，教材涵盖律动、嘻哈、白老汇等风格</text>
				</view>
			</view>
		</view>
		<!-- 少儿tab   end -->
		<view v-else class="">
			<view class="child-wapper">
				<view class="stone"></view>
				<view class="child">
					<image class="child-img" src="../../static/logo.png"></image>
					<text class="child-title">成人爵士舞考级</text>
					<text class="child-content">成人爵士舞考级教材适应于4-16岁青成人儿童，教材涵盖律动、嘻哈、白老汇等风格</text>
				</view>
			
				<view class="child">
					<image class="child-img" src="../../static/logo.png"></image>
					<text class="child-title">成人爵士舞考级</text>
					<text class="child-content">成人爵士舞考级教材适应于4-16岁青成人儿童，教材涵盖律动、嘻哈、白老汇等风格</text>
				</view>
			
				<view class="child">
					<image class="child-img" src="../../static/logo.png"></image>
					<text class="child-title">成人爵士舞考级</text>
					<text class="child-content">成人爵士舞考级教材适应于4-16岁青成人儿童，教材涵盖律动、嘻哈、白老汇等风格</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
			}
		},
		methods: {
			tabSelect(e) {
				console.log(e);
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
		/* height: 100%; */
	}
	.fixed {
		position: fixed;
	}

	.text-orange,
	.line-orange,
	.lines-orange {
		color: #00b26a;
	}

	.child-wapper {
		display: flex;
		flex-direction: column;
	}
	.child {
		display: flex;
		flex-direction: column;
		margin: 10upx 30upx;
		background: #fefefe;
	}
	.stone {
		height: 90upx;
		width: 100%;
	}
	.child-img {
		height: 400upx;
		width: 100%;
	}

	.child-title {
		font-weight: bold;
		margin-top: 20upx;
		margin-left: 20upx;
	}
	.child-content{
		margin-top: 10upx;
		margin-left: 20upx;
	}
</style>
