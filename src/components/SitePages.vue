<template>
  <!-- The text version of the site. Each <article class="page"> is a page
       the world can open: a door's F key, a Dock slot or the phone reads
       them. Bilingual: long text carries lang="zh-CN" / lang="en" copies;
       short labels carry data-zh / data-en. -->
  <section id="pages">
    <h1 class="plain-title">BabyLLL's World</h1>

    <article class="page" data-station="about">
      <h2 data-zh="关于我">About me</h2>
      <div class="about">
        <div class="about-text" lang="en">
          <p>Hi, I'm BabyLLL. Welcome to my little voxel world — walk around with WASD, press E near a door to open a page, and enjoy the day/night cycle.</p>
          <div class="about-foot"><a class="mc-button" href="#contact" data-open="phone">Follow</a><a class="mc-button" href="#mailbox" data-open="mailbox">Mailbox</a></div>
        </div>
        <div class="about-text" lang="zh-CN">
          <p>你好，我是 BabyLLL。欢迎来到我的方块小世界——用 WASD 走动，靠近门口按 E 打开页面，还可以看昼夜交替。</p>
          <div class="about-foot"><a class="mc-button" href="#contact" data-open="phone">关注</a><a class="mc-button" href="#mailbox" data-open="mailbox">留言</a></div>
        </div>
      </div>
    </article>

    <article class="page" data-station="blog" data-icon="blog">
      <h2 data-zh="个人主页">Website</h2>
      <div class="placeholder-card"><p data-zh="填写你的个人主页链接">Add your website link</p></div>
    </article>

    <article class="page" id="contact" data-station="contact">
      <h2 data-zh="关注">Follow</h2>
      <p data-zh="填写你的联系方式">Add your contact details</p>
      <ul class="contact">
        <li data-app="github"><span>GitHub</span><a href="https://github.com/BabyLLL">github.com/BabyLLL</a><p></p></li>
      </ul>
    </article>

    <article class="page" id="mailbox" data-station="mailbox">
      <h2 data-zh="留言">Mailbox</h2>
      <form class="mailbox" method="post" enctype="text/plain">
        <input name="subject" maxlength="80" required placeholder="Subject" aria-label="Subject (required)" data-zh-placeholder="主题" data-zh-label="主题，必填">
        <textarea name="message" rows="6" maxlength="1000" required placeholder="Write something" aria-label="Write something" data-zh-placeholder="输入文字" data-zh-label="输入文字"></textarea>
        <input name="contact" maxlength="120" required autocomplete="email" placeholder="Email or other contact (required)" aria-label="How to reach you (required)" data-zh-placeholder="联系方式（必填，邮箱或微信等）" data-zh-label="联系方式，必填">
        <input class="trap" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="mailbox-foot"><button class="mc-button" type="submit" data-zh="发送" disabled>Send</button></div>
        <p class="mailbox-status" role="status" aria-live="polite"></p>
      </form>
    </article>
  </section>
</template>
