FROM archlinux:base-devel-20240101.0.204074

WORKDIR /usr/app/raspirus
COPY . .

RUN pacman -Syu --noconfirm
RUN pacman -S --noconfirm --needed \
  webkit2gtk-4.1 \
  base-devel \
  curl \
  wget \
  file \
  openssl \
  appmenu-gtk-module \
  libappindicator-gtk3 \
  librsvg \
  nodejs \
  npm

RUN makepkg -f