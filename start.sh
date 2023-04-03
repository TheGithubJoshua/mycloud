touch prevhostname.txt
var=$(hostnamectl --static)
echo "$var" > prevhostname.txt
sudo hostnamectl set-hostname mycloud
sudo snap install nextcloud
sudo snap set nextcloud ports.http=8081 ports.https=8082
sudo snap start nextcloud
npm install
npm start