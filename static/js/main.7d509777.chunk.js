(this["webpackJsonpsurf.finance"] = this["webpackJsonpsurf.finance"] || []).push([
    [0],
    {
        16: function (e, t, a) {
            e.exports = a.p + "xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/static/media/surf.64873d91.png";
        },
        334: function (e, t, a) {
            e.exports = a.p + "xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/static/media/discord.81658c0b.png";
        },
        335: function (e, t, a) {
            e.exports = a.p + "xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/static/media/telegram.b37d6df3.png";
        },
        336: function (e, t, a) {
            e.exports = a.p + "xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/static/media/twitter.6c666985.png";
        },
        338: function (e, t, a) {
            e.exports = a(902);
        },
        343: function (e, t, a) {},
        344: function (e, t, a) {},
        563: function (e, t) {},
        57: function (e, t, a) {
            e.exports = a.p + "xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/static/media/eth.87347c33.png";
        },
        571: function (e, t) {},
        589: function (e, t) {},
        591: function (e, t) {},
        606: function (e, t) {},
        608: function (e, t) {},
        670: function (e, t) {},
        672: function (e, t) {},
        682: function (e, t) {},
        684: function (e, t) {},
        70: function (e, t, a) {
            e.exports = a.p + "xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/static/media/uni.bc26463f.png";
        },
        713: function (e, t) {},
        902: function (e, t, a) {
            "use strict";
            a.r(t);
            var s = a(0),
                n = a.n(s),
                l = a(325),
                i = a.n(l),
                r = (a(343), a(344), a(19)),
                c = a(337),
                o = a(31),
                m = a(30),
                u = a(328),
                p = a.n(u),
                d = a(329),
                h = a.n(d),
                b = a(23),
                y = a(123),
                f = a.n(y),
                E = a(20),
                k = a(26),
                v = a(9),
                N = a.n(v),
                S = a(180),
                T = a(81),
                g = a.n(T),
                w = a(331),
                x = a.n(w),
                F = a(332),
                P = a.n(F),
                C = [
                    {
                        inputs: [{ internalType: "address", name: "account", type: "address" }],
                        name: "balanceOf",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "decimals",
                        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [
                            { internalType: "address", name: "owner", type: "address" },
                            { internalType: "address", name: "spender", type: "address" },
                        ],
                        name: "allowance",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [
                            { internalType: "address", name: "spender", type: "address" },
                            { internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "approve",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "totalSupply",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                ],
                U = [
                    {
                        inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
                        name: "depositInto",
                        outputs: [{ internalType: "uint256", name: "lpReceived", type: "uint256" }],
                        stateMutability: "payable",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
                        name: "giveFor",
                        outputs: [{ internalType: "uint256", name: "lpReceived", type: "uint256" }],
                        stateMutability: "payable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "stake",
                        outputs: [{ internalType: "uint256", name: "lpReceived", type: "uint256" }],
                        stateMutability: "payable",
                        type: "function",
                    },
                ],
                L = [
                    {
                        inputs: [
                            { internalType: "contract SURF", name: "_surf", type: "address" },
                            { internalType: "contract Tito", name: "_tito", type: "address" },
                        ],
                        stateMutability: "nonpayable",
                        type: "constructor",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !1, internalType: "uint256", name: "surfAmount", type: "uint256" },
                        ],
                        name: "Claim",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !1, internalType: "uint256", name: "ethReward", type: "uint256" },
                        ],
                        name: "EthRewardAdded",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "previousOwner", type: "address" },
                            { indexed: !0, internalType: "address", name: "newOwner", type: "address" },
                        ],
                        name: "OwnershipTransferred",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "Stake",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !1, internalType: "uint256", name: "surfReward", type: "uint256" },
                        ],
                        name: "SurfRewardAdded",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "Withdraw",
                        type: "event",
                    },
                    {
                        inputs: [],
                        name: "INITIAL_PAYOUT_INTERVAL",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "accSurfPerShare",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "active",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "devAddress",
                        outputs: [{ internalType: "address", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "initialSurfReward",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "initialSurfRewardPerDay",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "lastPayout",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "owner",
                        outputs: [{ internalType: "address", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
                    {
                        inputs: [],
                        name: "startTime",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "surf",
                        outputs: [{ internalType: "contract SURF", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "surfPool",
                        outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "tito",
                        outputs: [{ internalType: "contract Tito", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "totalPendingSurf",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "totalStaked",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
                        name: "transferOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "uniswapRouter",
                        outputs: [{ internalType: "contract IUniswapV2Router02", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "", type: "address" }],
                        name: "userInfo",
                        outputs: [
                            { internalType: "uint256", name: "staked", type: "uint256" },
                            { internalType: "uint256", name: "rewardDebt", type: "uint256" },
                            { internalType: "uint256", name: "claimed", type: "uint256" },
                        ],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "weth",
                        outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    { stateMutability: "payable", type: "receive" },
                    { inputs: [], name: "activate", outputs: [], stateMutability: "nonpayable", type: "function" },
                    {
                        inputs: [
                            { internalType: "address", name: "_from", type: "address" },
                            { internalType: "uint256", name: "_amount", type: "uint256" },
                        ],
                        name: "addSurfReward",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    { inputs: [], name: "addEthReward", outputs: [], stateMutability: "payable", type: "function" },
                    {
                        inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
                        name: "stake",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [
                            { internalType: "address", name: "_user", type: "address" },
                            { internalType: "uint256", name: "_amount", type: "uint256" },
                        ],
                        name: "stakeFor",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    { inputs: [], name: "claim", outputs: [], stateMutability: "nonpayable", type: "function" },
                    {
                        inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
                        name: "withdraw",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "_tokenAddress", type: "address" }],
                        name: "recoverERC20",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "payoutNumber",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "timeUntilNextPayout",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "uint256", name: "_payoutNumber", type: "uint256" }],
                        name: "rewardAtPayout",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "_user", type: "address" }],
                        name: "getAllInfoFor",
                        outputs: [
                            { internalType: "bool", name: "isActive", type: "bool" },
                            { internalType: "uint256[12]", name: "info", type: "uint256[12]" },
                        ],
                        stateMutability: "view",
                        type: "function",
                    },
                ],
                M = [
                    {
                        inputs: [
                            { internalType: "contract SURF", name: "_surf", type: "address" },
                            { internalType: "address payable", name: "_devAddress", type: "address" },
                            { internalType: "uint256", name: "_startBlock", type: "uint256" },
                        ],
                        stateMutability: "nonpayable",
                        type: "constructor",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !0, internalType: "uint256", name: "pid", type: "uint256" },
                            { indexed: !1, internalType: "uint256", name: "surfAmount", type: "uint256" },
                            { indexed: !1, internalType: "uint256", name: "uniAmount", type: "uint256" },
                        ],
                        name: "Claim",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !1, internalType: "uint256", name: "surfAmount", type: "uint256" },
                            { indexed: !1, internalType: "uint256", name: "uniAmount", type: "uint256" },
                        ],
                        name: "ClaimAll",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !0, internalType: "uint256", name: "pid", type: "uint256" },
                            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "Deposit",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !0, internalType: "uint256", name: "pid", type: "uint256" },
                            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "EmergencyWithdraw",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "previousOwner", type: "address" },
                            { indexed: !0, internalType: "address", name: "newOwner", type: "address" },
                        ],
                        name: "OwnershipTransferred",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !1, internalType: "uint256", name: "ethSpentOnSurf", type: "uint256" },
                            { indexed: !1, internalType: "uint256", name: "surfBought", type: "uint256" },
                        ],
                        name: "SurfBuyback",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !1, internalType: "uint256", name: "surfLiquidity", type: "uint256" },
                            { indexed: !1, internalType: "uint256", name: "ethLiquidity", type: "uint256" },
                        ],
                        name: "SurfPoolActive",
                        type: "event",
                    },
                    {
                        anonymous: !1,
                        inputs: [
                            { indexed: !0, internalType: "address", name: "user", type: "address" },
                            { indexed: !0, internalType: "uint256", name: "pid", type: "uint256" },
                            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
                        ],
                        name: "Withdraw",
                        type: "event",
                    },
                    {
                        inputs: [],
                        name: "APPROX_BLOCKS_PER_YEAR",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "DEFAULT_APR",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "SOFT_LAUNCH_DURATION",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "SOFT_LAUNCH_SURF_PER_BLOCK",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "", type: "address" }],
                        name: "contractWhitelist",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "devAddress",
                        outputs: [{ internalType: "address payable", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "donatedETH",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "", type: "address" }],
                        name: "donaters",
                        outputs: [{ internalType: "address", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "", type: "address" }],
                        name: "donations",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "", type: "address" }],
                        name: "existingPools",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "initialSurfPoolETH",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "lockedSurfLPTokens",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "minimumDonationAmount",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "owner",
                        outputs: [{ internalType: "address", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        name: "poolInfo",
                        outputs: [
                            { internalType: "contract IERC20", name: "token", type: "address" },
                            { internalType: "contract IERC20", name: "lpToken", type: "address" },
                            { internalType: "uint256", name: "apr", type: "uint256" },
                            { internalType: "uint256", name: "lastSurfRewardBlock", type: "uint256" },
                            { internalType: "uint256", name: "accSurfPerShare", type: "uint256" },
                            { internalType: "uint256", name: "accUniPerShare", type: "uint256" },
                            { internalType: "address", name: "uniStakeContract", type: "address" },
                        ],
                        stateMutability: "view",
                        type: "function",
                    },
                    { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
                    {
                        inputs: [],
                        name: "startBlock",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "surf",
                        outputs: [{ internalType: "contract SURF", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "surfPoolActive",
                        outputs: [{ internalType: "bool", name: "", type: "bool" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "surfPoolAddress",
                        outputs: [{ internalType: "address", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "surfSentToWhirlpool",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
                        name: "transferOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "uniStakingFactory",
                        outputs: [{ internalType: "contract StakingRewardsFactory", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "uniToken",
                        outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "uniswapRouter",
                        outputs: [{ internalType: "contract IUniswapV2Router02", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [
                            { internalType: "uint256", name: "", type: "uint256" },
                            { internalType: "address", name: "", type: "address" },
                        ],
                        name: "userInfo",
                        outputs: [
                            { internalType: "uint256", name: "staked", type: "uint256" },
                            { internalType: "uint256", name: "rewardDebt", type: "uint256" },
                            { internalType: "uint256", name: "uniRewardDebt", type: "uint256" },
                            { internalType: "uint256", name: "claimed", type: "uint256" },
                            { internalType: "uint256", name: "uniClaimed", type: "uint256" },
                        ],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "weth",
                        outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "whirlpool",
                        outputs: [{ internalType: "contract Whirlpool", name: "", type: "address" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    { stateMutability: "payable", type: "receive" },
                    {
                        inputs: [
                            { internalType: "contract IERC20", name: "_token", type: "address" },
                            { internalType: "address", name: "_lpToken", type: "address" },
                            { internalType: "uint256", name: "_apr", type: "uint256" },
                            { internalType: "bool", name: "_requireDonation", type: "bool" },
                        ],
                        name: "addPool",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [
                            { internalType: "uint256", name: "_pid", type: "uint256" },
                            { internalType: "uint256", name: "_apr", type: "uint256" },
                        ],
                        name: "setApr",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "_contractAddress", type: "address" }],
                        name: "addToWhitelist",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "_contractAddress", type: "address" }],
                        name: "removeFromWhitelist",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "poolLength",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "_user", type: "address" }],
                        name: "getAllPoolInfoFor",
                        outputs: [
                            { internalType: "address[]", name: "tokens", type: "address[]" },
                            { internalType: "address[]", name: "lpTokens", type: "address[]" },
                            { internalType: "bool[]", name: "isUnis", type: "bool[]" },
                            { internalType: "uint256[]", name: "aprs", type: "uint256[]" },
                            { internalType: "uint256[]", name: "lastSurfRewardBlocks", type: "uint256[]" },
                            { internalType: "uint256[2][]", name: "accTokensPerShares", type: "uint256[2][]" },
                            { internalType: "uint256[17][]", name: "metadatas", type: "uint256[17][]" },
                        ],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "_user", type: "address" }],
                        name: "getAllInfoFor",
                        outputs: [
                            { internalType: "bool", name: "poolActive", type: "bool" },
                            { internalType: "uint256[8]", name: "info", type: "uint256[8]" },
                        ],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "blocksUntilLaunch",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "blocksUntilSurfPoolCanBeActivated",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "blocksUntilSoftLaunchEnds",
                        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                        stateMutability: "view",
                        type: "function",
                    },
                    { inputs: [], name: "massUpdatePools", outputs: [], stateMutability: "nonpayable", type: "function" },
                    {
                        inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
                        name: "updatePool",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [
                            { internalType: "uint256", name: "_pid", type: "uint256" },
                            { internalType: "uint256", name: "_amount", type: "uint256" },
                        ],
                        name: "deposit",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [
                            { internalType: "uint256", name: "_pid", type: "uint256" },
                            { internalType: "address", name: "_user", type: "address" },
                            { internalType: "uint256", name: "_amount", type: "uint256" },
                        ],
                        name: "depositFor",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
                        name: "claim",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    { inputs: [], name: "claimAll", outputs: [], stateMutability: "nonpayable", type: "function" },
                    {
                        inputs: [
                            { internalType: "uint256", name: "_pid", type: "uint256" },
                            { internalType: "uint256", name: "_amount", type: "uint256" },
                        ],
                        name: "withdraw",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    { inputs: [], name: "migrateSURFLPtoWhirlpool", outputs: [], stateMutability: "nonpayable", type: "function" },
                    {
                        inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
                        name: "emergencyWithdraw",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address payable", name: "_devAddress", type: "address" }],
                        name: "dev",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "contract Whirlpool", name: "_whirlpool", type: "address" }],
                        name: "setWhirlpoolContract",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    { inputs: [], name: "activateSurfPool", outputs: [], stateMutability: "nonpayable", type: "function" },
                    {
                        inputs: [{ internalType: "address", name: "_lpToken", type: "address" }],
                        name: "donate",
                        outputs: [],
                        stateMutability: "payable",
                        type: "function",
                    },
                    {
                        inputs: [{ internalType: "address", name: "_lpToken", type: "address" }],
                        name: "removeDonation",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                ],
                B = new x.a({
                    network: "mainnet",
                    cacheProvider: !0,
                    providerOptions: { walletconnect: { package: P.a, options: { infuraId: "254b5e2346274031a656970595058edf" } } },
                }),
                A = void 0,
                R = void 0,
                O = void 0,
                W = (e) => {
                    O = e.length ? e[0] : void 0;
                },
                I = (function () {
                    var e = Object(S.a)(
                        N.a.mark(function e() {
                            var t;
                            return N.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (void 0 !== R) {
                                                e.next = 10;
                                                break;
                                            }
                                            return (e.next = 3), B.connect();
                                        case 3:
                                            return (A = e.sent), (R = new g.a(A)), (e.next = 7), R.eth.getAccounts();
                                        case 7:
                                            (t = e.sent), (O = t.length ? t[0] : void 0), A.on("accountsChanged", W);
                                        case 10:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })();
            B.cachedProvider && I();
            var H = (function () {
                    var e = Object(S.a)(
                        N.a.mark(function e() {
                            return N.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if ((A && A.off("accountsChanged", W), !(R && R.currentProvider && R.currentProvider.close))) {
                                                e.next = 4;
                                                break;
                                            }
                                            return (e.next = 4), R.currentProvider.close();
                                        case 4:
                                            return (e.next = 6), B.clearCachedProvider();
                                        case 6:
                                            (A = void 0), (R = void 0), (O = void 0);
                                        case 9:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function () {
                        return e.apply(this, arguments);
                    };
                })(),
                _ = window.web3,
                D = window.ethereum,
                j = new g.a(
                    D ||
                        (_
                            ? _.currentProvider
                            : g.a.givenProvider
                            ? g.a.givenProvider
                            : new g.a.providers.WebsocketProvider(
                                  "wss://".concat("mainnet", ".infura.io/ws/v3/").concat("254b5e2346274031a656970595058edf")
                              ))
                ),
                q = () => {
                    var e = void 0;
                    return R && (e = O), e;
                },
                V = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                $ = "0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
                J = (new j.eth.Contract(C, $), "0x65E5BC985b8399B338C3C55ff1e3c048586d50ca"),
                X = new j.eth.Contract(M, J),
                Y = () => (R ? new R.eth.Contract(M, J) : void 0),
                z = new j.eth.Contract(M, "0x6Db1C1B318275df254Bb47c63e7F316380bAf4be"),
                G = "0x999b1e6EDCb412b59ECF0C5e14c20948Ce81F40b",
                K = new j.eth.Contract(L, G),
                Z = () => (R ? new R.eth.Contract(L, G) : void 0),
                Q = () => (R ? new R.eth.Contract(U, "0x7847426B80b2565D14720b9ed0243840250C15aa") : void 0),
                ee = (e) => (R ? new R.eth.Contract(C, e) : void 0),
                te = "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                ae = (e, t) => {
                    if (void 0 === e || "" === e || Number.isNaN(e)) return "-";
                    var a = parseInt(t),
                        s = parseFloat(e),
                        n = Math.floor(((l = Math.abs(s)), Math.log(l) / Math.log(10)));
                    s > 0 && s < Math.pow(10, -1 * Math.max(0, a - 2)) && (a = Math.min(3 - n, a + 4));
                    var l,
                        i = "";
                    return (
                        n >= 9 ? ((i = "B"), (s /= 1e9), (n -= 9)) : n >= 6 && ((i = "M"), (s /= 1e6), (n -= 6)),
                        (n = Math.min(a, a - n)),
                        s.toLocaleString(void 0, { minimumFractionDigits: 0, maximumFractionDigits: Math.max(n, 0) }) + i
                    );
                },
                se = (e, t) => (0 === t ? 0 : Math.abs(e - t) / t),
                ne = a(16),
                le = a.n(ne);
            class ie extends s.Component {
                constructor(e) {
                    super(e), (this.state = { menuOpen: !1 });
                }
                componentDidMount() {
                    (this.lastAccount = q()),
                        (this.loop = setInterval(
                            function () {
                                var e = q();
                                this.lastAccount !== e && ((this.lastAccount = e), this.forceUpdate());
                            }.bind(this),
                            100
                        ));
                }
                componentDidUpdate(e) {
                    this.props.location !== e.location && this.setState({ menuOpen: !1 }),
                        this.props.network !== e.network && this.setState({ network: this.props.network });
                }
                componentWillUnmount() {
                    this.loop && (clearInterval(this.loop), (this.loop = void 0));
                }
                toggleMenu() {
                    this.ignoreClick ||
                        this.setState({ menuOpen: !this.state.menuOpen }, () => {
                            this.state.menuOpen && this.ref && this.ref.focus();
                        });
                }
                render() {
                    var e = q();
                    return n.a.createElement(
                        s.Fragment,
                        null,
                        n.a.createElement(
                            "div",
                            { className: "container-fliud sticky-top".concat(this.state.menuOpen ? " open" : ""), id: "header" },
                            this.state.network &&
                                "main" !== this.state.network &&
                                n.a.createElement(
                                    "div",
                                    { className: "row mx-0", id: "networkError" },
                                    n.a.createElement(
                                        "div",
                                        { className: "container py-1" },
                                        n.a.createElement(
                                            "div",
                                            { className: "row" },
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 text-center" },
                                                n.a.createElement("small", null, "Please switch to the", " ", "Main", " ", "Ethereum network.")
                                            )
                                        )
                                    )
                                ),
                            n.a.createElement(
                                "div",
                                { className: "row mx-0" },
                                n.a.createElement(
                                    "div",
                                    { className: "container py-2" },
                                    n.a.createElement(
                                        "div",
                                        { className: "row d-flex flex-wrap align-items-center justify-content-center" },
                                        n.a.createElement(
                                            "div",
                                            { className: "col-8 col-md-4 col-lg-3 py-2" },
                                            n.a.createElement(
                                                b.b,
                                                { exact: !0, activeClassName: "active", to: "/", className: "d-flex align-items-center link" },
                                                n.a.createElement(
                                                    "div",
                                                    { id: "icon" },
                                                    n.a.createElement("img", { src: le.a, alt: "SURF Finance Logo", className: "w-100" })
                                                ),
                                                n.a.createElement("span", { className: "fancy large pl-2" }, "Surf Finance")
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            { className: "col-4 d-md-none text-right py-2" },
                                            n.a.createElement(
                                                "span",
                                                {
                                                    id: "toggleMenu",
                                                    onClick: this.toggleMenu.bind(this),
                                                    onMouseDown: () => {
                                                        this.ignoreClick = this.state.menuOpen;
                                                    },
                                                },
                                                n.a.createElement(E.a, { icon: k.a })
                                            )
                                        ),
                                        n.a.createElement(
                                            "div",
                                            {
                                                ref: (e) => {
                                                    this.ref = e;
                                                },
                                                tabIndex: "0",
                                                onBlur: () => this.setState({ menuOpen: !1 }),
                                                className:
                                                    "col-12 col-md-8 col-lg-9 d-flex flex-wrap align-items-center justify-content-center justify-content-md-end navMenu",
                                                id: "nav",
                                            },
                                            n.a.createElement("div", { className: "d-block d-md-none pt-2 w-100" }),
                                            n.a.createElement(
                                                b.b,
                                                { exact: !0, activeClassName: "active", to: "/" },
                                                n.a.createElement("span", { className: "px-3 py-2 d-block" }, "Home")
                                            ),
                                            n.a.createElement(
                                                b.b,
                                                { exact: !0, activeClassName: "active", to: "/beaches" },
                                                n.a.createElement("span", { className: "px-3 py-2 d-block" }, "Beaches")
                                            ),
                                            n.a.createElement(
                                                b.b,
                                                { exact: !0, activeClassName: "active", to: "/whirlpool" },
                                                n.a.createElement("span", { className: "px-3 py-2 d-block" }, "Whirlpool")
                                            ),
                                            n.a.createElement(
                                                b.b,
                                                { exact: !0, activeClassName: "active", to: "/community" },
                                                n.a.createElement("span", { className: "px-3 py-2 d-block" }, "Community")
                                            ),
                                            n.a.createElement(
                                                "a",
                                                {
                                                    href: "https://opensea.io/assets/the-surf-boards/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "px-3 py-2 d-block link",
                                                },
                                                "SURF Boards",
                                                " ",
                                                n.a.createElement(E.a, { icon: k.b, className: "small", style: { marginBottom: "1px" } })
                                            ),
                                            n.a.createElement(
                                                "a",
                                                {
                                                    href: "https://app.uniswap.org/#/swap?outputCurrency=".concat($),
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "px-3 py-2 d-block link",
                                                },
                                                "Buy SURF",
                                                " ",
                                                n.a.createElement(E.a, { icon: k.b, className: "small", style: { marginBottom: "1px" } })
                                            ),
                                            !e &&
                                                n.a.createElement(
                                                    "div",
                                                    { className: "p-2 d-block" },
                                                    n.a.createElement(
                                                        "div",
                                                        { id: "connect", className: "pointer px-3", onClick: I },
                                                        "Connect Wallet"
                                                    )
                                                ),
                                            e &&
                                                n.a.createElement(
                                                    b.a,
                                                    { to: "/my-account", className: "px-3 py-2 d-block link" },
                                                    n.a.createElement(
                                                        "div",
                                                        { id: "account" },
                                                        n.a.createElement(f.a, { seed: e.toLowerCase(), scale: 8, className: "absPos" })
                                                    )
                                                )
                                        )
                                    )
                                )
                            )
                        )
                    );
                }
            }
            var re = Object(r.g)(ie),
                ce = a(100),
                oe = () =>
                    n.a.createElement(
                        "div",
                        { className: "container-fliud mt-auto", id: "footer" },
                        n.a.createElement(
                            "div",
                            { className: "row mx-0" },
                            n.a.createElement(
                                "div",
                                { className: "container py-2" },
                                n.a.createElement(
                                    "div",
                                    { className: "row align-items-start" },
                                    n.a.createElement(
                                        "div",
                                        { className: "col-12 col-md-4 mx-auto text-center my-3" },
                                        n.a.createElement("img", {
                                            src: le.a,
                                            alt: "SURF Finance Logo",
                                            className: "d-block w-100 mx-auto",
                                            id: "footerLogo",
                                        }),
                                        n.a.createElement("h6", { className: "mt-2 mb-1 fancy larger" }, "Surf Finance"),
                                        n.a.createElement("p", { className: "mb-0" }, "DeFi's Next Big Wave")
                                    ),
                                    n.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "col-12 col-md-4 d-flex flex-row flex-md-column flex-wrap align-items-center justify-content-center my-3 navMenu",
                                        },
                                        n.a.createElement("h6", { className: "d-block w-100 text-center mb-1" }, "Links"),
                                        n.a.createElement(
                                            b.b,
                                            { exact: !0, activeClassName: "active", to: "/" },
                                            n.a.createElement("span", { className: "px-3 py-2 px-md-0 py-md-1 d-block" }, "Home")
                                        ),
                                        n.a.createElement(
                                            b.b,
                                            { exact: !0, activeClassName: "active", to: "/beaches" },
                                            n.a.createElement("span", { className: "px-3 py-2 px-md-0 py-md-1 d-block" }, "Beaches")
                                        ),
                                        n.a.createElement(
                                            b.b,
                                            { exact: !0, activeClassName: "active", to: "/whirlpool" },
                                            n.a.createElement("span", { className: "px-3 py-2 px-md-0 py-md-1 d-block" }, "Whirlpool")
                                        ),
                                        n.a.createElement(
                                            b.b,
                                            { exact: !0, activeClassName: "active", to: "/community" },
                                            n.a.createElement("span", { className: "px-3 py-2 px-md-0 py-md-1 d-block" }, "Community")
                                        ),
                                        n.a.createElement(
                                            "a",
                                            {
                                                href: "https://opensea.io/assets/the-surf-boards",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "px-3 py-2 px-md-0 py-md-1 d-block link",
                                            },
                                            "SURF Boards",
                                            " ",
                                            n.a.createElement(E.a, { icon: k.b, className: "small", style: { marginBottom: "1px" } })
                                        ),
                                        n.a.createElement(
                                            "a",
                                            {
                                                href: "https://app.uniswap.org/#/swap?outputCurrency=".concat($),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "px-3 py-2 px-md-0 py-md-1 d-block link",
                                            },
                                            "Buy SURF",
                                            " ",
                                            n.a.createElement(E.a, { icon: k.b, className: "small", style: { marginBottom: "1px" } })
                                        )
                                    ),
                                    n.a.createElement(
                                        "div",
                                        {
                                            className:
                                                "col-12 col-md-4 d-flex flex-row flex-md-column flex-wrap align-items-center justify-content-center my-3 navMenu",
                                        },
                                        n.a.createElement("h6", { className: "d-block w-100 text-center mb-1" }, "Resources"),
                                        n.a.createElement(
                                            "a",
                                            {
                                                className: "px-3 py-2 px-md-0 py-md-1 d-block",
                                                href: "https://surf.finance/whitepaper.pdf",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                            n.a.createElement(E.a, { icon: k.d }),
                                            " Whitepaper"
                                        ),
                                        n.a.createElement(
                                            "a",
                                            {
                                                className: "px-3 py-2 px-md-0 py-md-1 d-block",
                                                href: "https://etherscan.io/address/".concat($),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                            n.a.createElement(E.a, { icon: k.c }),
                                            " SURF Contract"
                                        ),
                                        n.a.createElement(
                                            "a",
                                            {
                                                className: "px-3 py-2 px-md-0 py-md-1 d-block",
                                                href: "https://etherscan.io/address/".concat(J),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                            n.a.createElement(E.a, { icon: k.c }),
                                            " Tito Contract"
                                        ),
                                        n.a.createElement(
                                            "a",
                                            {
                                                className: "px-3 py-2 px-md-0 py-md-1 d-block",
                                                href: "https://etherscan.io/address/".concat(G),
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                            },
                                            n.a.createElement(E.a, { icon: k.c }),
                                            " Whirlpool Contract"
                                        ),
                                        n.a.createElement("h6", { className: "d-block w-100 text-center mt-3 mb-2" }, "Get In Touch"),
                                        n.a.createElement(
                                            "div",
                                            { className: "d-flex flex-wrap" },
                                            n.a.createElement(
                                                "a",
                                                {
                                                    className: "p-1 d-block",
                                                    href: "https://discord.gg/ZduXSdd",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                },
                                                n.a.createElement(E.a, { icon: ce.a, className: "larger" })
                                            ),
                                            n.a.createElement(
                                                "a",
                                                {
                                                    className: "p-1 d-block",
                                                    href: "https://t.me/surf_finance",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                },
                                                n.a.createElement(E.a, { icon: ce.c, className: "larger" })
                                            ),
                                            n.a.createElement(
                                                "a",
                                                {
                                                    className: "p-1 d-block",
                                                    href: "https://twitter.com/surf_defi",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                },
                                                n.a.createElement(E.a, { icon: ce.d, className: "larger" })
                                            ),
                                            n.a.createElement(
                                                "a",
                                                {
                                                    className: "p-1 d-block",
                                                    href: "https://surf-finance.medium.com/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                },
                                                n.a.createElement(E.a, { icon: ce.b, className: "larger" })
                                            )
                                        )
                                    ),
                                    n.a.createElement("div", { className: "col-12 text-center" }, "SURF Finance \xa9 2020")
                                )
                            )
                        )
                    ),
                me = a(6),
                ue = a(47),
                pe = a.n(ue),
                de = a(29),
                he = a.n(de),
                be = a(56),
                ye = a.n(be),
                fe = a(36),
                Ee = (e, t) => j.utils.toWei((e + (t - e) * Math.random()).toFixed(18), "ether").toString(),
                ke = (Math.random(), new Date(), Ee(2e5, 1e6), Ee(0, 1e4)),
                ve = (Ee(1e3, 1e4), Ee(0, 3e4)),
                Ne =
                    (Ee(0, 1e5),
                    Ee(0, 1e4),
                    Math.floor(Date.now() / 1e3 - 1e6 * Math.random()),
                    Math.floor(Date.now() / 1e3 - 86400 * Math.random()),
                    Ee(0, 100),
                    Ee(0, 100),
                    Ee(0, 10),
                    Ee(0, 100),
                    Ee(10, 1e3),
                    Ee(1e3, 5e3),
                    Ee(100, 1e3),
                    Ee(10, 1e3),
                    Ee(0, 100),
                    Ee(0, 100),
                    Ee(0, 100),
                    Ee(100, 1e4),
                    Ee(0, 100),
                    Ee(1e3, 1e5),
                    Ee(10, 100),
                    Ee(0.01, 0.1),
                    Ee(0.001, 0.01),
                    Ee(10, 1e3),
                    Ee(0, 100),
                    Ee(0, 0.001),
                    Ee(0, 0.001),
                    Ee(100, 1e4),
                    Ee(0, 100),
                    Ee(1, 1e3),
                    Ee(0, 0.01),
                    Ee(0, 1e-10),
                    Ee(1, 1e3),
                    Ee(0, 0.001),
                    Ee(0, 100),
                    Ee(0, 2e-7),
                    Ee(0, 1),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 0.001),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 0.1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1),
                    Ee(0, 100),
                    Ee(1, 10),
                    Ee(0, 1e-4),
                    Ee(0, 100),
                    a(57)),
                Se = a.n(Ne);
            class Te extends s.Component {
                constructor(e) {
                    super(e), ye()(he.a), (this.state = {}), e.price && (this.state.price = Object(me.a)({}, e.price));
                }
                componentDidMount() {
                    setTimeout(
                        function () {
                            (this.lastAccount = q()),
                                (this.loop = setInterval(
                                    function () {
                                        var e = q();
                                        this.lastAccount !== e && ((this.lastAccount = e), this.updateInfo());
                                    }.bind(this),
                                    100
                                )),
                                this.updateInfo(),
                                (this.watch = j.eth.subscribe("newBlockHeaders", this.updateInfo.bind(this)));
                        }.bind(this),
                        200
                    );
                }
                componentWillUnmount() {
                    this.watch && this.watch.unsubscribe(), this.loop && (clearInterval(this.loop), (this.loop = void 0));
                }
                componentDidUpdate() {
                    pe()(this.state.price, this.props.price) || this.setState({ price: Object(me.a)({}, this.props.price) });
                }
                updateInfo() {
                    var e = q() ? q() : "0x0000000000000000000000000000000000000001";
                    X.methods
                        .getAllInfoFor(e)
                        .call()
                        .then((t) => {
                            X.methods
                                .getAllPoolInfoFor(e)
                                .call()
                                .then((e) => {
                                    K.methods
                                        .getAllInfoFor(J)
                                        .call()
                                        .then((a) => this.processInfo(t, e, a));
                                });
                        });
                }
                processInfo(e, t, a) {
                    for (var s, n, l, i = 0, r = 0, c = 0, o = 0, m = 0; m < t.metadatas.length; m++)
                        0 === m &&
                            ((s = parseFloat(j.utils.fromWei(t.metadatas[m][1], "ether"))),
                            (n = parseFloat(j.utils.fromWei(t.metadatas[m][4], "ether"))),
                            (l = parseFloat(j.utils.fromWei(t.metadatas[m][10], "ether")))),
                            (c += parseFloat(j.utils.fromWei(t.metadatas[m][13], "ether"))),
                            (o += parseFloat(j.utils.fromWei(t.metadatas[m][14], "ether"))),
                            (i += parseFloat(j.utils.fromWei(t.metadatas[m][5], "ether"))),
                            (0 !== m || e.poolActive) && (r += parseFloat(j.utils.fromWei(t.metadatas[m][6], "ether")));
                    this.setState({
                        totalLiquidityValue: i,
                        totalRewardsPerBlock: r,
                        surfPoolActive: e.poolActive,
                        blocksUntilLaunch: parseInt(e.info[0]),
                        blocksUntilSurfPoolCanBeActivated: parseInt(e.info[1]),
                        blocksUntilSoftLaunchEnds: parseInt(e.info[2]),
                        totalSupply: parseFloat(j.utils.fromWei(e.info[3], "ether")),
                        surfPrice: parseFloat(j.utils.fromWei(e.info[4], "ether")),
                        surfLPPrice: n,
                        surfLPSupply: s,
                        lockedLPTokens: parseFloat(j.utils.fromWei(e.info[5], "ether")),
                        whirlpoolTokens: parseFloat(j.utils.fromWei(e.info[6], "ether")),
                        userBalance: parseFloat(j.utils.fromWei(e.info[7], "ether")),
                        userLPBalance: l,
                        userClaimableSurf: c,
                        userClaimableUni: o,
                        whirlpoolSurfBalance: parseFloat(j.utils.fromWei(a.info[0], "ether")),
                        titoSurfBalance: parseFloat(j.utils.fromWei(a.info[6], "ether")),
                        totalPendingSurf: parseFloat(j.utils.fromWei(a.info[2], "ether")),
                        totalStaked: parseFloat(j.utils.fromWei(a.info[5], "ether")),
                    });
                }
                claimAll() {
                    var e = q();
                    void 0 !== e &&
                        Y()
                            .methods.claimAll()
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                activate() {
                    var e = q();
                    void 0 !== e &&
                        Y()
                            .methods.activateSurfPool()
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                render() {
                    var e = q();
                    return n.a.createElement(
                        s.Fragment,
                        null,
                        n.a.createElement(
                            "div",
                            { className: "col-6 col-md-4 col-lg-3 mx-auto mt-5" },
                            n.a.createElement("div", { className: "square" }, n.a.createElement("img", { src: le.a, alt: "SURF Finance Logo" }))
                        ),
                        n.a.createElement(
                            "div",
                            { className: "col-12 text-center mb-5" },
                            n.a.createElement("span", { className: "d-block fancy largest mb-2" }, "Surf Finance"),
                            n.a.createElement("p", null, "DeFi's Next Big Wave"),
                            n.a.createElement(
                                b.a,
                                { to: "/beaches", className: "actionButton shadow-sm m-2" },
                                "Surf ",
                                n.a.createElement(E.a, { icon: k.e, className: "ml-1" })
                            ),
                            n.a.createElement(
                                "a",
                                {
                                    href: "https://app.uniswap.org/#/swap?outputCurrency=".concat($),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "actionButton shadow-sm m-2 inverted",
                                },
                                "Trade",
                                " ",
                                n.a.createElement(E.a, { icon: k.b, className: "small", style: { marginBottom: "2px" } })
                            )
                        ),
                        n.a.createElement(
                            "div",
                            { className: "col-12 text-center mb-3" },
                            n.a.createElement("h3", { className: "mt-4 underlined" }, n.a.createElement("span", null, "Global Stats"))
                        ),
                        void 0 !== this.state.blocksUntilSoftLaunchEnds &&
                            this.state.blocksUntilSoftLaunchEnds > 0 &&
                            n.a.createElement(
                                "div",
                                { className: "col-10 col-md-8 col-lg-6 mx-auto mb-4" },
                                n.a.createElement(
                                    "div",
                                    { className: "card shadow-sm" },
                                    n.a.createElement(
                                        "div",
                                        { className: "card-body text-center" },
                                        this.state.blocksUntilLaunch > 0
                                            ? n.a.createElement(
                                                  s.Fragment,
                                                  null,
                                                  n.a.createElement("span", { className: "big larger" }, ae(this.state.blocksUntilLaunch, 5)),
                                                  "Blocks Until Launch",
                                                  n.a.createElement(
                                                      "small",
                                                      { className: "d-block mb-2" },
                                                      "(~",
                                                      " ",
                                                      he.a
                                                          .duration(13 * this.state.blocksUntilLaunch, "seconds")
                                                          .format("d [days] h [hours] m [mins] ss [secs]", { trim: !1, largest: 2 }),
                                                      ")"
                                                  )
                                              )
                                            : n.a.createElement(
                                                  s.Fragment,
                                                  null,
                                                  n.a.createElement("span", { className: "big larger" }, ae(this.state.blocksUntilSoftLaunchEnds, 5)),
                                                  "Blocks Until Soft Launch Ends",
                                                  n.a.createElement(
                                                      "small",
                                                      { className: "d-block mb-2" },
                                                      "(~",
                                                      " ",
                                                      he.a
                                                          .duration(13 * this.state.blocksUntilSoftLaunchEnds, "seconds")
                                                          .format("d [days] h [hours] m [mins] ss [secs]", { trim: !1, largest: 2 }),
                                                      ")"
                                                  ),
                                                  !1 === this.state.surfPoolActive &&
                                                      this.state.blocksUntilSoftLaunchEnds < 500 &&
                                                      e &&
                                                      n.a.createElement(
                                                          "div",
                                                          { className: "d-block mt-4 mb-2" },
                                                          n.a.createElement(
                                                              "button",
                                                              { className: "btn btn-block btn-success", onClick: this.activate.bind(this) },
                                                              "Activate SURF Pool"
                                                          )
                                                      )
                                              )
                                    )
                                )
                            ),
                        n.a.createElement(
                            "div",
                            { className: "col-12 col-lg-11 mx-auto" },
                            n.a.createElement(
                                "div",
                                { className: "card shadow-sm" },
                                n.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    n.a.createElement(
                                        fe.Tabs,
                                        { className: "pt-2", contentClass: "pt-4 px-3 pb-2 text-center", headerClass: "text-center" },
                                        n.a.createElement(
                                            fe.Tab,
                                            { label: "SURF Info" },
                                            n.a.createElement(
                                                "div",
                                                { className: "row align-items-center text-center" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        ae(this.state.totalSupply, 5),
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Total Supply",
                                                        void 0 !== this.state.totalSupply &&
                                                            this.state.totalSupply > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(
                                                                    this.state.totalSupply -
                                                                        this.state.titoSurfBalance -
                                                                        this.state.whirlpoolSurfBalance -
                                                                        (this.state.price && this.state.price.surf
                                                                            ? (this.state.price.surf.reserves[
                                                                                  "ETH" === this.state.price.surf.symbols[0] ? 1 : 0
                                                                              ] *
                                                                                  this.state.lockedLPTokens) /
                                                                              this.state.price.surf.totalSupply
                                                                            : 0),
                                                                    5
                                                                ),
                                                                " ",
                                                                "Tokens Circulating)"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: Se.a, alt: "" }),
                                                        !0 === this.state.surfPoolActive ? ae(this.state.surfPrice, 5) : "-",
                                                        "\xa0",
                                                        n.a.createElement("span", null, "ETH")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Token Price",
                                                        !0 === this.state.surfPoolActive &&
                                                            void 0 !== this.state.surfPrice &&
                                                            this.state.price &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "($",
                                                                ae(this.state.surfPrice * this.state.price.ethusd, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4 mb-md-0" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: Se.a, alt: "" }),
                                                        !0 === this.state.surfPoolActive &&
                                                            void 0 !== this.state.surfPrice &&
                                                            void 0 !== this.state.totalSupply
                                                            ? ae(this.state.surfPrice * this.state.totalSupply, 5)
                                                            : "-",
                                                        "\xa0",
                                                        n.a.createElement("span", null, "ETH")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Market Cap",
                                                        !0 === this.state.surfPoolActive &&
                                                            this.state.price &&
                                                            void 0 !== this.state.surfPrice &&
                                                            void 0 !== this.state.totalSupply &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "($",
                                                                ae(this.state.surfPrice * this.state.totalSupply * this.state.price.ethusd, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        "$",
                                                        this.state.price && void 0 !== this.state.lockedLPTokens && this.state.lockedLPTokens > 0
                                                            ? ae(this.state.surfLPPrice * this.state.lockedLPTokens * this.state.price.ethusd, 3)
                                                            : "-",
                                                        "\xa0",
                                                        n.a.createElement("span", null, "USD")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Locked Liquidity",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.lockedLPTokens &&
                                                            this.state.lockedLPTokens > 0 &&
                                                            n.a.createElement(
                                                                s.Fragment,
                                                                null,
                                                                n.a.createElement(
                                                                    "small",
                                                                    { className: "d-block" },
                                                                    "(",
                                                                    ""
                                                                        .concat(
                                                                            ae(
                                                                                (this.state.price.surf.reserves[0] * this.state.lockedLPTokens) /
                                                                                    this.state.price.surf.totalSupply,
                                                                                5
                                                                            ),
                                                                            " "
                                                                        )
                                                                        .concat(this.state.price.surf.symbols[0], " + ")
                                                                        .concat(
                                                                            ae(
                                                                                (this.state.price.surf.reserves[1] * this.state.lockedLPTokens) /
                                                                                    this.state.price.surf.totalSupply,
                                                                                5
                                                                            ),
                                                                            " "
                                                                        )
                                                                        .concat(this.state.price.surf.symbols[1]),
                                                                    ")"
                                                                ),
                                                                n.a.createElement(
                                                                    "small",
                                                                    { className: "d-block" },
                                                                    "(",
                                                                    ae((100 * this.state.lockedLPTokens) / this.state.price.surf.totalSupply, 3),
                                                                    "% of Total LP Supply)"
                                                                )
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 mt-4" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        ae(this.state.whirlpoolTokens, 5),
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Tokens Sent To Whirlpool Staking Contract",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.whirlpoolTokens &&
                                                            this.state.whirlpoolTokens > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(this.state.price.surf.eth * this.state.whirlpoolTokens, 5),
                                                                "\xa0ETH | $",
                                                                ae(this.state.price.surf.usd * this.state.whirlpoolTokens, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            fe.Tab,
                                            { label: "Beaches Info" },
                                            n.a.createElement(
                                                "div",
                                                { className: "row align-items-center text-center" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4 mb-md-0" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: Se.a, alt: "" }),
                                                        ae(this.state.totalLiquidityValue, 5),
                                                        "\xa0",
                                                        n.a.createElement("span", null, "ETH")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Total Liquidity Value",
                                                        this.state.price &&
                                                            void 0 !== this.state.totalLiquidityValue &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "($",
                                                                ae(this.state.price.ethusd * this.state.totalLiquidityValue, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        void 0 !== this.state.totalSupply &&
                                                            this.state.totalSupply < 1e7 &&
                                                            0 === this.state.blocksUntilLaunch
                                                            ? ae(this.state.totalRewardsPerBlock, 5)
                                                            : "0",
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Total Rewards Per Block",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.totalRewardsPerBlock &&
                                                            this.state.totalRewardsPerBlock > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(this.state.price.surf.eth * this.state.totalRewardsPerBlock, 5),
                                                                "\xa0ETH | $",
                                                                ae(this.state.price.surf.usd * this.state.totalRewardsPerBlock, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                ),
                                                !0 === this.state.surfPoolActive &&
                                                    void 0 !== this.state.totalSupply &&
                                                    this.state.totalSupply < 1e7 &&
                                                    this.state.totalRewardsPerBlock > 0 &&
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "col-12 mt-4" },
                                                        n.a.createElement(
                                                            "span",
                                                            { className: "big" },
                                                            ae(Math.ceil((1e7 - this.state.totalSupply) / this.state.totalRewardsPerBlock), 5)
                                                        ),
                                                        n.a.createElement(
                                                            "p",
                                                            { className: "mb-0" },
                                                            "Estimated Blocks Until Max Supply Is Reached",
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(~",
                                                                " ",
                                                                he.a
                                                                    .duration(
                                                                        (13 * (1e7 - this.state.totalSupply)) / this.state.totalRewardsPerBlock,
                                                                        "seconds"
                                                                    )
                                                                    .format("d [days] h [hours] m [mins] ss [secs]", { trim: !1, largest: 2 }),
                                                                ")"
                                                            )
                                                        )
                                                    )
                                            )
                                        ),
                                        n.a.createElement(
                                            fe.Tab,
                                            { label: "Whirlpool Info" },
                                            n.a.createElement(
                                                "div",
                                                { className: "row align-items-center text-center" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        ae(this.state.whirlpoolSurfBalance, 5),
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Tokens In Whirlpool",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.whirlpoolSurfBalance &&
                                                            this.state.whirlpoolSurfBalance > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(this.state.price.surf.eth * this.state.whirlpoolSurfBalance, 5),
                                                                "\xa0ETH | $",
                                                                ae(this.state.price.surf.usd * this.state.whirlpoolSurfBalance, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4" },
                                                    n.a.createElement("span", { className: "big" }, ae(this.state.totalStaked, 5)),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Total SURF LP Tokens Staked",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.totalStaked &&
                                                            this.state.totalStaked > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ""
                                                                    .concat(
                                                                        ae(
                                                                            (this.state.price.surf.reserves[0] * this.state.totalStaked) /
                                                                                this.state.price.surf.totalSupply,
                                                                            5
                                                                        ),
                                                                        " "
                                                                    )
                                                                    .concat(this.state.price.surf.symbols[0], " + ")
                                                                    .concat(
                                                                        ae(
                                                                            (this.state.price.surf.reserves[1] * this.state.totalStaked) /
                                                                                this.state.price.surf.totalSupply,
                                                                            5
                                                                        ),
                                                                        " "
                                                                    )
                                                                    .concat(this.state.price.surf.symbols[1]),
                                                                ")"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        ae(this.state.totalPendingSurf, 5),
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Total Pending SURF Payout",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.totalPendingSurf &&
                                                            this.state.totalPendingSurf > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(this.state.price.surf.eth * this.state.totalPendingSurf, 5),
                                                                "\xa0ETH | $",
                                                                ae(this.state.price.surf.usd * this.state.totalPendingSurf, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    );
                }
            }
            var ge = Te,
                we = a(59),
                xe = a.n(we),
                Fe = a(70),
                Pe = a.n(Fe);
            class Ce extends s.Component {
                constructor(e) {
                    super(e),
                        ye()(he.a),
                        (this.state = {
                            id: void 0 !== e.match.params.id ? parseInt(e.match.params.id) : null,
                            stakeModalOpen: !1,
                            stakeETHModalOpen: !1,
                            unstakeModalOpen: !1,
                            modalMoreOpen: !1,
                            input: { stakeAmountText: "", stakeETHAmountText: "", unstakeAmountText: "" },
                        }),
                        e.price && (this.state.price = Object(me.a)({}, e.price));
                    var t = localStorage.getItem("symsCache");
                    null !== t && (this.state.syms = JSON.parse(t));
                }
                componentDidMount() {
                    setTimeout(
                        function () {
                            (this.lastAccount = q()),
                                (this.loop = setInterval(
                                    function () {
                                        var e = q();
                                        this.lastAccount !== e && ((this.lastAccount = e), this.updateInfo());
                                    }.bind(this),
                                    100
                                )),
                                this.updateInfo(),
                                (this.watch = j.eth.subscribe("newBlockHeaders", this.updateInfo.bind(this)));
                        }.bind(this),
                        200
                    );
                }
                componentDidUpdate(e) {
                    this.props.match.params.id !== e.match.params.id &&
                        this.setState({ id: void 0 !== this.props.match.params.id ? parseInt(this.props.match.params.id) : null }),
                        pe()(this.state.price, this.props.price) || this.setState({ price: Object(me.a)({}, this.props.price) });
                }
                componentWillUnmount() {
                    this.watch && this.watch.unsubscribe(), this.loop && (clearInterval(this.loop), (this.loop = void 0));
                }
                updateInfo() {
                    var e = q() ? q() : "0x0000000000000000000000000000000000000001";
                    X.methods
                        .getAllInfoFor(e)
                        .call()
                        .then((t) => {
                            X.methods
                                .getAllPoolInfoFor(e)
                                .call()
                                .then((a) => {
                                    j.eth.getBalance(e).then((e) => this.processInfo(t, a, e));
                                });
                        });
                }
                processInfo(e, t, a) {
                    for (var s = [], n = 0; n < t.tokens.length; n++) {
                        var l = parseInt(t.metadatas[n][7]);
                        s.push({
                            index: n,
                            token: t.tokens[n],
                            lpToken: t.lpTokens[n],
                            isUni: t.isUnis[n],
                            apr: parseInt(t.aprs[n]),
                            lastSurfRewardBlock: parseInt(t.lastSurfRewardBlocks[n]),
                            totalSupply: parseFloat(j.utils.fromWei(t.metadatas[n][0], "ether")),
                            totalLPSupply: parseFloat(j.utils.fromWei(t.metadatas[n][1], "ether")),
                            stakedLPSupply: parseFloat(j.utils.fromWei(t.metadatas[n][2], "ether")),
                            tokenPrice: parseFloat(j.utils.fromWei(t.metadatas[n][3], "ether")),
                            lpTokenPrice: parseFloat(j.utils.fromWei(t.metadatas[n][4], "ether")),
                            totalLiquidityValue: parseFloat(j.utils.fromWei(t.metadatas[n][5], "ether")),
                            surfPerBlock: parseFloat(j.utils.fromWei(t.metadatas[n][6], "ether")),
                            tokenDecimals: l,
                            userTokenBalance: parseFloat(j.utils.fromWei(t.metadatas[n][8], "ether")) * Math.pow(10, 18 - l),
                            userTokenApproved: parseFloat(j.utils.fromWei(t.metadatas[n][9], "ether")) * Math.pow(10, 18 - l),
                            exactUserLPBalance: t.metadatas[n][10],
                            userLPBalance: parseFloat(j.utils.fromWei(t.metadatas[n][10], "ether")),
                            userLPApproved: parseFloat(j.utils.fromWei(t.metadatas[n][11], "ether")),
                            exactUserStaked: t.metadatas[n][12],
                            userStaked: parseFloat(j.utils.fromWei(t.metadatas[n][12], "ether")),
                            userSurfRewards: parseFloat(j.utils.fromWei(t.metadatas[n][13], "ether")),
                            userUniRewards: parseFloat(j.utils.fromWei(t.metadatas[n][14], "ether")),
                            userSurfClaimed: parseFloat(j.utils.fromWei(t.metadatas[n][15], "ether")),
                            userUniClaimed: parseFloat(j.utils.fromWei(t.metadatas[n][16], "ether")),
                        });
                    }
                    var i = {
                        exactEthBalance: a,
                        ethBalance: parseFloat(j.utils.fromWei(a, "ether")),
                        balance: parseFloat(j.utils.fromWei(e.info[7], "ether")),
                        activeBeaches: 0,
                        stakedLiquidity: 0,
                        claimableSurf: 0,
                        claimableUni: 0,
                    };
                    s.forEach((e) => {
                        e.userStaked > 0 && i.activeBeaches++,
                            e.stakedLPSupply > 0 && (i.stakedLiquidity += (e.totalLiquidityValue * e.userStaked) / e.stakedLPSupply),
                            (i.claimableSurf += e.userSurfRewards),
                            (i.claimableUni += e.userUniRewards);
                    }),
                        this.setState(
                            {
                                beaches: s,
                                surfPoolActive: e.poolActive,
                                blocksUntilLaunch: parseInt(e.info[0]),
                                blocksUntilSurfPoolCanBeActivated: parseInt(e.info[1]),
                                blocksUntilSoftLaunchEnds: parseInt(e.info[2]),
                                totalSupply: parseFloat(j.utils.fromWei(e.info[3], "ether")),
                                user: i,
                            },
                            this.fetchPairsInfo.bind(this)
                        );
                }
                fetchPairsInfo() {
                    var e = this.state.beaches.map((e) => '"'.concat(e.lpToken.toLowerCase(), '"')),
                        t = "\n\t\t\t\t{\n\t\t\t\t\tpairs(where: { id_in: [".concat(
                            e.join(", "),
                            "] }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\ttoken0 {\n\t\t\t\t\t\t\tid,\n\t\t\t\t\t\t\tsymbol\n\t\t\t\t\t\t},\n\t\t\t\t\t\ttoken1 {\n\t\t\t\t\t\t\tid,\n\t\t\t\t\t\t\tsymbol\n\t\t\t\t\t\t},\n\t\t\t\t\t\treserve0,\n\t\t\t\t\t\treserve1,\n\t\t\t\t\t\ttotalSupply\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t"
                        );
                    fetch("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2", { method: "POST", body: JSON.stringify({ query: t }) })
                        .then((e) => e.text())
                        .then((e) => {
                            var t = JSON.parse(e);
                            if (t.data && t.data.pairs) {
                                var a = t.data.pairs,
                                    s = {},
                                    n = {};
                                a.forEach((e) => {
                                    (s[e.id] = {
                                        symbol: ""
                                            .concat("WETH" === e.token0.symbol ? "ETH" : e.token0.symbol, "/")
                                            .concat("WETH" === e.token1.symbol ? "ETH" : e.token1.symbol),
                                        tokens: [e.token0.id, e.token1.id],
                                    }),
                                        (n[e.id] = {
                                            reserves: [parseFloat(e.reserve0), parseFloat(e.reserve1)],
                                            totalSupply: parseFloat(e.totalSupply),
                                        });
                                }),
                                    localStorage.setItem("symsCache", JSON.stringify(s)),
                                    this.state.beaches.forEach((e) => {
                                        var t = e.lpToken.toLowerCase();
                                        void 0 === s[t] &&
                                            ((s[t] = {
                                                symbol: 0 === e.index ? "SURF/ETH" : "?/?",
                                                tokens: 0 === e.index ? ["surf", V] : ["unknown", "unknown"],
                                            }),
                                            (n[t] = { reserves: [0, 0], totalSupply: 0 }));
                                    }),
                                    this.setState({ syms: s, lps: n });
                            }
                        });
                }
                approve() {
                    var e = q();
                    void 0 !== e &&
                        ee(this.state.beaches[this.state.currentBeach].lpToken)
                            .methods.approve(J, te)
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                stake() {
                    var e = q(),
                        t = parseFloat(this.state.input.stakeAmountText);
                    void 0 !== e &&
                        t > 0 &&
                        Y()
                            .methods.deposit(
                                this.state.currentBeach,
                                se(t, this.state.beaches[this.state.currentBeach].userLPBalance) < 1e-4
                                    ? this.state.beaches[this.state.currentBeach].exactUserLPBalance
                                    : j.utils.toWei(t.toString(), "ether")
                            )
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                stakeETH() {
                    var e = q(),
                        t = parseFloat(this.state.input.stakeETHAmountText);
                    void 0 !== e &&
                        t > 0 &&
                        Q()
                            .methods.depositInto(this.state.currentBeach)
                            .send(
                                {
                                    from: e,
                                    value:
                                        se(t, this.state.user.ethBalance) < 1e-4
                                            ? this.state.user.exactEthBalance
                                            : j.utils.toWei(t.toString(), "ether"),
                                },
                                (e, t) => {
                                    e ? console.log(e) : console.log(t);
                                }
                            );
                }
                unstake() {
                    var e = q(),
                        t = parseFloat(this.state.input.unstakeAmountText);
                    void 0 !== e &&
                        t > 0 &&
                        Y()
                            .methods.withdraw(
                                this.state.currentBeach,
                                se(t, this.state.beaches[this.state.currentBeach].userStaked) < 1e-4
                                    ? this.state.beaches[this.state.currentBeach].exactUserStaked
                                    : j.utils.toWei(t.toString(), "ether")
                            )
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                migrate() {
                    var e = q();
                    void 0 !== e &&
                        Y()
                            .methods.migrateSURFLPtoWhirlpool()
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                claim(e) {
                    var t = q();
                    void 0 !== t &&
                        this.state.beaches[e].userSurfRewards > 0 &&
                        Y()
                            .methods.claim(e)
                            .send({ from: t }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                claimAll() {
                    var e = q();
                    void 0 !== e &&
                        Y()
                            .methods.claimAll()
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                activate() {
                    var e = q();
                    void 0 !== e &&
                        Y()
                            .methods.activateSurfPool()
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                render() {
                    var e = q();
                    return n.a.createElement(
                        s.Fragment,
                        null,
                        n.a.createElement(
                            m.a,
                            null,
                            n.a.createElement(
                                "title",
                                null,
                                "".concat(
                                    null === this.state.id
                                        ? "Beaches"
                                        : this.state.syms &&
                                          this.state.beaches &&
                                          this.state.id < this.state.beaches.length &&
                                          void 0 !== this.state.syms[this.state.beaches[this.state.id].lpToken.toLowerCase()]
                                        ? "".concat(this.state.syms[this.state.beaches[this.state.id].lpToken.toLowerCase()].symbol, " Beach")
                                        : "Beach #".concat(this.state.id),
                                    " | SURF Finance"
                                )
                            )
                        ),
                        n.a.createElement(
                            xe.a,
                            {
                                visible: this.state.stakeETHModalOpen,
                                dialogClassName: "modal-dialog-centered modal-dialog-scrollable",
                                onClickBackdrop: () => this.setState({ stakeETHModalOpen: !1 }),
                            },
                            n.a.createElement(
                                "div",
                                { className: "modal-header" },
                                n.a.createElement("h4", { className: "mb-0 pb-0" }, "Stake Using ETH"),
                                n.a.createElement(
                                    "button",
                                    { className: "close", "aria-label": "Close", onClick: () => this.setState({ stakeETHModalOpen: !1 }) },
                                    n.a.createElement("span", { "aria-hidden": "true" }, "\xd7")
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-body" },
                                n.a.createElement(
                                    "div",
                                    { className: "col-12" },
                                    n.a.createElement(
                                        "p",
                                        { className: "mb-0" },
                                        n.a.createElement("b", null, "Balance: "),
                                        this.state.user ? ae(this.state.user.ethBalance, 5) : "-",
                                        " ",
                                        "ETH"
                                    ),
                                    n.a.createElement(
                                        "small",
                                        { className: "d-block mb-1" },
                                        "10% Fee",
                                        this.state.modalMoreOpen
                                            ? n.a.createElement(
                                                  "span",
                                                  { className: "d-block" },
                                                  0 === this.state.currentBeach
                                                      ? n.a.createElement(
                                                            s.Fragment,
                                                            null,
                                                            "10% of the deposited SURF LP tokens will be permanently locked in the contract which ensures that SURF will always have liquidity on Uniswap."
                                                        )
                                                      : n.a.createElement(
                                                            s.Fragment,
                                                            null,
                                                            "10% of the deposited LP tokens will be sold for ETH, half of which will be used to buy back SURF from Uniswap and sent to The Whirlpool, and the other half is the platform fee for the developers."
                                                        ),
                                                  n.a.createElement("br", null),
                                                  "There is no fee for unstaking LP tokens."
                                              )
                                            : n.a.createElement(
                                                  "small",
                                                  { className: "text-primary pointer pl-1", onClick: () => this.setState({ modalMoreOpen: !0 }) },
                                                  n.a.createElement("b", null, "Learn More")
                                              )
                                    ),
                                    n.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        n.a.createElement("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.1",
                                            className: "form-control noValidate",
                                            placeholder: "Amount to stake",
                                            onChange: (e) =>
                                                this.setState({
                                                    input: Object(me.a)(
                                                        Object(me.a)({}, this.state.input),
                                                        {},
                                                        { stakeETHAmountText: e.target.value }
                                                    ),
                                                }),
                                            value: this.state.input.stakeETHAmountText,
                                        }),
                                        n.a.createElement(
                                            "div",
                                            { className: "input-group-append" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-warning ignoreActive",
                                                    onClick: () =>
                                                        this.setState(
                                                            this.setState({
                                                                input: Object(me.a)(
                                                                    Object(me.a)({}, this.state.input),
                                                                    {},
                                                                    { stakeETHAmountText: this.state.user.ethBalance.toString() }
                                                                ),
                                                            })
                                                        ),
                                                },
                                                "Max"
                                            )
                                        )
                                    ),
                                    parseFloat(this.state.input.stakeETHAmountText) > 0 &&
                                        n.a.createElement(
                                            "p",
                                            { className: "text-center mt-3 mb-0" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-success btn-block".concat(
                                                        e && parseFloat(this.state.input.stakeETHAmountText) <= 1.001 * this.state.user.ethBalance
                                                            ? ""
                                                            : " disabled"
                                                    ),
                                                    onClick: this.stakeETH.bind(this),
                                                },
                                                "Use",
                                                " ",
                                                ae(parseFloat(this.state.input.stakeETHAmountText), 5),
                                                " ",
                                                "ETH To Stake",
                                                " ",
                                                this.state.syms[this.state.beaches[this.state.currentBeach].lpToken.toLowerCase()].symbol,
                                                " ",
                                                "LP Tokens"
                                            )
                                        )
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-footer py-2" },
                                n.a.createElement(
                                    "button",
                                    { className: "btn btn-secondary btn-sm m-0", onClick: () => this.setState({ stakeETHModalOpen: !1 }) },
                                    "Close"
                                )
                            )
                        ),
                        n.a.createElement(
                            xe.a,
                            {
                                visible: this.state.stakeModalOpen,
                                dialogClassName: "modal-dialog-centered modal-dialog-scrollable",
                                onClickBackdrop: () => this.setState({ stakeModalOpen: !1 }),
                            },
                            n.a.createElement(
                                "div",
                                { className: "modal-header" },
                                n.a.createElement("h4", { className: "mb-0 pb-0" }, "Stake LP Tokens"),
                                n.a.createElement(
                                    "button",
                                    { className: "close", "aria-label": "Close", onClick: () => this.setState({ stakeModalOpen: !1 }) },
                                    n.a.createElement("span", { "aria-hidden": "true" }, "\xd7")
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-body" },
                                n.a.createElement(
                                    "div",
                                    { className: "col-12" },
                                    n.a.createElement(
                                        "p",
                                        { className: "mb-0" },
                                        n.a.createElement("b", null, "Balance: "),
                                        this.state.beaches && void 0 !== this.state.currentBeach
                                            ? ae(this.state.beaches[this.state.currentBeach].userLPBalance, 5)
                                            : "-",
                                        " ",
                                        "LP Tokens",
                                        this.state.beaches &&
                                            void 0 !== this.state.currentBeach &&
                                            0 === this.state.beaches[this.state.currentBeach].userLPApproved
                                            ? n.a.createElement("small", { className: "pl-1" }, "(not approved)")
                                            : ""
                                    ),
                                    n.a.createElement(
                                        "small",
                                        { className: "d-block mb-1" },
                                        "10% Fee",
                                        this.state.modalMoreOpen
                                            ? n.a.createElement(
                                                  "span",
                                                  { className: "d-block" },
                                                  0 === this.state.currentBeach
                                                      ? n.a.createElement(
                                                            s.Fragment,
                                                            null,
                                                            "10% of the deposited SURF LP tokens will be permanently locked in the contract which ensures that SURF will always have liquidity on Uniswap."
                                                        )
                                                      : n.a.createElement(
                                                            s.Fragment,
                                                            null,
                                                            "10% of the deposited LP tokens will be sold for ETH, half of which will be used to buy back SURF from Uniswap and sent to The Whirlpool, and the other half is the platform fee for the developers."
                                                        ),
                                                  n.a.createElement("br", null),
                                                  "There is no fee for unstaking LP tokens."
                                              )
                                            : n.a.createElement(
                                                  "small",
                                                  { className: "text-primary pointer pl-1", onClick: () => this.setState({ modalMoreOpen: !0 }) },
                                                  n.a.createElement("b", null, "Learn More")
                                              )
                                    ),
                                    n.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        n.a.createElement("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.1",
                                            className: "form-control noValidate",
                                            placeholder: "Amount to stake",
                                            onChange: (e) =>
                                                this.setState({
                                                    input: Object(me.a)(Object(me.a)({}, this.state.input), {}, { stakeAmountText: e.target.value }),
                                                }),
                                            value: this.state.input.stakeAmountText,
                                        }),
                                        n.a.createElement(
                                            "div",
                                            { className: "input-group-append" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-warning ignoreActive",
                                                    onClick: () =>
                                                        this.setState(
                                                            this.setState({
                                                                input: Object(me.a)(
                                                                    Object(me.a)({}, this.state.input),
                                                                    {},
                                                                    {
                                                                        stakeAmountText: this.state.beaches[
                                                                            this.state.currentBeach
                                                                        ].userLPBalance.toString(),
                                                                    }
                                                                ),
                                                            })
                                                        ),
                                                },
                                                "Max"
                                            )
                                        )
                                    ),
                                    parseFloat(this.state.input.stakeAmountText) > 0 &&
                                        n.a.createElement(
                                            "p",
                                            { className: "text-center mt-3 mb-0" },
                                            0 === this.state.beaches[this.state.currentBeach].userLPApproved &&
                                                n.a.createElement(
                                                    "button",
                                                    { className: "btn btn-success btn-block mb-2", onClick: this.approve.bind(this) },
                                                    "Approve Tokens"
                                                ),
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-success btn-block".concat(
                                                        e &&
                                                            this.state.beaches[this.state.currentBeach].userLPApproved > 0 &&
                                                            parseFloat(this.state.input.stakeAmountText) <=
                                                                1.001 * this.state.beaches[this.state.currentBeach].userLPBalance
                                                            ? ""
                                                            : " disabled"
                                                    ),
                                                    onClick: this.stake.bind(this),
                                                },
                                                "Stake",
                                                " ",
                                                ae(parseFloat(this.state.input.stakeAmountText), 5),
                                                " ",
                                                this.state.syms[this.state.beaches[this.state.currentBeach].lpToken.toLowerCase()].symbol,
                                                " ",
                                                "LP Tokens"
                                            )
                                        )
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-footer py-2" },
                                n.a.createElement(
                                    "button",
                                    { className: "btn btn-secondary btn-sm m-0", onClick: () => this.setState({ stakeModalOpen: !1 }) },
                                    "Close"
                                )
                            )
                        ),
                        n.a.createElement(
                            xe.a,
                            {
                                visible: this.state.unstakeModalOpen,
                                dialogClassName: "modal-dialog-centered modal-dialog-scrollable",
                                onClickBackdrop: () => this.setState({ unstakeModalOpen: !1 }),
                            },
                            n.a.createElement(
                                "div",
                                { className: "modal-header" },
                                n.a.createElement("h4", { className: "mb-0 pb-0" }, "Unstake LP Tokens"),
                                n.a.createElement(
                                    "button",
                                    { className: "close", "aria-label": "Close", onClick: () => this.setState({ unstakeModalOpen: !1 }) },
                                    n.a.createElement("span", { "aria-hidden": "true" }, "\xd7")
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-body" },
                                n.a.createElement(
                                    "div",
                                    { className: "col-12" },
                                    n.a.createElement(
                                        "p",
                                        { className: "mb-1" },
                                        n.a.createElement("b", null, "Staked: "),
                                        this.state.beaches && void 0 !== this.state.currentBeach
                                            ? ae(this.state.beaches[this.state.currentBeach].userStaked, 5)
                                            : "-",
                                        " ",
                                        "LP Tokens"
                                    ),
                                    n.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        n.a.createElement("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.1",
                                            className: "form-control noValidate",
                                            placeholder: "Amount to unstake",
                                            onChange: (e) =>
                                                this.setState({
                                                    input: Object(me.a)(
                                                        Object(me.a)({}, this.state.input),
                                                        {},
                                                        { unstakeAmountText: e.target.value }
                                                    ),
                                                }),
                                            value: this.state.input.unstakeAmountText,
                                        }),
                                        n.a.createElement(
                                            "div",
                                            { className: "input-group-append" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-warning ignoreActive",
                                                    onClick: () =>
                                                        this.setState(
                                                            this.setState({
                                                                input: Object(me.a)(
                                                                    Object(me.a)({}, this.state.input),
                                                                    {},
                                                                    {
                                                                        unstakeAmountText: this.state.beaches[
                                                                            this.state.currentBeach
                                                                        ].userStaked.toString(),
                                                                    }
                                                                ),
                                                            })
                                                        ),
                                                },
                                                "Max"
                                            )
                                        )
                                    ),
                                    parseFloat(this.state.input.unstakeAmountText) > 0 &&
                                        n.a.createElement(
                                            "p",
                                            { className: "text-center mt-3 mb-0" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-danger btn-block".concat(
                                                        e &&
                                                            parseFloat(this.state.input.unstakeAmountText) <=
                                                                1.001 * this.state.beaches[this.state.currentBeach].userStaked
                                                            ? ""
                                                            : " disabled"
                                                    ),
                                                    onClick: this.unstake.bind(this),
                                                },
                                                "Unstake",
                                                " ",
                                                ae(parseFloat(this.state.input.unstakeAmountText), 5),
                                                " ",
                                                this.state.syms[this.state.beaches[this.state.currentBeach].lpToken.toLowerCase()].symbol,
                                                " ",
                                                "LP Tokens"
                                            )
                                        )
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-footer py-2" },
                                n.a.createElement(
                                    "button",
                                    { className: "btn btn-secondary btn-sm m-0", onClick: () => this.setState({ unstakeModalOpen: !1 }) },
                                    "Close"
                                )
                            )
                        ),
                        n.a.createElement(
                            "div",
                            { className: "col-12 text-center mt-4 mb-5" },
                            n.a.createElement(
                                "h1",
                                { className: "underlined" },
                                n.a.createElement(
                                    "span",
                                    null,
                                    null === this.state.id
                                        ? "Beaches"
                                        : this.state.syms &&
                                          this.state.beaches &&
                                          this.state.id < this.state.beaches.length &&
                                          this.state.syms[this.state.beaches[this.state.id].lpToken.toLowerCase()]
                                        ? "".concat(this.state.syms[this.state.beaches[this.state.id].lpToken.toLowerCase()].symbol, " Beach")
                                        : "Beach #".concat(this.state.id)
                                )
                            ),
                            void 0 !== this.state.beaches &&
                                void 0 !== this.state.syms &&
                                n.a.createElement(
                                    "div",
                                    { className: "d-flex flex-wrap align-items-center justify-content-center mx-auto mt-4", id: "quickNavTokenWrap" },
                                    this.state.beaches
                                        .filter((e) => void 0 !== this.state.syms[e.lpToken.toLowerCase()])
                                        .map((e) =>
                                            n.a.createElement(
                                                b.a,
                                                {
                                                    to: e.index === this.state.id ? "/beaches" : "/beach/".concat(e.index),
                                                    className: "p-1 lh0".concat(e.index === this.state.id ? " active" : ""),
                                                    key: e.index,
                                                },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "quickNavToken" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "square" },
                                                        n.a.createElement("img", {
                                                            src: "/xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/img/".concat(
                                                                this.state.syms[e.lpToken.toLowerCase()].tokens[
                                                                    this.state.syms[e.lpToken.toLowerCase()].tokens[0] === V ? 1 : 0
                                                                ],
                                                                ".png"
                                                            ),
                                                            alt: "",
                                                        })
                                                    )
                                                )
                                            )
                                        )
                                )
                        ),
                        void 0 !== this.state.blocksUntilSoftLaunchEnds &&
                            this.state.blocksUntilSoftLaunchEnds > 0 &&
                            n.a.createElement(
                                "div",
                                { className: "col-10 col-md-8 col-lg-6 mx-auto mb-4" },
                                n.a.createElement(
                                    "div",
                                    { className: "card shadow-sm" },
                                    n.a.createElement(
                                        "div",
                                        { className: "card-body text-center" },
                                        this.state.blocksUntilLaunch > 0
                                            ? n.a.createElement(
                                                  s.Fragment,
                                                  null,
                                                  n.a.createElement("span", { className: "big larger" }, ae(this.state.blocksUntilLaunch, 5)),
                                                  "Blocks Until Launch",
                                                  n.a.createElement(
                                                      "small",
                                                      { className: "d-block mb-2" },
                                                      "(~",
                                                      " ",
                                                      he.a
                                                          .duration(13 * this.state.blocksUntilLaunch, "seconds")
                                                          .format("d [days] h [hours] m [mins] ss [secs]", { trim: !1, largest: 2 }),
                                                      ")"
                                                  )
                                              )
                                            : n.a.createElement(
                                                  s.Fragment,
                                                  null,
                                                  n.a.createElement("span", { className: "big larger" }, ae(this.state.blocksUntilSoftLaunchEnds, 5)),
                                                  "Blocks Until Soft Launch Ends",
                                                  n.a.createElement(
                                                      "small",
                                                      { className: "d-block mb-2" },
                                                      "(~",
                                                      " ",
                                                      he.a
                                                          .duration(13 * this.state.blocksUntilSoftLaunchEnds, "seconds")
                                                          .format("d [days] h [hours] m [mins] ss [secs]", { trim: !1, largest: 2 }),
                                                      ")"
                                                  ),
                                                  !1 === this.state.surfPoolActive &&
                                                      this.state.blocksUntilSoftLaunchEnds < 500 &&
                                                      e &&
                                                      n.a.createElement(
                                                          "div",
                                                          { className: "d-block mt-4 mb-2" },
                                                          n.a.createElement(
                                                              "button",
                                                              { className: "btn btn-block btn-success", onClick: this.activate.bind(this) },
                                                              "Activate SURF Pool"
                                                          )
                                                      )
                                              ),
                                        !1 === this.state.surfPoolActive &&
                                            n.a.createElement(
                                                "small",
                                                { className: "d-block mt-4" },
                                                "Claiming and unstaking are disabled until the SURF pool opens."
                                            )
                                    )
                                )
                            ),
                        1e7 === this.state.totalSupply &&
                            n.a.createElement(
                                "div",
                                { className: "col-10 col-md-8 col-lg-6 mx-auto mb-5" },
                                n.a.createElement(
                                    "div",
                                    { className: "card shadow-sm" },
                                    n.a.createElement(
                                        "div",
                                        { className: "card-body text-center" },
                                        n.a.createElement("span", { className: "big large" }, "Beaches Closed"),
                                        "Maximum SURF Supply Reached"
                                    )
                                )
                            ),
                        !1,
                        void 0 !== this.state.beaches && void 0 !== this.state.syms
                            ? n.a.createElement(
                                  s.Fragment,
                                  null,
                                  this.state.beaches
                                      .filter(
                                          (e) =>
                                              void 0 !== this.state.syms[e.lpToken.toLowerCase()] &&
                                              (null === this.state.id || e.index === this.state.id)
                                      )
                                      .map((t) => {
                                          var a = this.state.syms[t.lpToken.toLowerCase()],
                                              l = this.state.lps ? this.state.lps[t.lpToken.toLowerCase()] : void 0;
                                          return n.a.createElement(
                                              "div",
                                              { className: "col-12 col-lg-11 mx-auto mb-3", key: t.index },
                                              n.a.createElement(
                                                  "div",
                                                  { className: "card shadow-sm" },
                                                  n.a.createElement(
                                                      "div",
                                                      { className: "card-body" },
                                                      n.a.createElement(
                                                          "div",
                                                          { className: "d-flex flex-wrap align-items-center justify-content-center mb-3" },
                                                          n.a.createElement(
                                                              "span",
                                                              { className: "d-block text-center big" },
                                                              a.symbol,
                                                              0 === t.index &&
                                                                  !this.state.surfPoolActive &&
                                                                  n.a.createElement(
                                                                      "span",
                                                                      { className: "d-block w-100" },
                                                                      n.a.createElement("small", null, "Opening Soon")
                                                                  )
                                                          ),
                                                          n.a.createElement(
                                                              "div",
                                                              { className: "d-block text-center ml-2 mx-md-2", style: { position: "relative" } },
                                                              n.a.createElement(
                                                                  "div",
                                                                  { className: "token0" },
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "square" },
                                                                      n.a.createElement("img", { src: "/xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/img/".concat(a.tokens[0], ".png"), alt: "" })
                                                                  )
                                                              ),
                                                              n.a.createElement(
                                                                  "div",
                                                                  { className: "token1" },
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "square" },
                                                                      n.a.createElement("img", { src: "/xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/img/".concat(a.tokens[1], ".png"), alt: "" })
                                                                  )
                                                              ),
                                                              t.isUni &&
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "uniToken" },
                                                                      n.a.createElement(
                                                                          "div",
                                                                          { className: "square" },
                                                                          n.a.createElement("img", { src: Pe.a, alt: "" })
                                                                      )
                                                                  )
                                                          ),
                                                          n.a.createElement("div", { className: "d-block d-md-none w-100" }),
                                                          n.a.createElement(
                                                              "div",
                                                              { className: "d-block mt-2 mt-md-0 ml-md-auto text-center" },
                                                              (0 !== t.index || !0 === this.state.surfPoolActive) &&
                                                                  n.a.createElement(
                                                                      s.Fragment,
                                                                      null,
                                                                      n.a.createElement(
                                                                          "a",
                                                                          {
                                                                              href: "https://app.uniswap.org/#/swap?outputCurrency=".concat(t.token),
                                                                              target: "_blank",
                                                                              rel: "noopener noreferrer",
                                                                              className: "btn btn-sm btn-warning m-1",
                                                                          },
                                                                          "Trade",
                                                                          " ",
                                                                          a.symbol.split("/")[a.tokens[0] === V ? 1 : 0]
                                                                      ),
                                                                      n.a.createElement(
                                                                          "a",
                                                                          {
                                                                              href: "https://app.uniswap.org/#/add/"
                                                                                  .concat(a.tokens[0] === V ? "ETH" : a.tokens[0], "/")
                                                                                  .concat(a.tokens[1] === V ? "ETH" : a.tokens[1]),
                                                                              target: "_blank",
                                                                              rel: "noopener noreferrer",
                                                                              className: "btn btn-sm btn-success m-1",
                                                                          },
                                                                          "Add Liquidity"
                                                                      ),
                                                                      n.a.createElement(
                                                                          "a",
                                                                          {
                                                                              href: "https://app.uniswap.org/#/remove/"
                                                                                  .concat(a.tokens[0] === V ? "ETH" : a.tokens[0], "/")
                                                                                  .concat(a.tokens[1] === V ? "ETH" : a.tokens[1]),
                                                                              target: "_blank",
                                                                              rel: "noopener noreferrer",
                                                                              className: "btn btn-sm btn-danger m-1",
                                                                          },
                                                                          "Remove Liquidity"
                                                                      ),
                                                                      !1
                                                                  )
                                                          )
                                                      ),
                                                      n.a.createElement(
                                                          fe.Tabs,
                                                          {
                                                              className: "pt-2",
                                                              contentClass: "pt-4 px-3 pb-2 text-center",
                                                              headerClass: "text-center",
                                                          },
                                                          n.a.createElement(
                                                              fe.Tab,
                                                              { label: "Beach Info" },
                                                              n.a.createElement(
                                                                  "div",
                                                                  { className: "row align-items-center text-center" },
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "col-12 col-md-6 mb-4" },
                                                                      n.a.createElement("span", { className: "big" }, ae(t.apr, 5), "%"),
                                                                      "APY"
                                                                  ),
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "col-12 col-md-6 mb-4" },
                                                                      n.a.createElement(
                                                                          "span",
                                                                          { className: "big" },
                                                                          n.a.createElement("img", { src: le.a, alt: "" }),
                                                                          1e7 === this.state.totalSupply ? "0" : ae(t.surfPerBlock, 5),
                                                                          "\xa0",
                                                                          n.a.createElement("span", null, "SURF")
                                                                      ),
                                                                      "Per Block",
                                                                      this.state.price &&
                                                                          this.state.price.surf &&
                                                                          t.surfPerBlock > 0 &&
                                                                          n.a.createElement(
                                                                              "small",
                                                                              { className: "d-block" },
                                                                              "(",
                                                                              ae(this.state.price.surf.eth * t.surfPerBlock, 5),
                                                                              "\xa0ETH | $",
                                                                              ae(this.state.price.surf.usd * t.surfPerBlock, 3),
                                                                              "\xa0USD)"
                                                                          )
                                                                  ),
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "col-12 col-md-6 mb-4 mb-md-0" },
                                                                      n.a.createElement("span", { className: "big" }, ae(t.stakedLPSupply, 5)),
                                                                      "Total LP Tokens Staked",
                                                                      t.stakedLPSupply > 0 &&
                                                                          l &&
                                                                          n.a.createElement(
                                                                              "small",
                                                                              { className: "d-block" },
                                                                              "(",
                                                                              ""
                                                                                  .concat(
                                                                                      ae((l.reserves[0] * t.stakedLPSupply) / l.totalSupply, 5),
                                                                                      " "
                                                                                  )
                                                                                  .concat(a.symbol.split("/")[0], " + ")
                                                                                  .concat(
                                                                                      ae((l.reserves[1] * t.stakedLPSupply) / l.totalSupply, 5),
                                                                                      " "
                                                                                  )
                                                                                  .concat(a.symbol.split("/")[1]),
                                                                              ")"
                                                                          ),
                                                                      t.stakedLPSupply > 0 &&
                                                                          n.a.createElement(
                                                                              "small",
                                                                              { className: "d-block" },
                                                                              "(",
                                                                              ae((100 * t.stakedLPSupply) / t.totalLPSupply, 3),
                                                                              "% of LP Supply)"
                                                                          )
                                                                  ),
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "col-12 col-md-6" },
                                                                      n.a.createElement(
                                                                          "span",
                                                                          { className: "big" },
                                                                          n.a.createElement("img", { src: Se.a, alt: "" }),
                                                                          ae(t.totalLiquidityValue, 5),
                                                                          "\xa0",
                                                                          n.a.createElement("span", null, "ETH")
                                                                      ),
                                                                      "Staked Liquidity Value",
                                                                      this.state.price &&
                                                                          t.totalLiquidityValue > 0 &&
                                                                          n.a.createElement(
                                                                              "small",
                                                                              { className: "d-block" },
                                                                              "($",
                                                                              ae(this.state.price.ethusd * t.totalLiquidityValue, 3),
                                                                              "\xa0USD)"
                                                                          )
                                                                  )
                                                              )
                                                          ),
                                                          n.a.createElement(
                                                              fe.Tab,
                                                              {
                                                                  label: e
                                                                      ? "My Info"
                                                                      : n.a.createElement(
                                                                            s.Fragment,
                                                                            null,
                                                                            n.a.createElement(
                                                                                "small",
                                                                                null,
                                                                                "My Info",
                                                                                n.a.createElement(
                                                                                    "span",
                                                                                    { className: "web3Required d-block" },
                                                                                    "(no account)"
                                                                                )
                                                                            )
                                                                        ),
                                                                  disabled: !e,
                                                              },
                                                              n.a.createElement(
                                                                  "div",
                                                                  { className: "row align-items-center text-center" },
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "col-12 col-md-6 mb-4" },
                                                                      n.a.createElement("span", { className: "big" }, ae(t.userLPBalance, 5)),
                                                                      "My LP Token Balance",
                                                                      t.userLPBalance > 0 &&
                                                                          l &&
                                                                          n.a.createElement(
                                                                              "small",
                                                                              { className: "d-block" },
                                                                              "(",
                                                                              ""
                                                                                  .concat(
                                                                                      ae((l.reserves[0] * t.userLPBalance) / l.totalSupply, 5),
                                                                                      " "
                                                                                  )
                                                                                  .concat(a.symbol.split("/")[0], " + ")
                                                                                  .concat(
                                                                                      ae((l.reserves[1] * t.userLPBalance) / l.totalSupply, 5),
                                                                                      " "
                                                                                  )
                                                                                  .concat(a.symbol.split("/")[1]),
                                                                              ")"
                                                                          )
                                                                  ),
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "col-12 col-md-6 mb-4 pb-3" },
                                                                      n.a.createElement(
                                                                          "p",
                                                                          null,
                                                                          n.a.createElement("span", { className: "big" }, ae(t.userStaked, 5)),
                                                                          "My LP Tokens Staked",
                                                                          t.userStaked > 0 &&
                                                                              l &&
                                                                              n.a.createElement(
                                                                                  "small",
                                                                                  { className: "d-block" },
                                                                                  "(",
                                                                                  ""
                                                                                      .concat(
                                                                                          ae((l.reserves[0] * t.userStaked) / l.totalSupply, 5),
                                                                                          " "
                                                                                      )
                                                                                      .concat(a.symbol.split("/")[0], " + ")
                                                                                      .concat(
                                                                                          ae((l.reserves[1] * t.userStaked) / l.totalSupply, 5),
                                                                                          " "
                                                                                      )
                                                                                      .concat(a.symbol.split("/")[1]),
                                                                                  ")"
                                                                              ),
                                                                          t.userStaked > 0 &&
                                                                              n.a.createElement(
                                                                                  "small",
                                                                                  { className: "d-block" },
                                                                                  "(",
                                                                                  ae((100 * t.userStaked) / t.stakedLPSupply, 3),
                                                                                  "% of Total LP Staked)"
                                                                              )
                                                                      ),
                                                                      n.a.createElement(
                                                                          "div",
                                                                          { className: "row" },
                                                                          n.a.createElement(
                                                                              "div",
                                                                              { className: "col-12 mb-2" },
                                                                              n.a.createElement(
                                                                                  "button",
                                                                                  {
                                                                                      className: "btn btn-secondary btn-block".concat(
                                                                                          this.state.totalSupply < 1e7 &&
                                                                                              this.state.user &&
                                                                                              this.state.user.ethBalance > 0 &&
                                                                                              (0 !== t.index || !0 === this.state.surfPoolActive)
                                                                                              ? ""
                                                                                              : " disabled"
                                                                                      ),
                                                                                      onClick: () =>
                                                                                          this.setState({
                                                                                              stakeETHModalOpen: !0,
                                                                                              modalMoreOpen: !1,
                                                                                              currentBeach: t.index,
                                                                                              input: Object(me.a)(
                                                                                                  Object(me.a)({}, this.state.input),
                                                                                                  {},
                                                                                                  { stakeETHAmountText: "" }
                                                                                              ),
                                                                                          }),
                                                                                  },
                                                                                  "Stake Using ETH"
                                                                              )
                                                                          ),
                                                                          n.a.createElement(
                                                                              "div",
                                                                              { className: "col-6 pr-2" },
                                                                              n.a.createElement(
                                                                                  "button",
                                                                                  {
                                                                                      className: "btn btn-block btn-success".concat(
                                                                                          this.state.totalSupply < 1e7 && t.userLPBalance > 0
                                                                                              ? ""
                                                                                              : " disabled"
                                                                                      ),
                                                                                      onClick: () =>
                                                                                          this.setState({
                                                                                              stakeModalOpen: !0,
                                                                                              modalMoreOpen: !1,
                                                                                              currentBeach: t.index,
                                                                                              input: Object(me.a)(
                                                                                                  Object(me.a)({}, this.state.input),
                                                                                                  {},
                                                                                                  { stakeAmountText: "" }
                                                                                              ),
                                                                                          }),
                                                                                  },
                                                                                  "Stake"
                                                                              )
                                                                          ),
                                                                          n.a.createElement(
                                                                              "div",
                                                                              { className: "col-6 pl-2" },
                                                                              n.a.createElement(
                                                                                  "button",
                                                                                  {
                                                                                      className: "btn btn-block btn-danger".concat(
                                                                                          !0 === this.state.surfPoolActive && t.userStaked > 0
                                                                                              ? ""
                                                                                              : " disabled"
                                                                                      ),
                                                                                      onClick: () =>
                                                                                          this.setState({
                                                                                              unstakeModalOpen: !0,
                                                                                              currentBeach: t.index,
                                                                                              input: Object(me.a)(
                                                                                                  Object(me.a)({}, this.state.input),
                                                                                                  {},
                                                                                                  { unstakeAmountText: "" }
                                                                                              ),
                                                                                          }),
                                                                                  },
                                                                                  "Unstake"
                                                                              )
                                                                          ),
                                                                          0 === t.index &&
                                                                              1e7 === this.state.totalSupply &&
                                                                              t.userStaked > 0 &&
                                                                              n.a.createElement(
                                                                                  "div",
                                                                                  { className: "col-12 mt-2" },
                                                                                  n.a.createElement(
                                                                                      "button",
                                                                                      {
                                                                                          className: "btn btn-warning btn-block".concat(
                                                                                              e ? "" : " disabled"
                                                                                          ),
                                                                                          onClick: this.migrate.bind(this),
                                                                                      },
                                                                                      "Migrate All SURF LP Tokens To The Whirlpool"
                                                                                  )
                                                                              )
                                                                      )
                                                                  ),
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "col-12 col-md-6 mb-4 mb-md-0" },
                                                                      n.a.createElement(
                                                                          "span",
                                                                          { className: "big" },
                                                                          n.a.createElement(
                                                                              "div",
                                                                              { className: "d-inline-block" },
                                                                              n.a.createElement("img", { src: le.a, alt: "" }),
                                                                              ae(t.userSurfClaimed, 5),
                                                                              "\xa0",
                                                                              n.a.createElement("span", null, "SURF")
                                                                          ),
                                                                          t.isUni &&
                                                                              n.a.createElement(
                                                                                  s.Fragment,
                                                                                  null,
                                                                                  n.a.createElement("span", { className: "px-2" }, "+"),
                                                                                  n.a.createElement(
                                                                                      "div",
                                                                                      { className: "d-inline-block" },
                                                                                      n.a.createElement("img", { src: Pe.a, alt: "" }),
                                                                                      ae(t.userUniClaimed, 5),
                                                                                      "\xa0",
                                                                                      n.a.createElement("span", null, "UNI")
                                                                                  )
                                                                              )
                                                                      ),
                                                                      "My Total Claimed Rewards"
                                                                  ),
                                                                  n.a.createElement(
                                                                      "div",
                                                                      { className: "col-12 col-md-6" },
                                                                      n.a.createElement(
                                                                          "div",
                                                                          { className: "d-block mb-3" },
                                                                          n.a.createElement(
                                                                              "span",
                                                                              { className: "big" },
                                                                              n.a.createElement(
                                                                                  "div",
                                                                                  { className: "d-inline-block" },
                                                                                  n.a.createElement("img", { src: le.a, alt: "" }),
                                                                                  ae(t.userSurfRewards, 5),
                                                                                  "\xa0",
                                                                                  n.a.createElement("span", null, "SURF")
                                                                              ),
                                                                              t.isUni &&
                                                                                  n.a.createElement(
                                                                                      s.Fragment,
                                                                                      null,
                                                                                      n.a.createElement("span", { className: "px-2" }, "+"),
                                                                                      n.a.createElement(
                                                                                          "div",
                                                                                          { className: "d-inline-block" },
                                                                                          n.a.createElement("img", { src: Pe.a, alt: "" }),
                                                                                          ae(t.userUniRewards, 5),
                                                                                          "\xa0",
                                                                                          n.a.createElement("span", null, "UNI")
                                                                                      )
                                                                                  )
                                                                          ),
                                                                          "My Claimable Rewards",
                                                                          this.state.price &&
                                                                              this.state.price.surf &&
                                                                              t.userSurfRewards > 0 &&
                                                                              n.a.createElement(
                                                                                  "small",
                                                                                  { className: "d-block" },
                                                                                  "(",
                                                                                  ae(
                                                                                      this.state.price.surf.eth * t.userSurfRewards +
                                                                                          (t.isUni ? this.state.price.uni.eth * t.userUniRewards : 0),
                                                                                      5
                                                                                  ),
                                                                                  "\xa0ETH | $",
                                                                                  ae(
                                                                                      this.state.price.surf.usd * t.userSurfRewards +
                                                                                          (t.isUni ? this.state.price.uni.usd * t.userUniRewards : 0),
                                                                                      3
                                                                                  ),
                                                                                  "\xa0USD)"
                                                                              ),
                                                                          0 === this.state.blocksUntilLaunch &&
                                                                              this.state.totalSupply < 1e7 &&
                                                                              t.userStaked > 0 &&
                                                                              n.a.createElement(
                                                                                  "small",
                                                                                  { className: "d-block" },
                                                                                  "(+",
                                                                                  ae((t.surfPerBlock * t.userStaked) / t.stakedLPSupply, 5),
                                                                                  " ",
                                                                                  "SURF / Block)"
                                                                              )
                                                                      ),
                                                                      n.a.createElement(
                                                                          "p",
                                                                          { className: "mb-0" },
                                                                          n.a.createElement(
                                                                              "button",
                                                                              {
                                                                                  className: "btn btn-block btn-primary onCard".concat(
                                                                                      !0 === this.state.surfPoolActive && t.userSurfRewards > 0
                                                                                          ? ""
                                                                                          : " disabled"
                                                                                  ),
                                                                                  onClick: () => this.claim(t.index),
                                                                              },
                                                                              "Claim"
                                                                          )
                                                                      )
                                                                  )
                                                              )
                                                          )
                                                      )
                                                  )
                                              )
                                          );
                                      }),
                                  null !== this.state.id &&
                                      this.state.id >= this.state.beaches.length &&
                                      n.a.createElement("div", { className: "col-12 text-center" }, "Beach not found.")
                              )
                            : n.a.createElement(
                                  "div",
                                  { className: "col-12 text-center" },
                                  "Fetching ",
                                  null === this.state.id ? "all beaches" : "beach",
                                  "..."
                              )
                    );
                }
            }
            var Ue = Ce;
            class Le extends s.Component {
                constructor(e) {
                    super(e), ye()(he.a), (this.state = { id: e.match.params.id }), e.price && (this.state.price = Object(me.a)({}, e.price));
                }
                componentDidMount() {
                    setTimeout(
                        function () {
                            (this.lastAccount = q()),
                                (this.loop = setInterval(
                                    function () {
                                        var e = q();
                                        this.lastAccount !== e && ((this.lastAccount = e), this.forceUpdate());
                                    }.bind(this),
                                    100
                                )),
                                this.updateInfo(),
                                (this.watch = j.eth.subscribe("newBlockHeaders", this.updateInfo.bind(this)));
                        }.bind(this),
                        200
                    );
                }
                componentWillUnmount() {
                    this.watch && this.watch.unsubscribe(), this.loop && (clearInterval(this.loop), (this.loop = void 0));
                }
                componentDidUpdate(e) {
                    this.props.match.params.id !== e.match.params.id &&
                        this.setState({ id: this.props.match.params.id, user: void 0 }, this.updateInfo.bind(this)),
                        pe()(this.state.price, this.props.price) || this.setState({ price: Object(me.a)({}, this.props.price) });
                }
                updateInfo() {
                    X.methods
                        .getAllInfoFor(this.state.id)
                        .call()
                        .then((e) => {
                            X.methods
                                .getAllPoolInfoFor(this.state.id)
                                .call()
                                .then((t) => {
                                    K.methods
                                        .getAllInfoFor(this.state.id)
                                        .call()
                                        .then((a) => this.processInfo(e, t, a));
                                });
                        });
                }
                processInfo(e, t, a) {
                    for (var s = [], n = 0; n < t.tokens.length; n++) {
                        var l = parseInt(t.metadatas[n][7]);
                        s.push({
                            index: n,
                            token: t.tokens[n],
                            lpToken: t.lpTokens[n],
                            isUni: t.isUnis[n],
                            apr: parseInt(t.aprs[n]),
                            lastSurfRewardBlock: parseInt(t.lastSurfRewardBlocks[n]),
                            totalSupply: parseFloat(j.utils.fromWei(t.metadatas[n][0], "ether")),
                            totalLPSupply: parseFloat(j.utils.fromWei(t.metadatas[n][1], "ether")),
                            stakedLPSupply: parseFloat(j.utils.fromWei(t.metadatas[n][2], "ether")),
                            tokenPrice: parseFloat(j.utils.fromWei(t.metadatas[n][3], "ether")),
                            lpTokenPrice: parseFloat(j.utils.fromWei(t.metadatas[n][4], "ether")),
                            totalLiquidityValue: parseFloat(j.utils.fromWei(t.metadatas[n][5], "ether")),
                            surfPerBlock: parseFloat(j.utils.fromWei(t.metadatas[n][6], "ether")),
                            tokenDecimals: l,
                            userTokenBalance: parseFloat(j.utils.fromWei(t.metadatas[n][8], "ether")) * Math.pow(10, 18 - l),
                            userTokenApproved: parseFloat(j.utils.fromWei(t.metadatas[n][9], "ether")) * Math.pow(10, 18 - l),
                            userLPBalance: parseFloat(j.utils.fromWei(t.metadatas[n][10], "ether")),
                            userLPApproved: parseFloat(j.utils.fromWei(t.metadatas[n][11], "ether")),
                            userStaked: parseFloat(j.utils.fromWei(t.metadatas[n][12], "ether")),
                            userSurfRewards: parseFloat(j.utils.fromWei(t.metadatas[n][13], "ether")),
                            userUniRewards: parseFloat(j.utils.fromWei(t.metadatas[n][14], "ether")),
                            userSurfClaimed: parseFloat(j.utils.fromWei(t.metadatas[n][15], "ether")),
                            userUniClaimed: parseFloat(j.utils.fromWei(t.metadatas[n][16], "ether")),
                        });
                    }
                    var i = {
                            balance: parseFloat(j.utils.fromWei(a.info[6], "ether")),
                            lpBalance: parseFloat(j.utils.fromWei(a.info[7], "ether")),
                            lpStaked: parseFloat(j.utils.fromWei(a.info[9], "ether")),
                            whirlpoolClaimable: parseFloat(j.utils.fromWei(a.info[10], "ether")),
                            claimedWhirlpool: parseFloat(j.utils.fromWei(a.info[11], "ether")),
                            activeBeaches: 0,
                            stakedLiquidity: 0,
                            surfClaimed: 0,
                            claimableSurf: 0,
                            uniClaimed: 0,
                            claimableUni: 0,
                            surfPerBlock: 0,
                        },
                        r = parseFloat(j.utils.fromWei(e.info[3], "ether")),
                        c = parseInt(e.info[0]);
                    s.forEach((e) => {
                        e.userStaked > 0 &&
                            (i.activeBeaches++, 0 === c && r < 1e7 && (i.surfPerBlock += (e.surfPerBlock * e.userStaked) / e.stakedLPSupply)),
                            e.stakedLPSupply > 0 && (i.stakedLiquidity += (e.totalLiquidityValue * e.userStaked) / e.stakedLPSupply),
                            (i.surfClaimed += e.userSurfClaimed),
                            (i.claimableSurf += e.userSurfRewards),
                            (i.uniClaimed += e.userUniClaimed),
                            (i.claimableUni += e.userUniRewards);
                    }),
                        this.setState({ surfPoolActive: e.poolActive, user: i });
                }
                claimAll() {
                    var e = q();
                    void 0 !== e &&
                        Y()
                            .methods.claimAll()
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                claimWhirlpool() {
                    var e = q();
                    void 0 !== e &&
                        Z()
                            .methods.claim()
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                render() {
                    var e = q();
                    return n.a.createElement(
                        s.Fragment,
                        null,
                        n.a.createElement(
                            m.a,
                            null,
                            n.a.createElement(
                                "title",
                                null,
                                "".concat(void 0 !== e && e.toLowerCase() === this.state.id.toLowerCase() ? "My " : "", "Account | SURF Finance")
                            )
                        ),
                        n.a.createElement(
                            "div",
                            { className: "col-12 text-center my-4" },
                            n.a.createElement(
                                "h1",
                                { className: "underlined" },
                                n.a.createElement(
                                    "span",
                                    null,
                                    void 0 !== e && e.toLowerCase() === this.state.id.toLowerCase() ? "My " : "",
                                    "Account"
                                )
                            )
                        ),
                        n.a.createElement(
                            "div",
                            { className: "col-12 text-center mb-5" },
                            n.a.createElement(
                                "div",
                                { className: "d-block mb-2" },
                                n.a.createElement(
                                    "div",
                                    { id: "bigAccount", className: "mx-auto" },
                                    n.a.createElement(
                                        "div",
                                        { className: "square" },
                                        n.a.createElement(f.a, { seed: this.state.id.toLowerCase(), scale: 24, className: "absPos circle" })
                                    )
                                )
                            ),
                            n.a.createElement(
                                "p",
                                null,
                                n.a.createElement(
                                    "a",
                                    {
                                        className: "link",
                                        href: "https://etherscan.io/address/".concat(this.state.id),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                    },
                                    this.state.id.slice(0, 7),
                                    "...",
                                    this.state.id.slice(-5),
                                    " ",
                                    n.a.createElement(E.a, { icon: k.b, className: "small", style: { marginBottom: "1px" } })
                                )
                            ),
                            void 0 !== e &&
                                e.toLowerCase() === this.state.id.toLowerCase() &&
                                n.a.createElement(
                                    "p",
                                    { className: "text-center" },
                                    n.a.createElement(
                                        "button",
                                        { className: "btn btn-inline-block mx-auto btn-danger", onClick: H },
                                        "Disconnect Wallet"
                                    )
                                )
                        ),
                        n.a.createElement(
                            "div",
                            { className: "col-12 col-lg-11 mx-auto" },
                            n.a.createElement(
                                "div",
                                { className: "card shadow-sm" },
                                n.a.createElement(
                                    "div",
                                    { className: "card-body py-4" },
                                    n.a.createElement(
                                        "div",
                                        { className: "col-12 pt-2 text-center" },
                                        n.a.createElement("h2", { className: "underlined mb-4" }, n.a.createElement("span", null, "SURF")),
                                        n.a.createElement(
                                            "div",
                                            { className: "row align-items-center text-center mb-4" },
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 col-md-6 mb-4 mb-md-0" },
                                                n.a.createElement(
                                                    "span",
                                                    { className: "big" },
                                                    n.a.createElement("img", { src: le.a, alt: "" }),
                                                    this.state.user ? ae(this.state.user.balance, 5) : "-",
                                                    "\xa0",
                                                    n.a.createElement("span", null, "SURF")
                                                ),
                                                n.a.createElement(
                                                    "p",
                                                    { className: "mb-0" },
                                                    "Balance",
                                                    this.state.price &&
                                                        this.state.price.surf &&
                                                        void 0 !== this.state.user &&
                                                        this.state.user.balance > 0 &&
                                                        n.a.createElement(
                                                            "small",
                                                            { className: "d-block" },
                                                            "(",
                                                            ae(this.state.price.surf.eth * this.state.user.balance, 5),
                                                            "\xa0ETH | $",
                                                            ae(this.state.price.surf.usd * this.state.user.balance, 3),
                                                            "\xa0USD)"
                                                        )
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 col-md-6" },
                                                n.a.createElement(
                                                    "span",
                                                    { className: "big" },
                                                    this.state.user ? ae(this.state.user.lpBalance, 5) : "-"
                                                ),
                                                n.a.createElement(
                                                    "p",
                                                    { className: "mb-0" },
                                                    "SURF LP Token Balance",
                                                    this.state.price &&
                                                        this.state.price.surf &&
                                                        void 0 !== this.state.user &&
                                                        this.state.user.lpBalance > 0 &&
                                                        n.a.createElement(
                                                            "small",
                                                            { className: "d-block" },
                                                            "(",
                                                            ""
                                                                .concat(
                                                                    ae(
                                                                        (this.state.price.surf.reserves[0] * this.state.user.lpBalance) /
                                                                            this.state.price.surf.totalSupply,
                                                                        5
                                                                    ),
                                                                    " "
                                                                )
                                                                .concat(this.state.price.surf.symbols[0], " + ")
                                                                .concat(
                                                                    ae(
                                                                        (this.state.price.surf.reserves[1] * this.state.user.lpBalance) /
                                                                            this.state.price.surf.totalSupply,
                                                                        5
                                                                    ),
                                                                    " "
                                                                )
                                                                .concat(this.state.price.surf.symbols[1]),
                                                            ")"
                                                        )
                                                )
                                            )
                                        ),
                                        n.a.createElement("hr", null),
                                        n.a.createElement("h2", { className: "underlined my-4" }, n.a.createElement("span", null, "Beaches")),
                                        n.a.createElement(
                                            "div",
                                            { className: "row align-items-center text-center mb-4" },
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 col-md-6 mb-4" },
                                                n.a.createElement(
                                                    "span",
                                                    { className: "big" },
                                                    this.state.user ? ae(this.state.user.activeBeaches, 5) : "-"
                                                ),
                                                n.a.createElement(
                                                    "p",
                                                    { className: "mb-0" },
                                                    "Beach",
                                                    this.state.user && 1 === this.state.user.activeBeaches ? "" : "es",
                                                    " ",
                                                    "With Active Stake"
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 col-md-6 mb-4" },
                                                n.a.createElement(
                                                    "span",
                                                    { className: "big" },
                                                    n.a.createElement("img", { src: Se.a, alt: "" }),
                                                    this.state.user ? ae(this.state.user.stakedLiquidity, 5) : "-",
                                                    "\xa0",
                                                    n.a.createElement("span", null, "ETH")
                                                ),
                                                n.a.createElement(
                                                    "p",
                                                    { className: "mb-0" },
                                                    "Staked Liquidity Value",
                                                    this.state.price &&
                                                        void 0 !== this.state.user &&
                                                        this.state.user.stakedLiquidity > 0 &&
                                                        n.a.createElement(
                                                            "small",
                                                            { className: "d-block" },
                                                            "($",
                                                            ae(this.state.price.ethusd * this.state.user.stakedLiquidity, 3),
                                                            "\xa0USD)"
                                                        )
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 col-md-6 mb-4 mb-md-0" },
                                                n.a.createElement(
                                                    "span",
                                                    { className: "big" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "d-inline-block" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        this.state.user ? ae(this.state.user.surfClaimed, 5) : "-",
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement("span", { className: "px-2" }, "+"),
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "d-inline-block" },
                                                        n.a.createElement("img", { src: Pe.a, alt: "" }),
                                                        this.state.user ? ae(this.state.user.uniClaimed, 5) : "-",
                                                        "\xa0",
                                                        n.a.createElement("span", null, "UNI")
                                                    )
                                                ),
                                                "Total Claimed Rewards"
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 col-md-6" },
                                                n.a.createElement(
                                                    "span",
                                                    { className: "big" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "d-inline-block" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        this.state.user ? ae(this.state.user.claimableSurf, 5) : "-",
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement("span", { className: "px-2" }, "+"),
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "d-inline-block" },
                                                        n.a.createElement("img", { src: Pe.a, alt: "" }),
                                                        this.state.user ? ae(this.state.user.claimableUni, 5) : "-",
                                                        "\xa0",
                                                        n.a.createElement("span", null, "UNI")
                                                    )
                                                ),
                                                "Total Claimable Rewards",
                                                this.state.price &&
                                                    this.state.price.surf &&
                                                    this.state.user &&
                                                    (this.state.user.claimableSurf > 0 || this.state.user.claimableUni > 0) &&
                                                    n.a.createElement(
                                                        "small",
                                                        { className: "d-block" },
                                                        "(",
                                                        ae(
                                                            this.state.price.surf.eth * this.state.user.claimableSurf +
                                                                this.state.price.uni.eth * this.state.user.claimableUni,
                                                            5
                                                        ),
                                                        "\xa0ETH | $",
                                                        ae(
                                                            this.state.price.surf.usd * this.state.user.claimableSurf +
                                                                this.state.price.uni.usd * this.state.user.claimableUni,
                                                            3
                                                        ),
                                                        "\xa0USD)"
                                                    ),
                                                this.state.user &&
                                                    this.state.user.surfPerBlock > 0 &&
                                                    n.a.createElement(
                                                        "small",
                                                        { className: "d-block" },
                                                        "(+",
                                                        ae(this.state.user.surfPerBlock, 5),
                                                        " SURF / Block)"
                                                    ),
                                                void 0 !== e &&
                                                    e.toLowerCase() === this.state.id.toLowerCase() &&
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mt-3 mb-0" },
                                                        n.a.createElement(
                                                            "button",
                                                            {
                                                                className: "btn btn-block btn-primary onCard".concat(
                                                                    !0 === this.state.surfPoolActive &&
                                                                        this.state.user &&
                                                                        (this.state.user.claimableSurf > 0 || this.state.user.claimableUni > 0)
                                                                        ? ""
                                                                        : " disabled"
                                                                ),
                                                                onClick: this.claimAll.bind(this),
                                                            },
                                                            "Claim All"
                                                        )
                                                    )
                                            )
                                        ),
                                        n.a.createElement("hr", null),
                                        n.a.createElement("h2", { className: "underlined my-4" }, n.a.createElement("span", null, "Whirlpool")),
                                        n.a.createElement(
                                            "div",
                                            { className: "row align-items-center text-center" },
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 col-md-6 mb-4 mb-md-0" },
                                                n.a.createElement(
                                                    "span",
                                                    { className: "big" },
                                                    this.state.user ? ae(this.state.user.lpStaked, 5) : "-"
                                                ),
                                                n.a.createElement(
                                                    "p",
                                                    { className: "mb-0" },
                                                    "SURF LP Tokens Staked",
                                                    this.state.price &&
                                                        this.state.price.surf &&
                                                        void 0 !== this.state.user &&
                                                        this.state.user.lpStaked > 0 &&
                                                        n.a.createElement(
                                                            "small",
                                                            { className: "d-block" },
                                                            "(",
                                                            ""
                                                                .concat(
                                                                    ae(
                                                                        (this.state.price.surf.reserves[0] * this.state.user.lpStaked) /
                                                                            this.state.price.surf.totalSupply,
                                                                        5
                                                                    ),
                                                                    " "
                                                                )
                                                                .concat(this.state.price.surf.symbols[0], " + ")
                                                                .concat(
                                                                    ae(
                                                                        (this.state.price.surf.reserves[1] * this.state.user.lpStaked) /
                                                                            this.state.price.surf.totalSupply,
                                                                        5
                                                                    ),
                                                                    " "
                                                                )
                                                                .concat(this.state.price.surf.symbols[1]),
                                                            ")"
                                                        )
                                                )
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 col-md-6" },
                                                n.a.createElement(
                                                    "span",
                                                    { className: "big" },
                                                    n.a.createElement("img", { src: le.a, alt: "" }),
                                                    this.state.user ? ae(this.state.user.claimedWhirlpool, 5) : "-",
                                                    "\xa0",
                                                    n.a.createElement("span", null, "SURF")
                                                ),
                                                n.a.createElement("p", { className: "mb-0" }, "Total Claimed Rewards")
                                            ),
                                            n.a.createElement(
                                                "div",
                                                { className: "col-12 mt-4" },
                                                n.a.createElement(
                                                    "span",
                                                    { className: "big" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "d-inline-block" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        this.state.user ? ae(this.state.user.whirlpoolClaimable, 5) : "-",
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    )
                                                ),
                                                "Claimable Rewards",
                                                this.state.price &&
                                                    this.state.price.surf &&
                                                    void 0 !== this.state.user &&
                                                    this.state.user.whirlpoolClaimable > 0 &&
                                                    n.a.createElement(
                                                        "small",
                                                        { className: "d-block" },
                                                        "(",
                                                        ae(this.state.price.surf.eth * this.state.user.whirlpoolClaimable, 5),
                                                        "\xa0ETH | $",
                                                        ae(this.state.price.surf.usd * this.state.user.whirlpoolClaimable, 3),
                                                        "\xa0USD)"
                                                    ),
                                                void 0 !== e &&
                                                    e.toLowerCase() === this.state.id.toLowerCase() &&
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "row" },
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "col-12 col-md-6 mx-auto" },
                                                            n.a.createElement(
                                                                "p",
                                                                { className: "mt-3 mb-0" },
                                                                n.a.createElement(
                                                                    "button",
                                                                    {
                                                                        className: "btn btn-block btn-primary onCard".concat(
                                                                            void 0 !== this.state.user && this.state.user.whirlpoolClaimable > 0
                                                                                ? ""
                                                                                : " disabled"
                                                                        ),
                                                                        onClick: this.claimWhirlpool.bind(this),
                                                                    },
                                                                    "Claim"
                                                                )
                                                            )
                                                        )
                                                    )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    );
                }
            }
            var Me = Le;
            class Be extends s.Component {
                constructor(e) {
                    super(e),
                        ye()(he.a),
                        (this.state = {
                            stakeETHModalOpen: !1,
                            stakeModalOpen: !1,
                            unstakeModalOpen: !1,
                            modalMoreOpen: !1,
                            input: { stakeETHAmountText: "", stakeAmountText: "", unstakeAmountText: "" },
                        }),
                        e.price && (this.state.price = Object(me.a)({}, e.price));
                }
                componentDidMount() {
                    setTimeout(
                        function () {
                            (this.lastAccount = q()),
                                (this.loop = setInterval(
                                    function () {
                                        var e = q();
                                        this.lastAccount !== e && ((this.lastAccount = e), this.updateInfo());
                                    }.bind(this),
                                    100
                                )),
                                this.updateInfo(),
                                (this.watch = j.eth.subscribe("newBlockHeaders", this.updateInfo.bind(this)));
                        }.bind(this),
                        200
                    );
                }
                componentDidUpdate() {
                    pe()(this.state.price, this.props.price) || this.setState({ price: Object(me.a)({}, this.props.price) });
                }
                componentWillUnmount() {
                    this.watch && this.watch.unsubscribe(), this.loop && (clearInterval(this.loop), (this.loop = void 0));
                }
                updateInfo() {
                    var e = q() ? q() : "0x0000000000000000000000000000000000000001";
                    K.methods
                        .getAllInfoFor(e)
                        .call()
                        .then((t) => {
                            K.methods
                                .initialSurfRewardPerDay()
                                .call()
                                .then((a) => {
                                    j.eth.getBalance(e).then((e) => this.processInfo(t, a, e));
                                });
                        });
                }
                processInfo(e, t, a) {
                    this.setState({
                        active: e.isActive,
                        surfBalance: parseFloat(j.utils.fromWei(e.info[0], "ether")),
                        initialSurfReward: parseFloat(j.utils.fromWei(e.info[1], "ether")),
                        initialSurfRewardPerDay: parseFloat(j.utils.fromWei(t, "ether")),
                        totalPendingSurf: parseFloat(j.utils.fromWei(e.info[2], "ether")),
                        startTime: parseInt(e.info[3]),
                        lastPayout: parseInt(e.info[4]),
                        totalStaked: parseFloat(j.utils.fromWei(e.info[5], "ether")),
                        userSurfBalance: parseFloat(j.utils.fromWei(e.info[6], "ether")),
                        exactUserLPBalance: e.info[7],
                        userLPBalance: parseFloat(j.utils.fromWei(e.info[7], "ether")),
                        userLPApproved: parseFloat(j.utils.fromWei(e.info[8], "ether")),
                        exactUserStaked: e.info[9],
                        userStaked: parseFloat(j.utils.fromWei(e.info[9], "ether")),
                        userSurfRewards: parseFloat(j.utils.fromWei(e.info[10], "ether")),
                        userSurfClaimed: parseFloat(j.utils.fromWei(e.info[11], "ether")),
                        exactUserETHBalance: a,
                        userETHBalance: parseFloat(j.utils.fromWei(a, "ether")),
                    });
                }
                approve() {
                    var e = q();
                    void 0 !== e &&
                        ee("0x32d588fd4d0993378995306563A04aF5Fa162deC")
                            .methods.approve(G, te)
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                stakeETH() {
                    var e = q(),
                        t = parseFloat(this.state.input.stakeETHAmountText);
                    void 0 !== e &&
                        t > 0 &&
                        Q()
                            .methods.stake()
                            .send(
                                {
                                    from: e,
                                    value:
                                        se(t, this.state.userETHBalance) < 1e-4
                                            ? this.state.exactUserETHBalance
                                            : j.utils.toWei(t.toString(), "ether"),
                                },
                                (e, t) => {
                                    e ? console.log(e) : console.log(t);
                                }
                            );
                }
                stake() {
                    var e = q(),
                        t = parseFloat(this.state.input.stakeAmountText);
                    void 0 !== e &&
                        t > 0 &&
                        Z()
                            .methods.stake(
                                se(t, this.state.userLPBalance) < 1e-4 ? this.state.exactUserLPBalance : j.utils.toWei(t.toString(), "ether")
                            )
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                unstake() {
                    var e = q(),
                        t = parseFloat(this.state.input.unstakeAmountText);
                    void 0 !== e &&
                        t > 0 &&
                        Z()
                            .methods.withdraw(se(t, this.state.userStaked) < 1e-4 ? this.state.exactUserStaked : j.utils.toWei(t.toString(), "ether"))
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                claim() {
                    var e = q();
                    void 0 !== e &&
                        Z()
                            .methods.claim()
                            .send({ from: e }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                render() {
                    var e = q();
                    return n.a.createElement(
                        s.Fragment,
                        null,
                        n.a.createElement(m.a, null, n.a.createElement("title", null, "Stake | SURF Finance")),
                        n.a.createElement(
                            xe.a,
                            {
                                visible: this.state.stakeETHModalOpen,
                                dialogClassName: "modal-dialog-centered modal-dialog-scrollable",
                                onClickBackdrop: () => this.setState({ stakeETHModalOpen: !1 }),
                            },
                            n.a.createElement(
                                "div",
                                { className: "modal-header" },
                                n.a.createElement("h4", { className: "mb-0 pb-0" }, "Stake Using ETH"),
                                n.a.createElement(
                                    "button",
                                    { className: "close", "aria-label": "Close", onClick: () => this.setState({ stakeETHModalOpen: !1 }) },
                                    n.a.createElement("span", { "aria-hidden": "true" }, "\xd7")
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-body" },
                                n.a.createElement(
                                    "div",
                                    { className: "col-12" },
                                    n.a.createElement(
                                        "p",
                                        { className: "mb-0" },
                                        n.a.createElement("b", null, "Balance: "),
                                        ae(this.state.userETHBalance, 5),
                                        " ETH"
                                    ),
                                    n.a.createElement(
                                        "small",
                                        { className: "d-block mb-1" },
                                        "10% Unstake Fee",
                                        this.state.modalMoreOpen
                                            ? n.a.createElement(
                                                  "span",
                                                  { className: "d-block" },
                                                  "There is no fee for staking LP tokens but when you wish to withdraw your SURF LP tokens, a 10% fee will be applied."
                                              )
                                            : n.a.createElement(
                                                  "small",
                                                  { className: "text-primary pointer pl-1", onClick: () => this.setState({ modalMoreOpen: !0 }) },
                                                  n.a.createElement("b", null, "Learn More")
                                              )
                                    ),
                                    n.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        n.a.createElement("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.1",
                                            className: "form-control noValidate",
                                            placeholder: "Amount to stake",
                                            onChange: (e) =>
                                                this.setState({
                                                    input: Object(me.a)(
                                                        Object(me.a)({}, this.state.input),
                                                        {},
                                                        { stakeETHAmountText: e.target.value }
                                                    ),
                                                }),
                                            value: this.state.input.stakeETHAmountText,
                                        }),
                                        n.a.createElement(
                                            "div",
                                            { className: "input-group-append" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-warning ignoreActive",
                                                    onClick: () =>
                                                        this.setState(
                                                            this.setState({
                                                                input: Object(me.a)(
                                                                    Object(me.a)({}, this.state.input),
                                                                    {},
                                                                    { stakeETHAmountText: this.state.userETHBalance.toString() }
                                                                ),
                                                            })
                                                        ),
                                                },
                                                "Max"
                                            )
                                        )
                                    ),
                                    parseFloat(this.state.input.stakeETHAmountText) > 0 &&
                                        n.a.createElement(
                                            "p",
                                            { className: "text-center mt-3 mb-0" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-success btn-block".concat(
                                                        e && parseFloat(this.state.input.stakeETHAmountText) <= 1.001 * this.state.userETHBalance
                                                            ? ""
                                                            : " disabled"
                                                    ),
                                                    onClick: this.stakeETH.bind(this),
                                                },
                                                "Use",
                                                " ",
                                                ae(parseFloat(this.state.input.stakeETHAmountText), 5),
                                                " ",
                                                "ETH To Stake SURF LP Tokens"
                                            )
                                        )
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-footer py-2" },
                                n.a.createElement(
                                    "button",
                                    { className: "btn btn-secondary btn-sm m-0", onClick: () => this.setState({ stakeETHModalOpen: !1 }) },
                                    "Close"
                                )
                            )
                        ),
                        n.a.createElement(
                            xe.a,
                            {
                                visible: this.state.stakeModalOpen,
                                dialogClassName: "modal-dialog-centered modal-dialog-scrollable",
                                onClickBackdrop: () => this.setState({ stakeModalOpen: !1 }),
                            },
                            n.a.createElement(
                                "div",
                                { className: "modal-header" },
                                n.a.createElement("h4", { className: "mb-0 pb-0" }, "Stake SURF LP Tokens"),
                                n.a.createElement(
                                    "button",
                                    { className: "close", "aria-label": "Close", onClick: () => this.setState({ stakeModalOpen: !1 }) },
                                    n.a.createElement("span", { "aria-hidden": "true" }, "\xd7")
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-body" },
                                n.a.createElement(
                                    "div",
                                    { className: "col-12" },
                                    n.a.createElement(
                                        "p",
                                        { className: "mb-0" },
                                        n.a.createElement("b", null, "Balance: "),
                                        ae(this.state.userLPBalance, 5),
                                        " SURF LP Tokens",
                                        0 === this.state.userLPApproved ? n.a.createElement("small", { className: "pl-1" }, "(not approved)") : ""
                                    ),
                                    n.a.createElement(
                                        "small",
                                        { className: "d-block mb-1" },
                                        "10% Unstake Fee",
                                        this.state.modalMoreOpen
                                            ? n.a.createElement(
                                                  "span",
                                                  { className: "d-block" },
                                                  "There is no fee for staking LP tokens but when you wish to withdraw your SURF LP tokens, a 10% fee will be applied."
                                              )
                                            : n.a.createElement(
                                                  "small",
                                                  { className: "text-primary pointer pl-1", onClick: () => this.setState({ modalMoreOpen: !0 }) },
                                                  n.a.createElement("b", null, "Learn More")
                                              )
                                    ),
                                    n.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        n.a.createElement("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.1",
                                            className: "form-control noValidate",
                                            placeholder: "Amount to stake",
                                            onChange: (e) =>
                                                this.setState({
                                                    input: Object(me.a)(Object(me.a)({}, this.state.input), {}, { stakeAmountText: e.target.value }),
                                                }),
                                            value: this.state.input.stakeAmountText,
                                        }),
                                        n.a.createElement(
                                            "div",
                                            { className: "input-group-append" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-warning ignoreActive",
                                                    onClick: () =>
                                                        this.setState(
                                                            this.setState({
                                                                input: Object(me.a)(
                                                                    Object(me.a)({}, this.state.input),
                                                                    {},
                                                                    { stakeAmountText: this.state.userLPBalance.toString() }
                                                                ),
                                                            })
                                                        ),
                                                },
                                                "Max"
                                            )
                                        )
                                    ),
                                    parseFloat(this.state.input.stakeAmountText) > 0 &&
                                        n.a.createElement(
                                            "p",
                                            { className: "text-center mt-3 mb-0" },
                                            0 === this.state.userLPApproved &&
                                                n.a.createElement(
                                                    "button",
                                                    { className: "btn btn-success btn-block mb-2", onClick: this.approve.bind(this) },
                                                    "Approve Tokens"
                                                ),
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-success btn-block".concat(
                                                        e &&
                                                            this.state.userLPApproved > 0 &&
                                                            parseFloat(this.state.input.stakeAmountText) <= 1.001 * this.state.userLPBalance
                                                            ? ""
                                                            : " disabled"
                                                    ),
                                                    onClick: this.stake.bind(this),
                                                },
                                                "Stake",
                                                " ",
                                                ae(parseFloat(this.state.input.stakeAmountText), 5),
                                                " ",
                                                "SURF LP Tokens"
                                            )
                                        )
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-footer py-2" },
                                n.a.createElement(
                                    "button",
                                    { className: "btn btn-secondary btn-sm m-0", onClick: () => this.setState({ stakeModalOpen: !1 }) },
                                    "Close"
                                )
                            )
                        ),
                        n.a.createElement(
                            xe.a,
                            {
                                visible: this.state.unstakeModalOpen,
                                dialogClassName: "modal-dialog-centered modal-dialog-scrollable",
                                onClickBackdrop: () => this.setState({ unstakeModalOpen: !1 }),
                            },
                            n.a.createElement(
                                "div",
                                { className: "modal-header" },
                                n.a.createElement("h4", { className: "mb-0 pb-0" }, "Unstake SURF LP Tokens"),
                                n.a.createElement(
                                    "button",
                                    { className: "close", "aria-label": "Close", onClick: () => this.setState({ unstakeModalOpen: !1 }) },
                                    n.a.createElement("span", { "aria-hidden": "true" }, "\xd7")
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-body" },
                                n.a.createElement(
                                    "div",
                                    { className: "col-12" },
                                    n.a.createElement(
                                        "p",
                                        { className: "mb-0" },
                                        n.a.createElement("b", null, "Staked: "),
                                        ae(this.state.userStaked, 5),
                                        " SURF LP Tokens"
                                    ),
                                    n.a.createElement(
                                        "small",
                                        { className: "d-block mb-1" },
                                        "10% Fee",
                                        this.state.modalMoreOpen
                                            ? n.a.createElement(
                                                  "span",
                                                  { className: "d-block" },
                                                  "5% of the SURF LP unstaked will be locked forever which ensures that SURF will always have liquidity on Uniswap. The other 5% will be converted to SURF and distributed proportionally to all staked SURF LP tokens."
                                              )
                                            : n.a.createElement(
                                                  "small",
                                                  { className: "text-primary pointer pl-1", onClick: () => this.setState({ modalMoreOpen: !0 }) },
                                                  n.a.createElement("b", null, "Learn More")
                                              )
                                    ),
                                    n.a.createElement(
                                        "div",
                                        { className: "input-group" },
                                        n.a.createElement("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.1",
                                            className: "form-control noValidate",
                                            placeholder: "Amount to unstake",
                                            onChange: (e) =>
                                                this.setState({
                                                    input: Object(me.a)(
                                                        Object(me.a)({}, this.state.input),
                                                        {},
                                                        { unstakeAmountText: e.target.value }
                                                    ),
                                                }),
                                            value: this.state.input.unstakeAmountText,
                                        }),
                                        n.a.createElement(
                                            "div",
                                            { className: "input-group-append" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-warning ignoreActive",
                                                    onClick: () =>
                                                        this.setState(
                                                            this.setState({
                                                                input: Object(me.a)(
                                                                    Object(me.a)({}, this.state.input),
                                                                    {},
                                                                    { unstakeAmountText: this.state.userStaked.toString() }
                                                                ),
                                                            })
                                                        ),
                                                },
                                                "Max"
                                            )
                                        )
                                    ),
                                    parseFloat(this.state.input.unstakeAmountText) > 0 &&
                                        n.a.createElement(
                                            "p",
                                            { className: "text-center mt-3 mb-0" },
                                            n.a.createElement(
                                                "button",
                                                {
                                                    className: "btn btn-danger btn-block".concat(
                                                        e && parseFloat(this.state.input.unstakeAmountText) <= 1.001 * this.state.userStaked
                                                            ? ""
                                                            : " disabled"
                                                    ),
                                                    onClick: this.unstake.bind(this),
                                                },
                                                "Unstake",
                                                " ",
                                                ae(parseFloat(this.state.input.unstakeAmountText), 5),
                                                " ",
                                                "SURF LP Tokens"
                                            )
                                        )
                                )
                            ),
                            n.a.createElement(
                                "div",
                                { className: "modal-footer py-2" },
                                n.a.createElement(
                                    "button",
                                    { className: "btn btn-secondary btn-sm m-0", onClick: () => this.setState({ unstakeModalOpen: !1 }) },
                                    "Close"
                                )
                            )
                        ),
                        n.a.createElement(
                            "div",
                            { className: "col-12 text-center mt-4 mb-5" },
                            n.a.createElement("h1", { className: "underlined" }, n.a.createElement("span", null, "Whirlpool Staking"))
                        ),
                        !1 === this.state.active &&
                            n.a.createElement(
                                "div",
                                { className: "col-10 col-md-8 col-lg-6 mx-auto mb-4" },
                                n.a.createElement(
                                    "div",
                                    { className: "card shadow-sm" },
                                    n.a.createElement(
                                        "div",
                                        { className: "card-body text-center" },
                                        n.a.createElement("span", { className: "big large" }, "Not Active"),
                                        "Activates Once Maximum SURF Supply Is Reached"
                                    )
                                )
                            ),
                        !0 === this.state.active &&
                            this.state.initialSurfReward > 0 &&
                            n.a.createElement(
                                "div",
                                { className: "col-10 col-md-8 col-lg-6 mx-auto mb-4" },
                                n.a.createElement(
                                    "div",
                                    { className: "card shadow-sm" },
                                    n.a.createElement(
                                        "div",
                                        { className: "card-body text-center" },
                                        "Next Whirlpool Payout Of",
                                        n.a.createElement(
                                            "small",
                                            null,
                                            n.a.createElement(
                                                "span",
                                                { className: "big mt-1" },
                                                n.a.createElement("img", { src: le.a, alt: "" }),
                                                ae(
                                                    Math.max(1, Math.floor((Date.now() / 1e3 - this.state.lastPayout) / 86400)) *
                                                        this.state.initialSurfRewardPerDay,
                                                    5
                                                ),
                                                "\xa0",
                                                n.a.createElement("span", null, "SURF")
                                            )
                                        ),
                                        "In",
                                        n.a.createElement(
                                            "span",
                                            { className: "big large" },
                                            Math.floor(this.state.lastPayout + 86400 - Date.now() / 1e3) > 0
                                                ? he.a
                                                      .duration(Math.floor(this.state.lastPayout + 86400 - Date.now() / 1e3), "seconds")
                                                      .format("d [days] h [hours] m [mins] ss [secs]", { trim: !1, largest: 2 })
                                                : "Now!"
                                        )
                                    )
                                )
                            ),
                        n.a.createElement(
                            "div",
                            { className: "col-12 col-lg-11 mx-auto" },
                            n.a.createElement(
                                "div",
                                { className: "card shadow-sm" },
                                n.a.createElement(
                                    "div",
                                    { className: "card-body" },
                                    n.a.createElement(
                                        fe.Tabs,
                                        { className: "pt-2", contentClass: "pt-4 px-3 pb-2 text-center", headerClass: "text-center" },
                                        n.a.createElement(
                                            fe.Tab,
                                            { label: "Whirlpool Info" },
                                            n.a.createElement(
                                                "div",
                                                { className: "row align-items-center text-center" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        ae(this.state.surfBalance, 5),
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Tokens In Whirlpool",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.surfBalance &&
                                                            this.state.surfBalance > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(this.state.price.surf.eth * this.state.surfBalance, 5),
                                                                "\xa0ETH | $",
                                                                ae(this.state.price.surf.usd * this.state.surfBalance, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4" },
                                                    n.a.createElement("span", { className: "big" }, ae(this.state.totalStaked, 5)),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Total SURF LP Tokens Staked",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.totalStaked &&
                                                            this.state.totalStaked > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ""
                                                                    .concat(
                                                                        ae(
                                                                            (this.state.price.surf.reserves[0] * this.state.totalStaked) /
                                                                                this.state.price.surf.totalSupply,
                                                                            5
                                                                        ),
                                                                        " "
                                                                    )
                                                                    .concat(this.state.price.surf.symbols[0], " + ")
                                                                    .concat(
                                                                        ae(
                                                                            (this.state.price.surf.reserves[1] * this.state.totalStaked) /
                                                                                this.state.price.surf.totalSupply,
                                                                            5
                                                                        ),
                                                                        " "
                                                                    )
                                                                    .concat(this.state.price.surf.symbols[1]),
                                                                ")"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        ae(this.state.totalPendingSurf, 5),
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "Total Pending SURF Payout",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.totalPendingSurf &&
                                                            this.state.totalPendingSurf > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(this.state.price.surf.eth * this.state.totalPendingSurf, 5),
                                                                "\xa0ETH | $",
                                                                ae(this.state.price.surf.usd * this.state.totalPendingSurf, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            fe.Tab,
                                            {
                                                label: e
                                                    ? "My Info"
                                                    : n.a.createElement(
                                                          s.Fragment,
                                                          null,
                                                          n.a.createElement(
                                                              "small",
                                                              null,
                                                              "My Info",
                                                              n.a.createElement("span", { className: "web3Required d-block" }, "(no account)")
                                                          )
                                                      ),
                                                disabled: !e,
                                            },
                                            n.a.createElement(
                                                "div",
                                                { className: "row align-items-center text-center" },
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 mb-4" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        ae(this.state.userSurfBalance, 5),
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "My Balance",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.userSurfBalance &&
                                                            this.state.userSurfBalance > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(this.state.price.surf.eth * this.state.userSurfBalance, 5),
                                                                "\xa0ETH | $",
                                                                ae(this.state.price.surf.usd * this.state.userSurfBalance, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4" },
                                                    n.a.createElement("span", { className: "big" }, ae(this.state.userLPBalance, 5)),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "My SURF LP Token Balance",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.userLPBalance &&
                                                            this.state.userLPBalance > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ""
                                                                    .concat(
                                                                        ae(
                                                                            (this.state.price.surf.reserves[0] * this.state.userLPBalance) /
                                                                                this.state.price.surf.totalSupply,
                                                                            5
                                                                        ),
                                                                        " "
                                                                    )
                                                                    .concat(this.state.price.surf.symbols[0], " + ")
                                                                    .concat(
                                                                        ae(
                                                                            (this.state.price.surf.reserves[1] * this.state.userLPBalance) /
                                                                                this.state.price.surf.totalSupply,
                                                                            5
                                                                        ),
                                                                        " "
                                                                    )
                                                                    .concat(this.state.price.surf.symbols[1]),
                                                                ")"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4 pb-3" },
                                                    n.a.createElement(
                                                        "p",
                                                        null,
                                                        n.a.createElement("span", { className: "big" }, ae(this.state.userStaked, 5)),
                                                        "My SURF LP Tokens Staked",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.userStaked &&
                                                            this.state.userStaked > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ""
                                                                    .concat(
                                                                        ae(
                                                                            (this.state.price.surf.reserves[0] * this.state.userStaked) /
                                                                                this.state.price.surf.totalSupply,
                                                                            5
                                                                        ),
                                                                        " "
                                                                    )
                                                                    .concat(this.state.price.surf.symbols[0], " + ")
                                                                    .concat(
                                                                        ae(
                                                                            (this.state.price.surf.reserves[1] * this.state.userStaked) /
                                                                                this.state.price.surf.totalSupply,
                                                                            5
                                                                        ),
                                                                        " "
                                                                    )
                                                                    .concat(this.state.price.surf.symbols[1]),
                                                                ")"
                                                            ),
                                                        void 0 !== this.state.userStaked &&
                                                            this.state.userStaked > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae((100 * this.state.userStaked) / this.state.totalStaked, 3),
                                                                "% of Total SURF LP Staked)"
                                                            )
                                                    ),
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "row" },
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "col-12 mb-2" },
                                                            n.a.createElement(
                                                                "button",
                                                                {
                                                                    className: "btn btn-secondary btn-block".concat(
                                                                        !0 === this.state.active && this.state.userETHBalance > 0 ? "" : " disabled"
                                                                    ),
                                                                    onClick: () =>
                                                                        this.setState({
                                                                            stakeETHModalOpen: !0,
                                                                            modalMoreOpen: !1,
                                                                            input: Object(me.a)(
                                                                                Object(me.a)({}, this.state.input),
                                                                                {},
                                                                                { stakeETHAmountText: "" }
                                                                            ),
                                                                        }),
                                                                },
                                                                "Stake Using ETH"
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "col-6 pr-2" },
                                                            n.a.createElement(
                                                                "button",
                                                                {
                                                                    className: "btn btn-block btn-success".concat(
                                                                        !0 === this.state.active && this.state.userLPBalance > 0 ? "" : " disabled"
                                                                    ),
                                                                    onClick: () =>
                                                                        this.setState({
                                                                            stakeModalOpen: !0,
                                                                            modalMoreOpen: !1,
                                                                            input: Object(me.a)(
                                                                                Object(me.a)({}, this.state.input),
                                                                                {},
                                                                                { stakeAmountText: "" }
                                                                            ),
                                                                        }),
                                                                },
                                                                "Stake"
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            "div",
                                                            { className: "col-6 pl-2" },
                                                            n.a.createElement(
                                                                "button",
                                                                {
                                                                    className: "btn btn-block btn-danger".concat(
                                                                        !0 === this.state.active && this.state.userStaked > 0 ? "" : " disabled"
                                                                    ),
                                                                    onClick: () =>
                                                                        this.setState({
                                                                            unstakeModalOpen: !0,
                                                                            modalMoreOpen: !1,
                                                                            input: Object(me.a)(
                                                                                Object(me.a)({}, this.state.input),
                                                                                {},
                                                                                { unstakeAmountText: "" }
                                                                            ),
                                                                        }),
                                                                },
                                                                "Unstake"
                                                            )
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6 mb-4 mb-md-0" },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "big" },
                                                        n.a.createElement("img", { src: le.a, alt: "" }),
                                                        ae(this.state.userSurfClaimed, 5),
                                                        "\xa0",
                                                        n.a.createElement("span", null, "SURF")
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        "My Total Claimed Rewards",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.userSurfClaimed &&
                                                            this.state.userSurfClaimed > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(this.state.price.surf.eth * this.state.userSurfClaimed, 5),
                                                                "\xa0ETH | $",
                                                                ae(this.state.price.surf.usd * this.state.userSurfClaimed, 3),
                                                                "\xa0USD)"
                                                            )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    "div",
                                                    { className: "col-12 col-md-6" },
                                                    n.a.createElement(
                                                        "div",
                                                        { className: "d-block mb-3" },
                                                        n.a.createElement(
                                                            "span",
                                                            { className: "big" },
                                                            n.a.createElement(
                                                                "div",
                                                                { className: "d-inline-block" },
                                                                n.a.createElement("img", { src: le.a, alt: "" }),
                                                                ae(this.state.userSurfRewards, 5),
                                                                "\xa0",
                                                                n.a.createElement("span", null, "SURF")
                                                            )
                                                        ),
                                                        "My Claimable Rewards",
                                                        this.state.price &&
                                                            this.state.price.surf &&
                                                            void 0 !== this.state.userSurfRewards &&
                                                            this.state.userSurfRewards > 0 &&
                                                            n.a.createElement(
                                                                "small",
                                                                { className: "d-block" },
                                                                "(",
                                                                ae(this.state.price.surf.eth * this.state.userSurfRewards, 5),
                                                                "\xa0ETH | $",
                                                                ae(this.state.price.surf.usd * this.state.userSurfRewards, 3),
                                                                "\xa0USD)"
                                                            )
                                                    ),
                                                    n.a.createElement(
                                                        "p",
                                                        { className: "mb-0" },
                                                        n.a.createElement(
                                                            "button",
                                                            {
                                                                className: "btn btn-block btn-primary onCard".concat(
                                                                    !0 === this.state.active && this.state.userSurfRewards > 0 ? "" : " disabled"
                                                                ),
                                                                onClick: this.claim.bind(this),
                                                            },
                                                            "Claim"
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    );
                }
            }
            var Ae = Be;
            class Re extends s.Component {
                constructor(e) {
                    super(e), (this.state = {}), e.price && (this.state.price = Object(me.a)({}, e.price));
                }
                componentDidMount() {
                    setTimeout(
                        function () {
                            (this.lastAccount = q()),
                                (this.loop = setInterval(
                                    function () {
                                        var e = q();
                                        this.lastAccount !== e && ((this.lastAccount = e), this.forceUpdate());
                                    }.bind(this),
                                    100
                                )),
                                this.updateInfo(),
                                (this.watch = j.eth.subscribe("newBlockHeaders", this.updateInfo.bind(this)));
                        }.bind(this),
                        200
                    );
                }
                componentWillUnmount() {
                    this.watch && this.watch.unsubscribe(), this.loop && (clearInterval(this.loop), (this.loop = void 0));
                }
                componentDidUpdate(e) {
                    pe()(this.state.price, this.props.price) || this.setState({ price: Object(me.a)({}, this.props.price) });
                }
                updateInfo() {
                    var e = q() ? q() : "0x0000000000000000000000000000000000000001";
                    z.methods
                        .getAllPoolInfoFor(e)
                        .call()
                        .then((e) => this.processInfo(e));
                }
                processInfo(e) {
                    for (var t = [], a = 0; a < e.tokens.length; a++) {
                        var s = parseInt(e.metadatas[a][7]);
                        t.push({
                            index: a,
                            token: e.tokens[a],
                            lpToken: e.lpTokens[a],
                            isUni: e.isUnis[a],
                            apr: parseInt(e.aprs[a]),
                            lastSurfRewardBlock: parseInt(e.lastSurfRewardBlocks[a]),
                            totalSupply: parseFloat(j.utils.fromWei(e.metadatas[a][0], "ether")),
                            totalLPSupply: parseFloat(j.utils.fromWei(e.metadatas[a][1], "ether")),
                            stakedLPSupply: parseFloat(j.utils.fromWei(e.metadatas[a][2], "ether")),
                            tokenPrice: parseFloat(j.utils.fromWei(e.metadatas[a][3], "ether")),
                            lpTokenPrice: parseFloat(j.utils.fromWei(e.metadatas[a][4], "ether")),
                            totalLiquidityValue: parseFloat(j.utils.fromWei(e.metadatas[a][5], "ether")),
                            surfPerBlock: parseFloat(j.utils.fromWei(e.metadatas[a][6], "ether")),
                            tokenDecimals: s,
                            userTokenBalance: parseFloat(j.utils.fromWei(e.metadatas[a][8], "ether")) * Math.pow(10, 18 - s),
                            userTokenApproved: parseFloat(j.utils.fromWei(e.metadatas[a][9], "ether")) * Math.pow(10, 18 - s),
                            userLPBalance: parseFloat(j.utils.fromWei(e.metadatas[a][10], "ether")),
                            userLPApproved: parseFloat(j.utils.fromWei(e.metadatas[a][11], "ether")),
                            userStaked: parseFloat(j.utils.fromWei(e.metadatas[a][12], "ether")),
                            userSurfRewards: parseFloat(j.utils.fromWei(e.metadatas[a][13], "ether")),
                            userUniRewards: parseFloat(j.utils.fromWei(e.metadatas[a][14], "ether")),
                            userSurfClaimed: parseFloat(j.utils.fromWei(e.metadatas[a][15], "ether")),
                            userUniClaimed: parseFloat(j.utils.fromWei(e.metadatas[a][16], "ether")),
                        });
                    }
                    var n = [];
                    t.forEach((e, t) => {
                        e.userStaked > 0 && n.push(t);
                    }),
                        this.setState({ stakedIndexes: n, beaches: t }, this.fetchPairsInfo.bind(this));
                }
                fetchPairsInfo() {
                    var e = this.state.beaches.map((e) => '"'.concat(e.lpToken.toLowerCase(), '"')),
                        t = "\n\t\t\t\t{\n\t\t\t\t\tpairs(where: { id_in: [".concat(
                            e.join(", "),
                            "] }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\ttoken0 {\n\t\t\t\t\t\t\tid,\n\t\t\t\t\t\t\tsymbol\n\t\t\t\t\t\t},\n\t\t\t\t\t\ttoken1 {\n\t\t\t\t\t\t\tid,\n\t\t\t\t\t\t\tsymbol\n\t\t\t\t\t\t},\n\t\t\t\t\t\treserve0,\n\t\t\t\t\t\treserve1,\n\t\t\t\t\t\ttotalSupply\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t"
                        );
                    fetch("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2", { method: "POST", body: JSON.stringify({ query: t }) })
                        .then((e) => e.text())
                        .then((e) => {
                            var t = JSON.parse(e);
                            if (t.data && t.data.pairs) {
                                var a = t.data.pairs,
                                    s = {},
                                    n = {};
                                a.forEach((e) => {
                                    (s[e.id] = {
                                        symbol: ""
                                            .concat("WETH" === e.token0.symbol ? "ETH" : e.token0.symbol, "/")
                                            .concat("WETH" === e.token1.symbol ? "ETH" : e.token1.symbol),
                                        tokens: [e.token0.id, e.token1.id],
                                    }),
                                        (n[e.id] = {
                                            reserves: [parseFloat(e.reserve0), parseFloat(e.reserve1)],
                                            totalSupply: parseFloat(e.totalSupply),
                                        });
                                }),
                                    localStorage.setItem("symsCache", JSON.stringify(s)),
                                    this.state.beaches.forEach((e) => {
                                        var t = e.lpToken.toLowerCase();
                                        void 0 === s[t] &&
                                            ((s[t] = {
                                                symbol: 0 === e.index ? "SURF/ETH" : "?/?",
                                                tokens: 0 === e.index ? ["surf", V] : ["unknown", "unknown"],
                                            }),
                                            (n[t] = { reserves: [0, 0], totalSupply: 0 }));
                                    }),
                                    this.setState({ syms: s, lps: n });
                            }
                        });
                }
                emergencyWithdraw(e) {
                    var t = q();
                    void 0 !== t &&
                        (R ? new R.eth.Contract(M, "0x6Db1C1B318275df254Bb47c63e7F316380bAf4be") : void 0).methods
                            .emergencyWithdraw(e)
                            .send({ from: t }, (e, t) => {
                                e ? console.log(e) : console.log(t);
                            });
                }
                render() {
                    return n.a.createElement(
                        s.Fragment,
                        null,
                        n.a.createElement(m.a, null, n.a.createElement("title", null, "Legacy Tito | SURF Finance")),
                        n.a.createElement(
                            "div",
                            { className: "col-12 text-center my-4" },
                            n.a.createElement("h1", { className: "underlined" }, n.a.createElement("span", null, "Legacy Tito"))
                        ),
                        void 0 !== this.state.syms
                            ? this.state.stakedIndexes.length > 0
                                ? this.state.stakedIndexes.map((e) => {
                                      var t = this.state.beaches[e],
                                          a = this.state.syms[t.lpToken.toLowerCase()],
                                          s = this.state.lps ? this.state.lps[t.lpToken.toLowerCase()] : void 0;
                                      return n.a.createElement(
                                          "div",
                                          { className: "col-12 col-md-6 col-lg-4 mx-auto mb-3", key: t.index },
                                          n.a.createElement(
                                              "div",
                                              { className: "card shadow-sm" },
                                              n.a.createElement(
                                                  "div",
                                                  { className: "card-body" },
                                                  n.a.createElement(
                                                      "div",
                                                      { className: "d-flex flex-wrap align-items-center justify-content-center mb-3" },
                                                      n.a.createElement("span", { className: "d-block text-center big" }, a.symbol),
                                                      n.a.createElement(
                                                          "div",
                                                          { className: "d-block text-center ml-2 mx-md-2", style: { position: "relative" } },
                                                          n.a.createElement(
                                                              "div",
                                                              { className: "token0" },
                                                              n.a.createElement(
                                                                  "div",
                                                                  { className: "square" },
                                                                  n.a.createElement("img", { src: "/xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/img/".concat(a.tokens[0], ".png"), alt: "" })
                                                              )
                                                          ),
                                                          n.a.createElement(
                                                              "div",
                                                              { className: "token1" },
                                                              n.a.createElement(
                                                                  "div",
                                                                  { className: "square" },
                                                                  n.a.createElement("img", { src: "/xTiu_sh0BiLLwRebVqSe9Ha_SbEMUR6F8tUYKVwmmu4/img/".concat(a.tokens[1], ".png"), alt: "" })
                                                              )
                                                          )
                                                      )
                                                  ),
                                                  n.a.createElement(
                                                      "div",
                                                      { className: "row text-center py-2" },
                                                      n.a.createElement(
                                                          "div",
                                                          { className: "col-12" },
                                                          n.a.createElement(
                                                              "p",
                                                              null,
                                                              n.a.createElement("span", { className: "big" }, ae(t.userStaked, 5)),
                                                              "My LP Tokens Staked",
                                                              t.userStaked > 0 &&
                                                                  s &&
                                                                  n.a.createElement(
                                                                      "small",
                                                                      { className: "d-block" },
                                                                      "(",
                                                                      ""
                                                                          .concat(ae((s.reserves[0] * t.userStaked) / s.totalSupply, 5), " ")
                                                                          .concat(a.symbol.split("/")[0], " + ")
                                                                          .concat(ae((s.reserves[1] * t.userStaked) / s.totalSupply, 5), " ")
                                                                          .concat(a.symbol.split("/")[1]),
                                                                      ")"
                                                                  ),
                                                              t.userStaked > 0 &&
                                                                  n.a.createElement(
                                                                      "small",
                                                                      { className: "d-block" },
                                                                      "(",
                                                                      ae((100 * t.userStaked) / t.stakedLPSupply, 3),
                                                                      "% of Total LP Staked)"
                                                                  )
                                                          ),
                                                          n.a.createElement(
                                                              "div",
                                                              { className: "row" },
                                                              n.a.createElement(
                                                                  "div",
                                                                  { className: "col-12" },
                                                                  n.a.createElement(
                                                                      "button",
                                                                      {
                                                                          className: "btn btn-secondary btn-block btn-warning",
                                                                          onClick: () => this.emergencyWithdraw(e),
                                                                      },
                                                                      "Emergency Withdraw"
                                                                  )
                                                              )
                                                          )
                                                      )
                                                  )
                                              )
                                          )
                                      );
                                  })
                                : n.a.createElement("div", { className: "col-12 text-center" }, "No staked beaches.")
                            : n.a.createElement("div", { className: "col-12 text-center" }, "Fetching info...")
                    );
                }
            }
            var Oe = Re,
                We = a(334),
                Ie = a.n(We),
                He = a(335),
                _e = a.n(He),
                De = a(336),
                je = a.n(De),
                qe = () =>
                    n.a.createElement(
                        s.Fragment,
                        null,
                        n.a.createElement(m.a, null, n.a.createElement("title", null, "Community | SURF Finance")),
                        n.a.createElement(
                            "div",
                            { className: "col-12 text-center my-4" },
                            n.a.createElement(
                                "h4",
                                { className: "mb-4 underlined" },
                                n.a.createElement("span", null, "Need more SURF in your life? Come say hi!")
                            ),
                            n.a.createElement(
                                "div",
                                { className: "d-flex flex-wrap justify-content-center" },
                                n.a.createElement(
                                    "a",
                                    {
                                        className: "p-2 d-block communityIcon",
                                        href: "https://discord.gg/ZduXSdd",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                    },
                                    n.a.createElement("div", { className: "square" }, n.a.createElement("img", { src: Ie.a, alt: "" }))
                                ),
                                n.a.createElement(
                                    "a",
                                    {
                                        className: "p-2 d-block communityIcon",
                                        href: "https://t.me/surf_finance",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                    },
                                    n.a.createElement("div", { className: "square" }, n.a.createElement("img", { src: _e.a, alt: "" }))
                                ),
                                n.a.createElement(
                                    "a",
                                    {
                                        className: "p-2 d-block communityIcon",
                                        href: "https://twitter.com/surf_defi",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                    },
                                    n.a.createElement("div", { className: "square" }, n.a.createElement("img", { src: je.a, alt: "" }))
                                )
                            )
                        )
                    ),
                Ve = () =>
                    n.a.createElement(
                        s.Fragment,
                        null,
                        n.a.createElement(m.a, null, n.a.createElement("title", null, "Page Not Found | SURF Finance")),
                        n.a.createElement(
                            "div",
                            { className: "col-12 text-center my-4" },
                            n.a.createElement("h1", { className: "underlined mb-3" }, n.a.createElement("span", null, "404")),
                            n.a.createElement("p", null, "Page Not Found")
                        )
                    ),
                $e = (e) =>
                    n.a.createElement(
                        r.d,
                        null,
                        n.a.createElement(r.b, {
                            exact: !0,
                            path: "/beaches",
                            render: (t) => n.a.createElement(Ue, Object.assign({}, t, { price: e.price })),
                        }),
                        n.a.createElement(r.b, {
                            exact: !0,
                            path: "/beach/:id([0-9]+)",
                            render: (t) => n.a.createElement(Ue, Object.assign({}, t, { price: e.price })),
                        }),
                        n.a.createElement(r.b, {
                            exact: !0,
                            path: "/legacy",
                            render: (t) => n.a.createElement(Oe, Object.assign({}, t, { price: e.price })),
                        }),
                        n.a.createElement(r.b, {
                            exact: !0,
                            path: "/whirlpool",
                            render: (t) => n.a.createElement(Ae, Object.assign({}, t, { price: e.price })),
                        }),
                        n.a.createElement(r.b, {
                            exact: !0,
                            path: "/account/:id(0x[0-9a-f]{40})",
                            render: (t) => n.a.createElement(Me, Object.assign({}, t, { price: e.price })),
                        }),
                        n.a.createElement(r.b, {
                            exact: !0,
                            path: "/my-account",
                            render: () => n.a.createElement(r.a, { to: q() ? "/account/".concat(q()) : "/" }),
                        }),
                        n.a.createElement(r.b, { exact: !0, path: "/community", component: qe }),
                        n.a.createElement(r.b, {
                            exact: !0,
                            path: "/*",
                            render: (t) => n.a.createElement(ge, Object.assign({}, t, { price: e.price })),
                        }),
                        n.a.createElement(r.b, { component: Ve })
                    ),
                Je = Object(o.a)();
            class Xe extends s.Component {
                constructor(e) {
                    super(e),
                        (this.state = {}),
                        (this.params = {
                            retina_detect: !0,
                            particles: {
                                number: { value: 150, density: { enable: !1, value_area: 1e3 } },
                                color: { value: "#00cbce" },
                                polygon: { type: "circle" },
                                size: { value: 8, random: !0, anim: { speed: 0.1, size_min: 2 } },
                                line_linked: { enable: !1 },
                                move: { random: !0, speed: 2, direction: "none", out_mode: "out", bounce: !1 },
                                opacity: { value: 0.05, random: !0 },
                            },
                        });
                }
                componentDidMount() {
                    document.getElementById("root").classList.add("browser-".concat(new p.a().getBrowser().name.toLowerCase().replace(" ", "-"))),
                        Je.listen(
                            function (e, t) {
                                "PUSH" === t && e.pathname !== this.lastPath && window.scrollTo(0, 0), (this.lastPath = e.pathname);
                            }.bind(this)
                        ),
                        j.eth.net.getNetworkType().then(
                            function (e) {
                                this.setState({ network: e });
                            }.bind(this)
                        ),
                        this.updatePrice(),
                        (this.watch = j.eth.subscribe("newBlockHeaders", this.updatePrice.bind(this)));
                }
                componentWillUnmount() {
                    this.watch && this.watch.unsubscribe();
                }
                updatePrice() {
                    var e = '\n\t\t\t{\n\t\t\t\tsurf: pair(id: "'
                        .concat(
                            "0x32d588fd4d0993378995306563A04aF5Fa162deC".toLowerCase(),
                            '") {\n\t\t\t\t\ttoken0 {\n\t\t\t\t\t\tsymbol\n\t\t\t\t\t},\n\t\t\t\t\ttoken1 {\n\t\t\t\t\t\tsymbol\n\t\t\t\t\t},\n\t\t\t\t\treserve0,\n\t\t\t\t\treserve1,\n\t\t\t\t\ttotalSupply\n\t\t\t\t},\n\t\t\t\tuni: pair(id: "'
                        )
                        .concat(
                            "0xd3d2e2692501a5c9ca623199d38826e513033a17".toLowerCase(),
                            '") {\n\t\t\t\t\treserve0,\n\t\t\t\t\treserve1,\n\t\t\t\t\treserveETH,\n\t\t\t\t\treserveUSD\n\t\t\t\t}\n\t\t\t}\n\t\t\t'
                        );
                    fetch("https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2", { method: "POST", body: JSON.stringify({ query: e }) })
                        .then((e) => e.text())
                        .then((e) => {
                            var t = JSON.parse(e);
                            if (t.data && t.data.uni) {
                                var a = t.data.uni,
                                    s = parseFloat(a.reserve1) / parseFloat(a.reserve0),
                                    n = parseFloat(a.reserveUSD) / parseFloat(a.reserveETH),
                                    l = { uni: { eth: s, usd: s * n }, ethusd: n };
                                if (t.data.surf) {
                                    var i = t.data.surf,
                                        r = [
                                            "WETH" === i.token0.symbol ? "ETH" : i.token0.symbol,
                                            "WETH" === i.token1.symbol ? "ETH" : i.token1.symbol,
                                        ],
                                        c = [parseFloat(i.reserve0), parseFloat(i.reserve1)],
                                        o = Math.pow(c[0] / c[1], "ETH" === r[1] ? -1 : 1);
                                    l.surf = { symbols: r, reserves: c, totalSupply: parseFloat(i.totalSupply), eth: o, usd: o * n };
                                }
                                this.setState({ price: l });
                            }
                        });
                }
                render() {
                    return n.a.createElement(
                        r.c,
                        { history: Je },
                        n.a.createElement(m.a, null, n.a.createElement("title", null, "SURF Finance")),
                        n.a.createElement(
                            c.ErrorBoundary,
                            { fallbackRender: () => n.a.createElement(s.Fragment, null) },
                            n.a.createElement(h.a, { id: "bgParticles", params: this.params })
                        ),
                        n.a.createElement(re, { network: this.state.network }),
                        n.a.createElement(
                            "div",
                            { className: "container my-5", id: "main" },
                            n.a.createElement("div", { className: "row" }, n.a.createElement($e, { price: this.state.price }))
                        ),
                        n.a.createElement(oe, null)
                    );
                }
            }
            var Ye = Xe;
            setTimeout(() => i.a.render(n.a.createElement(Ye, null), document.getElementById("root")), 1e3);
        },
    },
    [[338, 1, 2]],
]);
