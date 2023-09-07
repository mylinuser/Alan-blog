## 定时器

### html

```css
{
                  !!goodsDetail?.marketingType && (
                    <View className='count-down'>
                      <Text className='start-text'>即将开始</Text>
                      <View className='count-text'>
                        <Text className='bc-black'>{countDay}</Text>天
                        <Text className='bc-black'>{countHour}</Text>:
                        <Text className='bc-black'>{countMin}</Text>:
                        <Text className='bc-black'>{countSec}</Text>
                        <View className='end-text'>截止时间</View>
                      </View>
                    </View>
                  )
                }
```

### css

```css
.detail-top {
      position: relative;
      .count-down {
        width: calc(100vw - 40px);
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 10px 10px 0 0;
        background-color: #76d19c;
        color: #fff;

        .start-text {
          font-weight: 600;
          font-size: 30px;
        }
        .count-text {
          font-size: 24px;
          .bc-black {
            padding: 5px;
            margin: 0 10px;
            border-radius: 5px;
            font-weight: 600;
            text-align: center;
            background-color: #495775;
          }
          .end-text {
            width: 100%;
            margin-top: 10px;
            text-align: right;
          }
        }
      }
    }
```

### countDown.js

```css
export default {
  // 把数字变成字符串，不够两位数的补零
  transformTime(time) {
    const newTime = time + ''
    return newTime.length < 2 ? '0' + newTime : newTime
  },

  /**
   * 倒计时
   * @param {*} timeout 定时器
   * @param {*} waitTime 倒计时的时间戳
   * @param {*} doSomethingDuringCountDown 定时器中执行期间执行的函数
   * @param {*} doSomethingAfterCountDown 定时器中执行后执行的函数
   */
  countDown(timeout, waitTime, doSomethingDuringCountDown, doSomethingAfterCountDown) {
    if (waitTime > 0) {
      waitTime--
      if (doSomethingDuringCountDown) {
        doSomethingDuringCountDown(waitTime)
      }
      timeout = setTimeout(() => {
        this.countDown(timeout, waitTime, doSomethingDuringCountDown, doSomethingAfterCountDown)
      }, 1000);
    } else {
      if (doSomethingAfterCountDown) {
        doSomethingAfterCountDown()
      }
    }
  }
}

const date = (new Date(res.data.preSellStartDate).getTime() / 1000) - (new Date().getTime() / 1000)
            countDownUtils.countDown(timeout, date, this.doSomethingDuringCountDown, this.doSomethingAfterCountDown)
```

执行

```css
/**
 * 生命周期函数--监听页面卸载
 */
componentWillUnmount() {
  if (this.state.timeout) {
    this.doSomethingAfterCountDown()
  }
}

const date = (new Date(res.data.preSellStartDate).getTime() / 1000) - (new Date().getTime() / 1000)

countDownUtils.countDown(timeout, date, this.doSomethingDuringCountDown, this.doSomethingAfterCountDown)
// 定时器中执行期间执行的函数
doSomethingDuringCountDown = (waitTime) => {
  this.setState({
    countDay: countDownUtils.transformTime(Math.floor(waitTime / 86400)),
    countHour: countDownUtils.transformTime(Math.floor(waitTime % 86400 / 3600)),
    countMin: countDownUtils.transformTime(Math.floor(waitTime % 86400 % 3600 / 60)),
    countSec: countDownUtils.transformTime(Math.floor(waitTime % 86400 % 3600 % 60)),
    timeout: this.state.timeout
  })
}

// 定时器中执行后执行的函数
doSomethingAfterCountDown = () => {
  if (this.state.timeout) {
    clearTimeout(this.state.timeout)
    this.setState({ timeout: null });
  }
}
```