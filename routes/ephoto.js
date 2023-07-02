php 
$hieuung = array(
    "https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-tia-set-97.html",//new
    "https://ephoto360.com/hieu-ung-chu/typography-online-voi-mau-nghe-thuat-moi-343.html",
    "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-typography-online-dark-green-typo-359.html",
    "https://ephoto360.com/hieu-ung-chu/tao-typography-online-chu-de-la-mua-thu-358.html",
    "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-phao-bong-356.html",
    "https://ephoto360.com/hieu-ung-chu/tao-typography-status-online-voi-la-cay-an-tuong-357.html",
    "https://ephoto360.com/hieu-ung-chu/chu-galaxy-thien-than-206.html",
    "https://ephoto360.com/hieu-ung-chu/chu-canh-thien-than-176.html",
    "https://ephoto360.com/hieu-ung-chu/hieu-ung-cat-giay-184.html",
    "https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-mam-anh-sang-74.html",
    "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-neon-68.html",
    "https://ephoto360.com/hieu-ung-ve/viet-chu-len-coc-coffee-245.html",
    "https://ephoto360.com/tinh-yeu/bong-chu-tinh-yeu-204.html",
    "https://ephoto360.com/tinh-yeu/viet-chu-trai-tim-den-nhay-188.html",
    "https://ephoto360.com/tinh-yeu/tao-thiep-tinh-yeu-187.html",
    "https://ephoto360.com/hieu-ung-chu/tao-chu-don-xuan-thiep-tet-2018-hoa-dao-339.html",
    );
$link = $hieuung[array_rand($hieuung)];
//$link =    "https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-typography-online-dark-green-typo-359.html";
preg_match('#name="validator" value="(.+?)"#is', Get($link),$puaru);
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $link);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "text_1=".$_GET['text']."&login=Ta%CC%A3o+a%CC%89nh&validator=".$puaru[1]);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

$headers = array();
$headers[] = "Authority: ephoto360.com";
$headers[] = "Cache-Control: max-age=0";
$headers[] = "Origin: https://ephoto360.com";
$headers[] = "Upgrade-Insecure-Requests: 1";
$headers[] = "Content-Type: application/x-www-form-urlencoded";
$headers[] = "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
$headers[] = "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8";
$headers[] = "Referer: ".$link;
$headers[] = "Accept-Encoding: gzip, deflate, br";
$headers[] = "Accept-Language: vi-VN,vi;q=0.9,en;q=0.8";
$headers[] = "Cookie: _ga=GA1.2.1174690.1530027963; _gid=GA1.2.469767720.1530027963; _gat=1; PHPSESSID=74f43701231044673b46d315433c1572";
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$url =  curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);

preg_match('#thumbnail"><img src="(.+?)"#is', $url,$puaru);
//$puaruj = json_decode(file_get_contents("http://api.v4i.asia/api.php?url=https://ephoto360.com".$puaru[1]),true);
       // echo $puaruj['image']['url'];
        echo '{"taoanh":true,"link_img":"https://ephoto360.com'.$puaru[1].'","phienban":"1.0","by":"CUA","online":"'.$link.'"}';
function Get($link)
{
	$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $link);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");

curl_setopt($ch, CURLOPT_ENCODING, 'gzip, deflate');

$headers = array();
$headers[] = "Authority: ephoto360.com";
$headers[] = "Cache-Control: max-age=0";
$headers[] = "Upgrade-Insecure-Requests: 1";
$headers[] = "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
$headers[] = "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8";
$headers[] = "Accept-Encoding: gzip, deflate, br";
$headers[] = "Accept-Language: vi-VN,vi;q=0.9,en;q=0.8";
$headers[] = "Cookie: _ga=GA1.2.1174690.1530027963; _gid=GA1.2.469767720.1530027963; PHPSESSID=74f43701231044673b46d315433c1572";
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

return curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);
}
?>