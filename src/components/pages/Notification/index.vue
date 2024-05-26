<template>
  <div class="Notification">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="content">
            <div class="message-notification">
              <span class="icon"
                ><img
                  src="@/assets/images/global/icons/global/notification/notification-bing.svg"
              /></span>
              <p>There is notification for you</p>
            </div>
            <span class="time">10:00AM</span>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="content">
            <div class="message-notification">
              <span class="icon"
                ><img
                  src="@/assets/images/global/icons/global/notification/notification-bing.svg"
              /></span>
              <p>There is notification for you</p>
            </div>
            <span class="time">10:00AM</span>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="content">
            <div class="message-notification">
              <span class="icon"
                ><img
                  src="@/assets/images/global/icons/global/notification/notification-bing.svg"
              /></span>
              <p>There is notification for you</p>
            </div>
            <span class="time">10:00AM</span>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="content">
            <div class="message-notification">
              <span class="icon"
                ><img
                  src="@/assets/images/global/icons/global/notification/notification-bing.svg"
              /></span>
              <p>There is notification for you</p>
            </div>
            <span class="time">10:00AM</span>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="content">
            <div class="message-notification">
              <span class="icon"
                ><img
                  src="@/assets/images/global/icons/global/notification/notification-bing.svg"
              /></span>
              <p>There is notification for you</p>
            </div>
            <span class="time">10:00AM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Notification {
  padding: 100px 0px;
  .content {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    background: rgba(249, 249, 249, 1);
    border-bottom: 1px solid rgb(237, 237, 237);
    padding: 20px;

    .message-notification {
      p {
        display: inline-block;
        font-size: 16px;
        padding: 0px;
        margin: 0px;
      }
      .icon {
        border: 1px solid rgb(10, 10, 104);
        border-radius: 100%;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        margin-right: 10px;
        padding: 5px 0px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .time {
      color: rgba(146, 146, 146, 1);
      font-size: 12px;
      padding: 10px 0px;
    }
  }
}
</style>
