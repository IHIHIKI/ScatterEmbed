<template>
	<section class="pop-in">
		<!--<section class="back-bar">-->
			<!--<figure class="arrow" @click="returnResult">-->
				<!--<i class="icon-left-small"></i>-->
			<!--</figure>-->
		<!--</section>-->

		<section class="container">

			<figure class="icon">
				<svg viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<g id="confirm_delete" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
						<circle id="Base" stroke="#FF0707" cx="43.7079646" cy="43.7079646" r="43.7079646"></circle>
						<path d="M53.92,67 L35.08,67 C33.042,67 31.33,65.468 31.104,63.442 L27.5,31 L61.5,31 L57.896,63.442 C57.67,65.468 55.958,67 53.92,67 Z M38.5,23 C38.5,21.896 39.396,21 40.5,21 L48.5,21 C49.604,21 50.5,21.896 50.5,23 L62.5,23 C63.604,23 64.5,23.896 64.5,25 C64.5,26.104 63.604,27 62.5,27 L26.5,27 C25.396,27 24.5,26.104 24.5,25 C24.5,23.896 25.396,23 26.5,23 L38.5,23 Z" id="Combined-Shape" stroke="#FF0707"></path>
					</g>
				</svg>
			</figure>



			<figure class="title">{{$t('popins.fullscreen.removeKeypair.title')}}</figure>
			<figure class="subtitle">{{keypair.name}} ({{keypair.accounts().length}} {{$tc('generic.accounts', keypair.accounts().length)}})</figure>

			<section class="disclaimer">
				<figure class="title">{{$t('popins.fullscreen.removeKeypair.permanent')}}</figure>
				<figure class="description">{{$t('popins.fullscreen.removeKeypair.removesAll')}}</figure>
			</section>
		</section>

		<ActionBar :buttons-left="[{text:$t('generic.cancel'), click:() => returnResult(false)}]" :buttons-right="[{text:$t('generic.remove'), red:true, click:() => returnResult(true)}]" />

	</section>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	import * as Actions from "@walletpack/core/store/constants";
	import '../../../styles/popins.scss';
	import KeyPairService from "@walletpack/core/services/secure/KeyPairService";
	import BalanceService from "@walletpack/core/services/blockchain/BalanceService";
	import * as UIActions from "../../../store/ui_actions";

	export default {
		props:['popin'],
		computed:{
			...mapGetters([
				'history'
			]),
			keypair(){
				return this.popin.data.props.keypair;
			}
		},
		methods:{
			async returnResult(removing){
				if(removing) {
					await KeyPairService.removeKeyPair(this.keypair);
					await BalanceService.removeStaleBalances();
				}
				this.popin.data.callback(removing);
				this[UIActions.RELEASE_POPUP](this.popin);
			},

			...mapActions([
				UIActions.RELEASE_POPUP,
				Actions.DELTA_HISTORY
			])
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../styles/variables";

	.back-bar {
		background:$blue-gradient;
		height:180px;
		padding:40px;

		.arrow {
			font-size: 48px;
			color:$white;
		}
	}

</style>
