const { resolveJob, createString } = require('./hpWashingConfig.js');

const main = (msgContent) => {
  const COST_OF_AP_RESET = 3100;
  let job = msgContent.args[1];
  let level = msgContent.args[2];
  let mp = msgContent.args[3];
  let config = resolveJob(job);
  if (!config) {
    msgContent.msg.channel.send("Valid Jobs: beginner, spearman, fighter, page, thief, bowman, magician, pirate");
    return;
  }
  let minMp = config.minMpMultiplier*level+config.minMpAdd;
  let extraMp = mp - minMp;
  let numberOfWashes = Math.ceil(extraMp/config.mpLoss);
  let unluckyHp = Math.floor(numberOfWashes*config.minHpGain);
  let luckyHp = Math.floor(numberOfWashes*config.maxHpGain);
  let requiredNx = Math.ceil(numberOfWashes*COST_OF_AP_RESET);
  let voteDays = Math.ceil(requiredNx/5000)

  msgContent.msg.channel.send(createString({
    extraMp,
    numberOfWashes,
    unluckyHp,
    luckyHp,
    requiredNx,
    voteDays
  }))
}

module.exports.main = main;
