// var btn = document.querySelector('down_button')

Shiny.addCustomMessageHandler("down_tree_png", function(message){

//     var svg_tree = document.querySelector('svg')

// let triggerDownload = (imgURI, fileName) => {
//     let a = document.createElement('a')

//     a.setAttribute('download', 'image.svg')
//     a.setAttribute('href', imgURI)
//     a.setAttribute('target', '_blank')

//     a.click()
// }

// let save = () => {
//     let data = (new XMLSerializer()).serializeToString(svg_tree)
//     let svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'})
//     let url = URL.createObjectURL(svgBlob)

//     triggerDownload(url)
// }


// save()

var width = 1000, height = 1000;


// Below are the functions that handle actual exporting:
// getSVGString ( svgNode ) and svgString2Image( svgString, width, height, format, callback )
function getSVGString( svgNode ) {
	svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
	var cssStyleText = getCSSStyles( svgNode );
	appendCSS( cssStyleText, svgNode );

	var serializer = new XMLSerializer();
	var svgString = serializer.serializeToString(svgNode);
	svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
	svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix

	return svgString;

	function getCSSStyles( parentElement ) {
		var selectorTextArr = [];

		// Add Parent element Id and Classes to the list
		selectorTextArr.push( '#'+parentElement.id );
		for (var c = 0; c < parentElement.classList.length; c++)
				if ( !contains('.'+parentElement.classList[c], selectorTextArr) )
					selectorTextArr.push( '.'+parentElement.classList[c] );

		// Add Children element Ids and Classes to the list
		var nodes = parentElement.getElementsByTagName("*");
		for (var i = 0; i < nodes.length; i++) {
			var id = nodes[i].id;
			if ( !contains('#'+id, selectorTextArr) )
				selectorTextArr.push( '#'+id );

			var classes = nodes[i].classList;
			for (var c = 0; c < classes.length; c++)
				if ( !contains('.'+classes[c], selectorTextArr) )
					selectorTextArr.push( '.'+classes[c] );
		}

		// Extract CSS Rules
		var extractedCSSText = "";
		for (var i = 0; i < document.styleSheets.length; i++) {
			var s = document.styleSheets[i];
			
			try {
			    if(!s.cssRules) continue;
			} catch( e ) {
		    		if(e.name !== 'SecurityError') throw e; // for Firefox
		    		continue;
		    	}

			var cssRules = s.cssRules;
			for (var r = 0; r < cssRules.length; r++) {
				if ( contains( cssRules[r].selectorText, selectorTextArr ) )
					extractedCSSText += cssRules[r].cssText;
			}
		}
		

		return extractedCSSText;

		function contains(str,arr) {
			return arr.indexOf( str ) === -1 ? false : true;
		}

	}

	function appendCSS( cssText, element ) {
		var styleElement = document.createElement("style");
		styleElement.setAttribute("type","text/css"); 
		styleElement.innerHTML = cssText;
		var refNode = element.hasChildNodes() ? element.children[0] : null;
		element.insertBefore( styleElement, refNode );
	}
}


function svgString2Image( svgString, width, height, format, callback ) {
	var format = format ? format : 'png';

	var imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL

	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");

	canvas.width = width;
	canvas.height = height;

	var image = new Image();
	image.onload = function() {
		context.clearRect ( 0, 0, width, height );
		context.drawImage(image, 0, 0, width, height);

		canvas.toBlob( function(blob) {
			var filesize = Math.round( blob.length/1024 ) + ' KB';
			if ( callback ) callback( blob, filesize );
		});

		
	};

	image.src = imgsrc;
}

    var svg = document.querySelector('svg')
var svgString = getSVGString(svg);
svgString2Image( svgString, 2*width, 2*height, 'png', save ); // passes Blob and filesize String to the callback

function save( dataBlob, filesize ){
    saveAs( dataBlob, 'D3 vis exported to PNG.png' ); // FileSaver.js function
}
    
})

// svg
Shiny.addCustomMessageHandler("down_tree_svg", function(message){

        var svg_tree = document.querySelector('svg')
    
    let triggerDownload = (imgURI, fileName) => {
        let a = document.createElement('a')
    
        a.setAttribute('download', 'image.svg')
        a.setAttribute('href', imgURI)
        a.setAttribute('target', '_blank')
    
        a.click()
    }
    
    let save = () => {
        let data = (new XMLSerializer()).serializeToString(svg_tree)
        let svgBlob = new Blob([data], {type: 'image/svg+xml;charset=utf-8'})
        let url = URL.createObjectURL(svgBlob)
    
        triggerDownload(url)
    }
    
    
    save()
    
    
        
    })
    
