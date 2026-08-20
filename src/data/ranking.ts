const campaignConfig = {
  year: 2026,
  month: 8,
  startDay: 1,
  endDay: 31,
  deadline: "23:59",
};

const targets = {
  groupA: 60,
  groupB: 50,
  groupC: 45,
};

const period = `${campaignConfig.year}年${campaignConfig.month}月${campaignConfig.startDay}日～${campaignConfig.year}年${campaignConfig.month}月${campaignConfig.endDay}日`;

export const rankingData = {
  header : {
    logo: "/images/logo.png",
    title: "直販月次ランキング",
    subtitle: "インセンティブキャンペーン!!",
  },
  month: `${campaignConfig.year}年${campaignConfig.month}月`,

  campaign: {
    title: "キャンペーン内容",

    overview: {
      label: "概要",
      text: "生産性を最大化するため、クローザー、アポインターを対象にキャンペーンの設定を行います。達成件数に応じてグループ分けを行い、対象人数や設定金額を決定します。",
    },

    period: {
      label: "期間",
      text: period,
    },
  },

  conditions: {
    title: "支給条件",
    items: [
      `期間：${period}（締切：${campaignConfig.month}/${campaignConfig.endDay} ${campaignConfig.deadline}）`,
      "グループ判定：期間内の直販総ET件数により決定（当月キャンセル分除外）",
      `GROUP A：${targets.groupA}件以上 / 月`,
      `GROUP B：${targets.groupB}件以上 / 月`,
      `GROUP C：${targets.groupC}件以上 / 月`,
      "順位決定：ポイント定数に基づく個人ポイント合計でランク付け",
      "ポイント計上：ポイントはアポイント / クローザーで折半",
    ],
  },

  payment: {
    title: "支給方法",
    description: "プロパーは給与合算、委託人員は所属会社へ当月稼働費に合算して支給",
  },

  exclusions: {
    title: "支給対象外",

    items: [
      "翌月に欠勤２回以上した人員",
      "対応漏れによるクレームの発覚",
    ],
  },

  notes: [
    "責任者の判断で支払対象外にする場合があります。",
    "支給対象外が出ても、下位人への繰り上げ受給は行いません。",
  ],

  groupA: {
    title: 'GROUP A',
    target: `${targets.groupA}件～`,
    ap: [
      { rank: 1, amount: "¥35,000" },
      { rank: 2, amount: "¥20,000" },
      { rank: 3, amount: "¥10,000" },
    ],
    cl: [
      { rank: 1, amount: "¥35,000" },
      { rank: 2, amount: "¥20,000" },
    ],
    leader: [
      { rank: 1, amount: "¥20,000" },
    ],
  },

  groupB: {
    title: 'GROUP B',
    target: `${targets.groupB}件～`,
    ap: [
      { rank: 1, amount: "¥25,000" },
      { rank: 2, amount: "¥10,000" },
      { rank: 3, amount: '-' },
    ],
    cl: [
      { rank: 1, amount: "¥25,000" },
      { rank: 2, amount: "¥10,000" },
    ],
    leader: [
      { rank: 1, amount: "¥10,000" },
    ],
  },

  groupC: {
    title: 'GROUP C',
    target: `${targets.groupC}件～`,
    ap: [
      { rank: 1, amount: "¥10,000" },
      { rank: 2, amount: '-' },
      { rank: 3, amount: '-' },
    ],
    cl: [
      { rank: 1, amount: "¥10,000" }
    ],
    leader: [
      { rank: 1, amount: "-" },
    ]
  },
};
