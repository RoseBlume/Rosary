<!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P8S9M8D');
<!-- End Google Tag Manager -->

function up() {
nome=window.location.href;
punto=nome.lastIndexOf(".");
suffisso=nome.substring(punto-2, punto);
if (suffisso=="it"||suffisso=="fr"||suffisso=="sp"||suffisso=="ge"||suffisso=="po") {
	
	window.location="../index_"+suffisso+".htm"
	}
	else
	{		
	window.location="../index.htm"
	}

}
