import { Cemjsx } from "cemjs-all"
import space from '@svg/space.svg'
import copy from '@svg/setting/copy.svg'


export default function (data, children) {
  return (
    <div
      class="about"

    >
      <div class="about_info">
        <div class="about_image">
          <img src={space}></img>
        </div>
        <div class="about_text block">
          <p>{this.Static.info}</p>
        </div>
      </div>
      <h1 class="title">Project installation manual</h1>
      <div class="manual">
        <p class="text footnote">To install the project, you need to have the following installed on your computer <a target="_blank" href="https://nodejs.org/en">Node.js</a>. To build the project, we use Esbuild, which binds dependencies much faster than JavaScript-based alternatives such as Webpack and Parcel.</p>
        <p class="manual_subtitle">The command to install the framework CemJS frontend:</p>
        <span class="code block">
          <code ref="install">npm init cemjs front</code>
          <span
            class="copy"
            onclick={() => {
              window.navigator.clipboard.writeText(this.Ref.install.textContent);
              this.Ref.installCopy.classList.add("copy_success");
              setTimeout(() => {
                this.Ref.installCopy.classList.remove("copy_success");
              }, 1500)
            }}
          >
            <img src={copy}></img>
            <span
              class="contact_hint"
              ref="installCopy"
            >
              <span class="contact_hint-info">Copied</span>
            </span>
          </span>
        </span>
        <p class="manual_subtitle">The command to launch the project:</p>
        <span class="code block">
          <code ref="run">npm run start</code>
          <span
            class="copy"
            onclick={() => {
              window.navigator.clipboard.writeText(this.Ref.run.textContent);
              this.Ref.runCopy.classList.add("copy_success");
              setTimeout(() => {
                this.Ref.runCopy.classList.remove("copy_success");
              }, 1500)
            }}
          >
            <img src={copy}></img>
            <span
              class="contact_hint"
              ref="runCopy"
            >
              <span class="contact_hint-info">Copied</span>
            </span>
          </span>
        </span>
      </div>
    </div>
  )
}