const resolveJob = (job) => {
  switch(job) {
    case "beginner":
      ({ minHpGain: 8, maxHpGain:12, mpLoss: 6, minMpMultiplier: 10, minMpAdd: 2 })
    case "spearman":
      return { minHpGain: 50, maxHpGain:55, mpLoss: 4, minMpMultiplier: 4, minMpAdd:156}
    case "fighter":
      return { minHpGain: 50, maxHpGain:55, mpLoss: 4, minMpMultiplier: 4, minMpAdd:56 }
    case "page":
      return { minHpGain: 50, maxHpGain:55, mpLoss: 4, minMpMultiplier: 4, minMpAdd:56 }
    case "thief":
      return { minHpGain: 16, maxHpGain:20, mpLoss: 12, minMpMultiplier: 14, minMpAdd: 148 }
    case "bowman":
      return { minHpGain: 16, maxHpGain:20, mpLoss: 12, minMpMultiplier: 14, minMpAdd: 148 }
    case "magician":
      return { minHpGain: 10, maxHpGain:20, mpLoss: 90, minMpMultiplier: 22, minMpAdd: 488 }
    case "pirate":
      return { minHpGain: 18, maxHpGain:22, mpLoss: 16, minMpMultiplier: 18, minMpAdd: 111 }
    default:
      return
  }
}

const createString = ({
  extraMp,
  numberOfWashes,
  luckyHp,
  unluckyHp,
  requiredNx,
  voteDays
}) => (`
You have ${extraMp} extra MP.
You can wash ${numberOfWashes} times.
If you're lucky you will gain ${luckyHp} HP.
If you're unlucky you will gain ${unluckyHp} HP.
The cost of ${numberOfWashes} AP resets is: ${requiredNx} NX. 
(${voteDays} days of voting)
`)

module.exports.resolveJob = resolveJob;
module.exports.createString = createString;