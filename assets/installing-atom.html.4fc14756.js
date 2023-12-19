import{_ as u,a as h,b as p}from"./windows-downloads.e1abb7d5.js";import{_ as b}from"./windows-system-settings.f56fd6a5.js";import{_ as g,o as _,c as f,d as n,w as a,a as e,b as t,f as c,r}from"./app.67aa3f8b.js";const y={},v=e("h3",{id:"installing-atom",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-atom","aria-hidden":"true"},"#"),t(" Installing Atom")],-1),w=e("p",null,"To get started with Atom, we'll need to get it on your system. This section will go over installing Atom on your system, as well as the basics of how to build it from source.",-1),A=e("p",null,"Installing Atom should be fairly simple. Generally, you can go to https://atom.io and you should see a download button as shown here:",-1),x=e("p",null,[e("img",{src:u,alt:"Download buttons on https://atom.io",title:"Download buttons on https://atom.io"})],-1),k=e("p",null,[e("img",{src:h,alt:"Download buttons on https://atom.io",title:"Download buttons on https://atom.io"})],-1),S=e("p",null,[e("img",{src:p,alt:"Download buttons on https://atom.io",title:"Download buttons on https://atom.io"})],-1),T=e("p",null,"The button or buttons should be specific to your platform and the download package should be easily installable. However, let's go over them here in a bit of detail.",-1),$=e("h4",{id:"installing-atom-on-linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-atom-on-linux","aria-hidden":"true"},"#"),t(" Installing Atom on Linux")],-1),I=e("p",null,"You can install Atom on Linux using your distribution's package manager by configuring it to use one of our official package repositories. This will also enable you to update Atom when new releases are published.",-1),E=e("h5",{id:"debian-and-ubuntu-deb-apt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debian-and-ubuntu-deb-apt","aria-hidden":"true"},"#"),t(" Debian and Ubuntu (deb/apt)")],-1),U=e("p",null,"To install Atom on Debian, Ubuntu, or related distributions, add our official package repository to your system by running the following commands:",-1),C=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ wget -qO - https://packagecloud.io/AtomEditor/atom/gpgkey | sudo apt-
key add -
$ sudo sh -c 'echo "deb [arch=amd64] https://packagecloud.io/AtomEditor/atom/any/ any main" > /etc/apt/sources.list.d/atom.list'
$ sudo apt-get update
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("p",null,[t("You can now install Atom using "),e("code",null,"apt-get"),t(" (or "),e("code",null,"apt"),t(" on Ubuntu):")],-1),D=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`# Install Atom
$ sudo apt-get install atom

# Install Atom Beta
$ sudo apt-get install atom-beta
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),M={href:"https://atom.io/download/deb",target:"_blank",rel:"noopener noreferrer"},O=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`# Install Atom
$ sudo apt install ./atom-amd64.deb
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Y=e("h5",{id:"red-hat-and-centos-yum-or-fedora-dnf",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#red-hat-and-centos-yum-or-fedora-dnf","aria-hidden":"true"},"#"),t(" Red Hat and CentOS (YUM), or Fedora (DNF)")],-1),z=e("p",null,"To install Atom on CentOS, Oracle Linux, Red Hat Enterprise Linux, Scientific Linux, Fedora, or related distributions that use the YUM or DNF package managers, add our official package repository to your system by running the following commands:",-1),W=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo rpm --import https://packagecloud.io/AtomEditor/atom/gpgkey
$ sudo sh -c 'echo -e "[Atom]\\nname=Atom Editor\\nbaseurl=
https://packagecloud.io/AtomEditor/atom/el/7/
\\$basearch\\nenabled=1\\ngpgcheck=0\\nrepo_gpgcheck=1\\ngpgkey=
https://packagecloud.io/AtomEditor/atom/gpgkey" > /etc/yum.repos.d/
atom.repo'
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),P=e("p",null,[t("You can now install Atom using "),e("code",null,"dnf"),t(" (or "),e("code",null,"yum"),t(" depending on your distribution):")],-1),B=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`# Install Atom
$ sudo dnf install atom

# Install Atom Beta
$ sudo dnf install atom-beta
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),F={href:"https://atom.io/download/rpm",target:"_blank",rel:"noopener noreferrer"},H=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`# On YUM-based distributions
$ sudo yum install -y atom.x86_64.rpm

# On DNF-based distributions
$ sudo dnf install -y atom.x86_64.rpm
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("h5",{id:"suse-zypp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#suse-zypp","aria-hidden":"true"},"#"),t(" SUSE (zypp)")],-1),R=e("p",null,"To install Atom on openSUSE or other distributions that use the Zypp package manager, add our official package repository to your system by running the following commands:",-1),V=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo sh -c 'echo -e "[Atom]\\nname=Atom Editor\\nbaseurl=
https://packagecloud.io/AtomEditor/atom/el/7/\\$basearch\\nenabled=1\\ntype=rpm-
md\\ngpgcheck=0\\nrepo_gpgcheck=1\\
ngpgkey=https://packagecloud.io/AtomEditor/atom/gpgkey" >
/etc/zypp/repos.d/atom.repo'
$ sudo zypper --gpg-auto-import-keys refresh
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("p",null,[t("You can now install Atom using "),e("code",null,"zypper"),t(":")],-1),q=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`# Install Atom
$ sudo zypper install atom

# Install Atom Beta
$ sudo zypper install atom-beta
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G={href:"https://atom.io/download/rpm",target:"_blank",rel:"noopener noreferrer"},X=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ sudo zypper in -y atom.x86_64.rpm
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Z=e("h4",{id:"installing-atom-on-mac",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-atom-on-mac","aria-hidden":"true"},"#"),t(" Installing Atom on Mac")],-1),J={href:"https://github.com/atom/atom/releases/latest",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"atom-mac.zip",-1),Q=e("code",null,"Atom",-1),ee=e("p",null,[t("When you first open Atom, it will try to install the "),e("code",null,"atom"),t(" and "),e("code",null,"apm"),t(" commands for use in the terminal. In some cases, Atom might not be able to install these commands because it needs an administrator password. To check if Atom was able to install the "),e("code",null,"atom"),t(" command, for example, open a terminal window and type "),e("code",null,"which atom"),t(". If the "),e("code",null,"atom"),t(" command has been installed, you'll see something like this:")],-1),te=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ which atom
> /usr/local/bin/atom
$
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ne=e("p",null,[t("If the "),e("code",null,"atom"),t(" command wasn't installed, the "),e("code",null,"which"),t(" command won't return anything:")],-1),ae=e("div",{class:"language-command-line ext-command-line line-numbers-mode"},[e("pre",{class:"language-command-line"},[e("code",null,`$ which atom
$
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),oe=e("p",null,[t("To install the "),e("code",null,"atom"),t(" and "),e("code",null,"apm"),t(' commands, run "Window: Install Shell Commands" from the '),e("a",{href:"/getting-started/sections/atom-basics#command-palette"},"Command Palette"),t(", which will prompt you for an administrator password.")],-1),ie=e("h4",{id:"installing-atom-on-windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-atom-on-windows","aria-hidden":"true"},"#"),t(" Installing Atom on Windows")],-1),le={href:"https://github.com/atom/atom/releases/latest",target:"_blank",rel:"noopener noreferrer"},se=e("code",null,"AtomSetup.exe",-1),de=e("code",null,"AtomSetup-x64.exe",-1),re=e("code",null,"atom",-1),ce=e("code",null,"apm",-1),me=e("code",null,"PATH",-1),ue=e("p",null,[e("img",{src:b,alt:"Atom on Windows"})],-1),he=e("p",null,[t("The context menu "),e("code",null,"Open with Atom"),t(" in File Explorer, and the option to make Atom available for file association using "),e("code",null,"Open with..."),t(", is controlled by the System Settings panel as seen above.")],-1),pe=e("p",null,[t("With Atom open, click on "),e("code",null,"File > Settings"),t(", and then the "),e("code",null,"System"),t(" tab on the left. Check the boxes next to "),e("code",null,"Show in file context menus"),t(", as well as "),e("code",null,"Show in folder context menus"),t(". And you\u2019re all set.")],-1),be=e("h4",{id:"updating-atom",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#updating-atom","aria-hidden":"true"},"#"),t(" Updating Atom")],-1),ge=e("p",null,"You should consider updating Atom periodically for the latest improvements to the software. Additionally, When Atom receives hotfixes for security vulnerabilities you will want to update your version of Atom as soon as possible.",-1),_e=e("code",null,".rpm",-1),fe=e("code",null,".deb",-1),ye={href:"https://flight-manual.atom.io/getting-started/sections/installing-atom/#installing-atom-on-linux",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://flight-manual.atom.io/getting-started/sections/atom-basics/#settings-and-preferences",target:"_blank",rel:"noopener noreferrer"},we=e("p",null,"To perform a manual update:",-1),Ae=e("li",null,[t("Click on the "),e("code",null,"Atom > Check for Update"),t(" menu item in the menu bar.")],-1),xe=e("code",null,"Application: About",-1),ke={href:"https://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette",target:"_blank",rel:"noopener noreferrer"},Se=e("code",null,"Check now",-1),Te=e("p",null,"Atom will begin to update if an update is available.",-1),$e={href:"https://flight-manual.atom.io/getting-started/sections/atom-basics/#settings-and-preferences",target:"_blank",rel:"noopener noreferrer"},Ie=e("p",null,"To perform a manual update:",-1),Ee=e("li",null,[t("Click on the "),e("code",null,"Help > Check for Update"),t(" menu item in the menu bar.")],-1),Ue=e("code",null,"Application: About",-1),Ce={href:"https://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette",target:"_blank",rel:"noopener noreferrer"},Le=e("code",null,"Check now",-1),De=e("p",null,"Atom will begin to update if an update is available.",-1),Me=e("h4",{id:"portable-mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#portable-mode","aria-hidden":"true"},"#"),t(" Portable Mode")],-1),Oe=e("p",null,[t("Atom stores configuration and state in a "),e("code",null,".atom"),t(" directory usually located in your home directory "),e("span",{class:"platform-windows"},[t("("),e("code",null,"%userprofile%"),t(" on Windows)")]),t(". You can however run Atom in portable mode where both the app and the configuration are stored together such as on a removable storage device.")],-1),Ye={href:"https://github.com/atom/atom/releases/latest",target:"_blank",rel:"noopener noreferrer"},ze=e("p",null,[t("Then create a "),e("code",null,".atom"),t(" directory alongside the directory that contains the Atom binary, for example:")],-1),We=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`/media/myusb/atom-1.14/atom
/media/myusb/.atom
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Pe=e("p",null,[t("Then create a "),e("code",null,".atom"),t(" directory alongside the Atom.app application, for example:")],-1),Be=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`/MyUSB/Atom.app
/MyUSB/.atom
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Fe=e("p",null,[t("Then create a "),e("code",null,".atom"),t(" directory alongside the directory that contains atom.exe, for example:")],-1),He=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`e:\\atom-1.14\\atom.exe
e:\\.atom
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Ne=c('<h5 id="portable-notes" tabindex="-1"><a class="header-anchor" href="#portable-notes" aria-hidden="true">#</a> Portable Notes</h5><ul><li>The <code>.atom</code> directory must be writeable</li><li>You can move an existing <code>.atom</code> directory to your portable device</li><li>Atom can also store its Electron user data in your <code>.atom</code> directory - just create a subdirectory called <code>electronUserData</code> inside <code>.atom</code></li><li>Alternatively you can set the <code>ATOM_HOME</code> environment variable to point wherever you want (you can write a .sh or .cmd script to temporarily set it and launch it from that)</li><li>Portable mode installations will not automatically update</li></ul><h4 id="building-atom-from-source" tabindex="-1"><a class="header-anchor" href="#building-atom-from-source" aria-hidden="true">#</a> Building Atom from Source</h4>',3),Re=c(`<h4 id="proxy-and-firewall-settings" tabindex="-1"><a class="header-anchor" href="#proxy-and-firewall-settings" aria-hidden="true">#</a> Proxy and Firewall Settings</h4><h5 id="behind-a-firewall" tabindex="-1"><a class="header-anchor" href="#behind-a-firewall" aria-hidden="true">#</a> Behind a Firewall?</h5><p>If you are behind a firewall and seeing SSL errors when installing packages you can disable strict SSL by running:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm config set strict-ssl false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="using-a-proxy" tabindex="-1"><a class="header-anchor" href="#using-a-proxy" aria-hidden="true">#</a> Using a Proxy?</h5><p>If you are using a HTTP(S) proxy you can configure <code>apm</code> to use it by running:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm config set https-proxy &lt;em&gt;YOUR_PROXY_ADDRESS&lt;/em&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can run <code>apm config get https-proxy</code> to verify it has been set correctly.</p>`,8);function Ve(je,qe){const d=r("Tabs"),o=r("ExternalLinkIcon"),m=r("RouterLink");return _(),f("div",null,[v,w,A,n(d,{id:"9",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"installing-atom"},{tab0:a(({title:i,value:l,isActive:s})=>[x]),tab1:a(({title:i,value:l,isActive:s})=>[k]),tab2:a(({title:i,value:l,isActive:s})=>[S]),_:1}),T,n(d,{id:"29",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"installing-atom"},{tab0:a(({title:i,value:l,isActive:s})=>[$,I,E,U,C,L,D,e("p",null,[t("Alternatively, you can download the "),e("a",M,[t("Atom .deb package"),n(o)]),t(" and install it directly:")]),O,Y,z,W,P,B,e("p",null,[t("Alternatively, you can download the "),e("a",F,[t("Atom .rpm package"),n(o)]),t(" and install it directly:")]),H,N,R,V,j,q,e("p",null,[t("Alternatively, you can download the "),e("a",G,[t("Atom .rpm package"),n(o)]),t(" and install it directly:")]),X]),tab1:a(({title:i,value:l,isActive:s})=>[Z,e("p",null,[t("Atom follows the standard Mac zip installation process. You can either press the download button from the https://atom.io site or you can go to the "),e("a",J,[t("Atom releases page"),n(o)]),t(" to download the "),K,t(" file explicitly. Once you have that file, you can click on it to extract the application and then drag the new "),Q,t(' application into your "Applications" folder.')]),ee,te,ne,ae,oe]),tab2:a(({title:i,value:l,isActive:s})=>[ie,e("p",null,[t("Atom is available with Windows installers that can be downloaded from https://atom.io or from the "),e("a",le,[t("Atom releases page"),n(o)]),t(". Use "),se,t(" for 32-bit systems and "),de,t(" for 64-bit systems. This setup program will install Atom, add the "),re,t(" and "),ce,t(" commands to your "),me,t(", and create shortcuts on the desktop and in the start menu.")]),ue,he,pe]),_:1}),be,ge,n(d,{id:"126",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"installing-atom"},{tab0:a(({title:i,value:l,isActive:s})=>[e("p",null,[t("If you are using Atom's official package repositories, use your distribution's package manager to update Atom. Otherwise, you will need to manually download and install the latest "),_e,t(" or "),fe,t(" package from https://atom.io. For more details, see "),e("a",ye,[t("Installing Atom on Linux."),n(o)])])]),tab1:a(({title:i,value:l,isActive:s})=>[e("p",null,[t('"Automatically Update" is enabled by default in Core Settings of the '),e("a",ve,[t("Settings View"),n(o)]),t(", which will allow Atom to check for updates automatically. If you disable this setting you can update Atom manually.")]),we,e("ul",null,[Ae,e("li",null,[t("Search for "),xe,t(" in the "),e("a",ke,[t("Command Palette"),n(o)]),t(" and click the "),Se,t(" button.")])]),Te]),tab2:a(({title:i,value:l,isActive:s})=>[e("p",null,[t('"Automatically Update" is enabled by default in Core Settings of the '),e("a",$e,[t("Settings View"),n(o)]),t(", which will allow Atom to check for updates automatically. If you disable this setting you can update Atom manually.")]),Ie,e("ul",null,[Ee,e("li",null,[t("Search for "),Ue,t(" in the "),e("a",Ce,[t("Command Palette"),n(o)]),t(" and click the "),Le,t(" button.")])]),De]),_:1}),Me,Oe,e("p",null,[t("To setup Atom in portable mode download the "),e("a",Ye,[t("zip/tar.gz package for your system"),n(o)]),t(" and extract it to your removable storage.")]),n(d,{id:"188",data:[{title:"Linux"},{title:"Mac"},{title:"Windows"}],"tab-id":"installing-atom"},{tab0:a(({title:i,value:l,isActive:s})=>[ze,We]),tab1:a(({title:i,value:l,isActive:s})=>[Pe,Be]),tab2:a(({title:i,value:l,isActive:s})=>[Fe,He]),_:1}),Ne,e("p",null,[t("The "),n(m,{to:"/hacking-atom/sections/hacking-on-atom-core/"},{default:a(()=>[t("Hacking on Atom Core")]),_:1}),t(" section of the flight manual covers instructions on how to clone and build the source code if you prefer that option.")]),Re])}const Je=g(y,[["render",Ve],["__file","installing-atom.html.vue"]]);export{Je as default};
