<template>
	<view class="container">
		我的
		</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0
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
.lesson-wapper{
	display: flex;
	flex-direction: column;
	border: 0.1px solid red;
}
.lesson-img{
	height: 300upx;
	width: 100%;
}
</style>
