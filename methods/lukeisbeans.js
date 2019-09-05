const fs = require('fs');
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const imageCreep = async (msgContent) => {
  let msg = msgContent.msg;
  await msg.channel.send("", {file: `images/b1.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b2.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b3.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b4.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b5.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b6.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b7.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b8.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b9.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b10.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b11.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
    msg.delete()
  })
  await msg.channel.send("", {file: `images/b12.jpg`})
  .then(async (msg)=>{
    await sleep(2000)
  })
  await msg.channel.send("Luke is Beans..")
}
module.exports.imageCreep = imageCreep;
