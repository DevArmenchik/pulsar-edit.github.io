import{_ as u,o as h,c as m,a as e,b as n,d as o,w as l,f as d,r as c}from"./app.67aa3f8b.js";const p={},b=e("h3",{id:"hacking-on-atom-core",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hacking-on-atom-core","aria-hidden":"true"},"#"),n(" Hacking on Atom Core")],-1),g=e("p",null,"If you're hitting a bug in Atom or just want to experiment with adding a feature to the core of the system, you'll want to run Atom in Dev Mode with access to a local copy of the Atom source.",-1),_=e("h4",{id:"fork-the-atom-atom-repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fork-the-atom-atom-repository","aria-hidden":"true"},"#"),n(" Fork the atom/atom repository")],-1),v={href:"https://help.github.com/articles/fork-a-repo/",target:"_blank",rel:"noopener noreferrer"},f=d(`<h4 id="cloning-and-bootstrapping" tabindex="-1"><a class="header-anchor" href="#cloning-and-bootstrapping" aria-hidden="true">#</a> Cloning and bootstrapping</h4><p>Once you&#39;ve set up your fork of the atom/atom repository, you can clone it to your local machine:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ git clone git@github.com:&lt;em&gt;your-username&lt;/em&gt;/atom.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>From there, you can navigate into the directory where you&#39;ve cloned the Atom source code and run the bootstrap script to install all the required dependencies:</p>`,4),y=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ cd <em>where-you-cloned-atom</em>
$ script/bootstrap
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ cd <em>where-you-cloned-atom</em>
$ script/bootstrap
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ cd <em>where-you-cloned-atom</em>
$ script\\bootstrap
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=d(`<h4 id="running-in-development-mode" tabindex="-1"><a class="header-anchor" href="#running-in-development-mode" aria-hidden="true">#</a> Running in Development Mode</h4><p>Once you have a local copy of Atom cloned and bootstrapped, you can then run Atom in Development Mode. But first, if you cloned Atom to somewhere other than <span class="platform-mac platform-linux"><code>~/github/atom</code></span><span class="platform-windows"><code>%USERPROFILE%\\github\\atom</code></span> you will need to set the <code>ATOM_DEV_RESOURCE_PATH</code> environment variable to point to the folder in which you cloned Atom. To run Atom in Dev Mode, use the <code>--dev</code> parameter from the terminal:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ atom --dev &lt;em&gt;path-to-open&lt;/em&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container note"><p class="custom-container-title">Note</p><p><strong>Note:</strong> If the atom command does not respond in the terminal, then try atom-dev or atom-beta. The suffix depends upon the particular source code that was cloned.</p></div><p>There are a couple benefits of running Atom in Dev Mode:</p>`,5),A=d('<li>When the <code>ATOM_DEV_RESOURCE_PATH</code> environment variable is set correctly, Atom is run using the source code from your local <code>atom/atom</code> repository. This means that you don&#39;t have to run <span class="platform-mac platform-linux"><code>script/build</code></span><span class="platform-windows"><code>script\\build</code></span> every time you change code. Just restart Atom \u{1F44D}</li><li>Packages that exist in <span class="platform-mac platform-linux"><code>~/.atom/dev/packages</code></span><span class="platform-windows"><code>%USERPROFILE%\\.atom\\dev\\packages</code></span> are loaded instead of packages of the same name normally loaded from other locations. This means that you can have development versions of packages you use loaded but easily go back to the stable versions by launching without Dev Mode.</li>',2),S={href:"https://github.com/atom/dev-live-reload",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"window:reload",-1),P=d(`<h4 id="running-atom-core-tests-locally" tabindex="-1"><a class="header-anchor" href="#running-atom-core-tests-locally" aria-hidden="true">#</a> Running Atom Core Tests Locally</h4><p>In order to run Atom Core tests from the terminal, first be certain to set the <code>ATOM_DEV_RESOURCE_PATH</code> environment variable as mentioned above and then:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ cd &lt;em&gt;path-to-your-local-atom-repo&lt;/em&gt;
$ atom --test spec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="building" tabindex="-1"><a class="header-anchor" href="#building" aria-hidden="true">#</a> Building</h4><p>In order to build Atom from source, you need to have a number of other requirements and take additional steps.</p>`,5),E=e("p",null,"Ubuntu LTS 16.04 64-bit is the recommended platform.",-1),I=e("h5",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),n(" Requirements")],-1),C=e("li",null,"OS with 64-bit or 32-bit architecture",-1),$=e("li",null,"C++11 toolchain",-1),D=e("li",null,"Git",-1),O={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},R=e("li",null,[n("npm 6.12 or later (run "),e("code",null,"npm install -g npm"),n(")")],-1),M=e("li",null,"Python 2.6.x, 2.7.x or 3.5+",-1),V={href:"https://wiki.gnome.org/Projects/Libsecret",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"For more details, scroll down to find how to setup a specific Linux distro.",-1),N=e("h6",{id:"ubuntu-debian",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu-debian","aria-hidden":"true"},"#"),n(" Ubuntu / Debian")],-1),L=e("ul",null,[e("li",null,[e("p",null,"Install GNOME headers and other basic prerequisites:"),e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo apt-get install build-essential git libsecret-1-dev fakeroot rpm libx11-dev libxkbfile-dev
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])])]),e("li",null,[e("p",null,[n("If "),e("code",null,"script/build"),n(" exits with an error, you may need to install a newer C++ compiler with C++11:")]),e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo add-apt-repository ppa:ubuntu-toolchain-r/test
$ sudo apt-get update
$ sudo apt-get install gcc-5 g++-5
$ sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-5 80 --slave /usr/bin/g++ g++ /usr/bin/g++-5
$ sudo update-alternatives --config gcc # choose gcc-5 from the list
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])])],-1),W=e("h6",{id:"fedora-22",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fedora-22","aria-hidden":"true"},"#"),n(" Fedora 22+")],-1),U=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo dnf --assumeyes install make gcc gcc-c++ glibc-devel git-core libsecret-devel rpmdevtools libX11-devel libxkbfile-devel
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),F=e("h6",{id:"fedora-21-centos-rhel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fedora-21-centos-rhel","aria-hidden":"true"},"#"),n(" Fedora 21 / CentOS / RHEL")],-1),B=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo yum install -y make gcc gcc-c++ glibc-devel git-core libsecret-devel rpmdevtools
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),G=e("h6",{id:"arch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#arch","aria-hidden":"true"},"#"),n(" Arch")],-1),q=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`sudo pacman -S --needed gconf base-devel git nodejs npm libsecret python libx11 libxkbfile
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),z=e("h6",{id:"slackware",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#slackware","aria-hidden":"true"},"#"),n(" Slackware")],-1),H=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sbopkg -k -i node -i atom
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),K=e("h6",{id:"opensuse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opensuse","aria-hidden":"true"},"#"),n(" openSUSE")],-1),Y=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo zypper install nodejs nodejs-devel make gcc gcc-c++ glibc-devel git-core libsecret-devel rpmdevtools libX11-devel libxkbfile-devel
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),X=e("h5",{id:"requirements-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements-1","aria-hidden":"true"},"#"),n(" Requirements")],-1),J=e("li",null,"macOS 10.9 or later",-1),Q={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},Z=e("li",null,[n("npm 6.12 or later (run "),e("code",null,"npm install -g npm"),n(")")],-1),ee=e("li",null,"Python v2.6.x, v2.7.x or v3.5+",-1),ne={href:"https://developer.apple.com/xcode/downloads/",target:"_blank",rel:"noopener noreferrer"},oe=e("code",null,"xcode-select --install",-1),te=e("li",null,[e("p",null,"Node.js 10.12 or later (the architecture of node available to the build system will determine whether you build 32-bit or 64-bit Atom)")],-1),le=e("li",null,[e("p",null,[n("npm 6.12 or later (run "),e("code",null,"npm install -g npm"),n(")")])],-1),ie=e("p",null,"Python v2.6.x, v2.7.x, or v3.5+",-1),ae={href:"https://www.microsoft.com/en-us/search/shop/apps?q=python+software+foundation&devicetype=pc&category=Developer+tools%5cDevelopment+kits&Price=0&MaturityRating=ESRB%3aE",target:"_blank",rel:"noopener noreferrer"},se=e("li",null,[n("Download Python from https://www.python.org/downloads/. "),e("ul",null,[e("li",null,'For Python 2, be sure to install in the default location, or check "Add Python 2.x to PATH" before installing.'),e("li",null,[n('For Python 3, check "Add Python 3.x to PATH", or change the install path to '),e("code",null,"[Your_Drive_Letter]:\\Python37"),n(" e.g. "),e("code",null,"C:\\Python37"),n(", (even if your version of Python 3 isn't 3.7, that's one place where the scripts will look.)")]),e("li",null,[n("If python isn't found by the bootstrap script, create a symbolic link to the directory containing "),e("code",null,"python.exe"),n(" using e.g.: "),e("code",null,"mklink /d %SystemDrive%\\Python27 D:\\elsewhere\\Python27"),n("(Links should be set at either "),e("code",null,"%SystemDrive%\\Python27"),n(" or "),e("code",null,"%SystemDrive%\\Python37"),n(", regardless of what version of Python you actually have.)")])])],-1),re=e("p",null,"C++ build tools:",-1),de=e("strong",null,"Option 1:",-1),ce={href:"https://www.npmjs.com/package/windows-build-tools",target:"_blank",rel:"noopener noreferrer"},ue=e("code",null,"npm install --global windows-build-tools@4",-1),he=e("strong",null,"Option 2:",-1),me={href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",target:"_blank",rel:"noopener noreferrer"},pe=e("strong",null,"Option 3:",-1),be={href:"https://www.visualstudio.com/downloads/",target:"_blank",rel:"noopener noreferrer"},ge=e("p",null,"Also ensure that:",-1),_e=e("ul",null,[e("li",null,"The default installation folder is chosen so the build tools can find it"),e("li",null,"If using Visual Studio make sure Visual C++ support is selected/installed"),e("li",null,"If using Visual C++ Build Tools make sure a Windows SDK (Windows 8 SDK or Windows 10 SDK) is selected/installed"),e("li",null,[n("A "),e("code",null,"git"),n(" command is in your path")]),e("li",null,[n("Set the "),e("code",null,"GYP_MSVS_VERSION"),n(" environment variable to the Visual Studio/Build Tools version ("),e("code",null,"2015"),n(" or "),e("code",null,"2017"),n(".) e.g. "),e("code",null,'[Environment]::SetEnvironmentVariable("GYP_MSVS_VERSION", "2015", "User")'),n(" in PowerShell (or set it in Windows advanced system settings).")])],-1),ve=e("h5",{id:"instructions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#instructions","aria-hidden":"true"},"#"),n(" Instructions")],-1),fe=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ script/build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ye=e("p",null,[n("To also install the newly built application, use the "),e("code",null,"--create-debian-package"),n(" or "),e("code",null,"--create-rpm-package"),n(" option and then install the generated package via the system package manager.")],-1),we=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ script/build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),xe=e("p",null,[n("To also install the newly built application, use "),e("code",null,"script/build --install"),n(".")],-1),ke=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ script\\build
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Ae=e("p",null,[n("To also install the newly built application, use "),e("code",null,"script\\build --create-windows-installer"),n(" and launch one of the generated installers.")],-1),Se=e("h5",{id:"script-build-options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#script-build-options","aria-hidden":"true"},"#"),n(),e("code",null,"script/build"),n(" Options")],-1),Te=e("ul",null,[e("li",null,[e("code",null,"--compress-artifacts"),n(": zips the generated application as "),e("code",null,"out/atom-{arch}.tar.gz"),n(".")]),e("li",null,[e("code",null,"--create-debian-package"),n(": creates a .deb package as "),e("code",null,"out/atom-{arch}.deb")]),e("li",null,[e("code",null,"--create-rpm-package"),n(": creates a .rpm package as "),e("code",null,"out/atom-{arch}.rpm")]),e("li",null,[e("code",null,"--install[=dir]"),n(": installs the application in "),e("code",null,"${dir}"),n("; "),e("code",null,"${dir}"),n(" defaults to "),e("code",null,"/usr/local"),n(".")])],-1),Pe=e("ul",null,[e("li",null,[e("code",null,"--code-sign"),n(": signs the application with the GitHub certificate specified in "),e("code",null,"$ATOM_MAC_CODE_SIGNING_CERT_DOWNLOAD_URL"),n(".")]),e("li",null,[e("code",null,"--compress-artifacts"),n(": zips the generated application as "),e("code",null,"out/atom-mac.zip"),n(".")]),e("li",null,[e("code",null,"--install[=dir]"),n(": installs the application at "),e("code",null,"${dir}/Atom.app"),n(" for dev and stable versions or at "),e("code",null,"${dir}/Atom-Beta.app"),n(" for beta versions; "),e("code",null,"${dir}"),n(" defaults to "),e("code",null,"/Applications"),n(".")])],-1),Ee=e("ul",null,[e("li",null,[e("code",null,"--code-sign"),n(": signs the application with the GitHub certificate specified in "),e("code",null,"$WIN_P12KEY_URL"),n(".")]),e("li",null,[e("code",null,"--compress-artifacts"),n(": zips the generated application as "),e("code",null,"out\\atom-windows.zip"),n(".")]),e("li",null,[e("code",null,"--create-windows-installer"),n(": creates an "),e("code",null,".exe"),n(" and two "),e("code",null,".nupkg"),n(" packages in the "),e("code",null,"out"),n(" directory.")]),e("li",null,[e("code",null,"--install[=dir]"),n(": installs the application in "),e("code",null,"${dir}\\Atom\\app-dev"),n("; "),e("code",null,"${dir}"),n(" defaults to "),e("code",null,"%LOCALAPPDATA%"),n(".")])],-1),Ie=e("h5",{id:"troubleshooting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),n(" Troubleshooting")],-1),Ce=e("h6",{id:"typeerror-unable-to-watch-path",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#typeerror-unable-to-watch-path","aria-hidden":"true"},"#"),n(" TypeError: Unable to watch path")],-1),$e=e("p",null,"If you get following error with a big traceback right after Atom starts:",-1),De=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`TypeError: Unable to watch path
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Oe=e("p",null,"you have to increase number of watched files by inotify. For testing if this is the reason for this error you can execute:",-1),Re=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo sysctl fs.inotify.max_user_watches=32768
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Me=e("p",null,"then restart Atom. If Atom now works fine, you can make this setting permanent:",-1),Ve=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),je={href:"https://github.com/atom/atom/issues/2082",target:"_blank",rel:"noopener noreferrer"},Ne=e("h6",{id:"usr-bin-env-node-no-such-file-or-directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usr-bin-env-node-no-such-file-or-directory","aria-hidden":"true"},"#"),n(" /usr/bin/env: node: No such file or directory")],-1),Le=e("p",null,[n("If you get this notice when attempting to run any script, you either do not have Node.js installed, or node isn't identified as Node.js on your machine. If it's the latter, this might be caused by installing Node.js via the distro package manager and not nvm, so entering "),e("code",null,"sudo ln -s /usr/bin/nodejs /usr/bin/node"),n(" into your terminal may fix the issue. On some variants (mostly Debian based distros) you can use "),e("code",null,"update-alternatives"),n(" too:")],-1),We=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo update-alternatives --install /usr/bin/node node /usr/bin/nodejs 1 --slave /usr/bin/js js /usr/bin/nodejs
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Ue=e("h6",{id:"attributeerror-module-object-has-no-attribute-script-main",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attributeerror-module-object-has-no-attribute-script-main","aria-hidden":"true"},"#"),n(" AttributeError: 'module' object has no attribute 'script_main'")],-1),Fe=e("p",null,"If you get following error with a big traceback while building Atom:",-1),Be=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`sys.exit(gyp.script_main()) AttributeError: 'module' object has no attribute 'script_main' gyp ERR!
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Ge=e("p",null,"you need to uninstall the system version of gyp.",-1),qe=e("p",null,"On Fedora you would do the following:",-1),ze=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo yum remove gyp
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),He=e("h6",{id:"linux-build-error-reports",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-build-error-reports","aria-hidden":"true"},"#"),n(" Linux build error reports")],-1),Ke={href:"https://github.com/atom/atom/search?q=label%3Abuild-error+label%3Alinux&type=Issues",target:"_blank",rel:"noopener noreferrer"},Ye={href:"https://github.com/atom/atom/search?q=label%3Abuild-error+label%3Amac&type=Issues",target:"_blank",rel:"noopener noreferrer"},Xe=e("h6",{id:"common-errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#common-errors","aria-hidden":"true"},"#"),n(" Common Errors")],-1),Je=e("li",null,[e("p",null,[e("code",null,"node is not recognized")]),e("ul",null,[e("li",null,[n("If you just installed Node.js, you'll need to restart Command Prompt before the "),e("code",null,"node"),n(" command is available on your path.")])])],-1),Qe=e("li",null,[e("p",null,[e("code",null,"msbuild.exe failed with exit code: 1")]),e("ul",null,[e("li",null,[n("If using "),e("strong",null,"Visual Studio"),n(", ensure you have the "),e("strong",null,"Visual C++"),n(" component installed. Go into Add/Remove Programs, select Visual Studio, press Modify, and then check the Visual C++ box.")]),e("li",null,[n("If using "),e("strong",null,"Visual C++ Build Tools"),n(", ensure you have the "),e("strong",null,"Windows 8 SDK"),n(" or "),e("strong",null,"Windows 10 SDK"),n(' component installed. Go into Add/Remove Programs, select Visual C++ Build Tools, press Modify and then check the "Windows 8 SDK" or "Windows 10 SDK" box.')])])],-1),Ze=e("p",null,[e("code",null,"script\\build"),n(" stops with no error or warning shortly after displaying the versions of node, npm and Python")],-1),en=e("li",null,[n("Make sure that the path where you have checked out Atom does not include a space. For example, use "),e("code",null,"C:\\atom"),n(" instead of "),e("code",null,"C:\\my stuff\\atom"),n(".")],-1),nn=e("code",null,"C:\\atom",-1),on={href:"https://github.com/atom/atom/issues/2200",target:"_blank",rel:"noopener noreferrer"},tn=e("p",null,[e("code",null,"error MSB4025: The project file could not be loaded. Invalid character in the given encoding.")],-1),ln=e("code",null,"%USERPROFILE%",-1),an={href:"https://bugs.chromium.org/p/gyp/issues/list",target:"_blank",rel:"noopener noreferrer"},sn=e("ul",null,[e("li",null,"https://github.com/TooTallNate/node-gyp/issues/297"),e("li",null,"https://bugs.chromium.org/p/gyp/issues/detail?id=393")],-1),rn=e("li",null,[e("p",null,[e("code",null,"'node_modules\\.bin\\npm' is not recognized as an internal or external command, operable program or batch file.")]),e("ul",null,[e("li",null,[n("This occurs if the previous build left things in a bad state. Run "),e("code",null,"script\\clean"),n(" and then "),e("code",null,"script\\build"),n(" again.")])])],-1),dn=e("li",null,[e("p",null,[e("code",null,"script\\build"),n(" stops at installing runas with "),e("code",null,"Failed at the runas@x.y.z install script.")]),e("ul",null,[e("li",null,"See the next item.")])],-1),cn=e("li",null,[e("p",null,[e("code",null,"error MSB8020: The build tools for Visual Studio 201? (Platform Toolset = 'v1?0') cannot be found.")]),e("ul",null,[e("li",null,[n("Try setting the "),e("code",null,"GYP_MSVS_VERSION"),n(" environment variable to "),e("strong",null,"2015"),n(" or "),e("strong",null,"2017"),n(" depending on what version of Visual Studio/Build Tools is installed and then "),e("code",null,"script\\clean"),n(" followed by "),e("code",null,"script\\build"),n(" (re-open the Command Prompt if you set the variable using the GUI).")])])],-1),un=e("li",null,[e("p",null,[e("code",null,"'node-gyp' is not recognized as an internal or external command, operable program or batch file.")]),e("ul",null,[e("li",null,[n("Try running "),e("code",null,"npm install -g node-gyp"),n(", and run "),e("code",null,"script\\build"),n(" again.")])])],-1),hn=e("li",null,[e("p",null,[n("Other "),e("code",null,"node-gyp"),n(" errors on first build attempt, even though the right Node.js and Python versions are installed.")]),e("ul",null,[e("li",null,"Do try the build command one more time as experience shows it often works on second try in many cases.")])],-1),mn=e("h6",{id:"windows-build-error-reports",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-build-error-reports","aria-hidden":"true"},"#"),n(" Windows build error reports")],-1),pn={href:"https://github.com/atom/atom/search?q=label%3Abuild-error+label%3Awindows&type=Issues",target:"_blank",rel:"noopener noreferrer"},bn=e("li",null,"If it hasn't, please open a new issue with your Windows version, architecture (x86 or x64), and a text dump of your build output, including the Node.js and Python versions.",-1);function gn(_n,vn){const t=c("ExternalLinkIcon"),r=c("Tabs");return h(),m("div",null,[b,g,_,e("p",null,[n("Follow the "),e("a",v,[n("GitHub Help instructions on how to fork a repo"),o(t)]),n(".")]),f,o(r,{id:"22",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"hacking-atom"},{tab0:l(({title:i,value:a,isActive:s})=>[y]),tab1:l(({title:i,value:a,isActive:s})=>[w]),tab2:l(({title:i,value:a,isActive:s})=>[x]),_:1}),k,e("ol",null,[A,e("li",null,[n("Packages that contain stylesheets, such as syntax themes, will have those stylesheets automatically reloaded by the "),e("a",S,[n("dev-live-reload"),o(t)]),n(" package. This does not live reload JavaScript or CoffeeScript files \u2014 you'll need to reload the window ("),T,n(") to see changes to those.")])]),P,o(r,{id:"78",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"hacking-atom"},{tab0:l(({title:i,value:a,isActive:s})=>[E,I,e("ul",null,[C,$,D,e("li",null,[n("Node.js 10.12 or later (we recommend installing it via "),e("a",O,[n("nvm"),o(t)]),n(")")]),R,M,e("li",null,[n("Development headers for "),e("a",V,[n("libsecret"),o(t)]),n(".")])]),j,N,L,W,U,F,B,G,q,z,H,K,Y]),tab1:l(({title:i,value:a,isActive:s})=>[X,e("ul",null,[J,e("li",null,[n("Node.js 10.12 or later (we recommend installing it via "),e("a",Q,[n("nvm"),o(t)]),n(")")]),Z,ee,e("li",null,[n("Command Line Tools for "),e("a",ne,[n("Xcode"),o(t)]),n(" (run "),oe,n(" to install)")])])]),tab2:l(({title:i,value:a,isActive:s})=>[e("ul",null,[te,le,e("li",null,[ie,e("ul",null,[e("li",null,[e("a",ae,[n("Get Python from the Microsoft Store"),o(t)]),n(", or")]),se])]),e("li",null,[re,e("ul",null,[e("li",null,[de,n(),e("a",ce,[n("windows-build-tools"),o(t)]),n(' - From an elevated Powershell window (right click and "run as Administrator") do: '),ue,n(" to install")]),e("li",null,[he,n(),e("a",me,[n("Visual C++ Build Tools 2015 or 2017"),o(t)])]),e("li",null,[pe,n(),e("a",be,[n("Visual Studio 2015 or 2017"),o(t)]),n(" (Community Edition or better)")])]),ge,_e])])]),_:1}),ve,o(r,{id:"300",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"hacking-atom"},{tab0:l(({title:i,value:a,isActive:s})=>[fe,ye]),tab1:l(({title:i,value:a,isActive:s})=>[we,xe]),tab2:l(({title:i,value:a,isActive:s})=>[ke,Ae]),_:1}),Se,o(r,{id:"323",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"hacking-atom"},{tab0:l(({title:i,value:a,isActive:s})=>[Te]),tab1:l(({title:i,value:a,isActive:s})=>[Pe]),tab2:l(({title:i,value:a,isActive:s})=>[Ee]),_:1}),Ie,o(r,{id:"395",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"hacking-atom"},{tab0:l(({title:i,value:a,isActive:s})=>[Ce,$e,De,Oe,Re,Me,Ve,e("p",null,[n("See also "),e("a",je,[n("#2082"),o(t)]),n(".")]),Ne,Le,We,Ue,Fe,Be,Ge,qe,ze,He,e("p",null,[n("Use "),e("a",Ke,[n("this search"),o(t)]),n(" to get a list of reports about build errors on Linux.")])]),tab1:l(({title:i,value:a,isActive:s})=>[e("p",null,[n("Use "),e("a",Ye,[n("this search"),o(t)]),n(" to get a list of reports about build errors on macOS.")])]),tab2:l(({title:i,value:a,isActive:s})=>[Xe,e("ul",null,[Je,Qe,e("li",null,[Ze,e("ul",null,[en,e("li",null,[n("Try moving the repository to "),nn,n(". Most likely, the path is too long. See "),e("a",on,[n("issue #2200"),o(t)]),n(".")])])]),e("li",null,[tn,e("ul",null,[e("li",null,[n("This can occur because your home directory ("),ln,n(") has non-ASCII characters in it. This is a bug in "),e("a",an,[n("gyp"),o(t)]),n(" which is used to build native Node.js modules and there is no known workaround. "),sn])])]),rn,dn,cn,un,hn]),mn,e("ul",null,[e("li",null,[n("If all else fails, use "),e("a",pn,[n("this search"),o(t)]),n(" to get a list of reports about build errors on Windows, and see if yours has already been reported.")]),bn])]),_:1})])}const yn=u(p,[["render",gn],["__file","hacking-on-atom-core.html.vue"]]);export{yn as default};
