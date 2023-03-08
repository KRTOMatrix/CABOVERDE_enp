///////////Creación variable mapa/////////// 
var map = L.map('map', {
		zoomControl: false,
		center: [16, -23.5],
		zoom: 9,
		minZoom: 9,
		maxZoom: 13,
	});




///////////Funcionalidades estructura del visor///////////
//Layers on top
map.createPane('límites');
// This pane is above markers but below popups
map.getPane('límites').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('límites').style.pointerEvents = 'none';
//Labels on top
map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 800;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
//bindTooltip on top
map.createPane('popups');
// el popup aparece al arrastar encima de todo pero debajo del popup que aparece al clicar
map.getPane('popups').style.zIndex = 1000;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups').style.pointerEvents = 'none';
//bindPopup on top
map.createPane('popups1');
// aparece por encima de todas las capas
map.getPane('popups1').style.zIndex = 1500;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups1').style.pointerEvents = 'none';
//Barra de interacción de capas	tantaas sildebar como grupos de capas
var sidebar = L.control.sidebar('sidebar', { closeButton:true, position: 'left' });
	map.addControl(sidebar);
	sidebar.hide();			
	sidebar.show();
	sidebar.toggle();
var visible = sidebar.isVisible();
var button = new L.Control.Button(L.DomUtil.get('helpbutton'), { toggleButton: 'active', position: 'topleft'});
	button.addTo(map);
	button.on('click', function () {
	 if (button.isToggled()) {
			sidebar.hide();
		} else {
			sidebar.show();
		}
	});
var sidebar2 = L.control.sidebar('sidebar2', { closeButton:true, position: 'right' });
	map.addControl(sidebar2);
	sidebar2.hide();			
	sidebar2.show();
	sidebar2.toggle();
var visible2 = sidebar.isVisible();

//Buscador
var geocoder = L.Control.geocoder({ position: 'topleft',
	//defaultmarkGeocode: false
	}).addTo(map);


///////////Diseño caracteriticas basicas del visor///////////

//Título
var title2 = L.control({position: 'topright'});
	title2.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info2');
	 div.innerHTML +=
	 'VISOR CARTOGRÁFICO<h2>Risco de erosión do solo polo cambio climático <br> nos Espazos Naturais Protexidos de Cabo Verde';
	 return div;
	};
	title2.addTo(map);

//Logo Matrix	
var title1 = L.control({position: 'bottomright'});
	title1.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info1');
	 div.innerHTML +=
	 '<a href="https://www.fundacionmatrix.es"><img src="images/composi.png"  width="321px" height="200px" ></img></a>';
	 return div;
	};
	title1.addTo(map);

//Logo CLIMACAVE
var title4 = L.control({position: 'bottomright'});
	title4.onAdd = function (map) {
var div = L.DomUtil.create('div','info4');
	 div.innerHTML +=
	 '<a><img src="images/CLIMACAVE LOGO _transparencia.png" width="135px" height="94px" ></img></a>';
	 return div;
	};
	title4.addTo(map); 



///////////Cartografía de referencia///////////
var Mapa_fondo = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>| Map data © 2023 <a href="https://www.fundacionmatrix.es"><strong>@Fundación Matrix 2023</strong></a>',
	}).addTo(map);		
var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '',

    }).addTo(map);
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: ' ',
    pane: 'labels'
    }).addTo(map);


var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	opacity: 0.5,
	attribution: ' '
	}).addTo(map);;

var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0, 
	maxZoom: 13,
	});

var osm3 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>',
	});


//Mapas en formato imagen
//MDT
 var relieve = L.imageOverlay('images/MDT_900_MOD.png',
  imageBounds = [
    [17.2036,-25.3621],
    [17.2032,-22.662],
    [14.7995,-25.3461],
    [14.7991,-22.662]

  ]).addTo(map)


relieve.setOpacity(0.5);


///////////Otras funcionalidades
//minimapa	
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position:"bottomright", width:100,height:100,}).addTo(map); 					
//zoomHome
var zoomHome = L.Control.zoomHome({ position: 'topleft', homeCoordinates:[16, -24], zoomHomeTitle:'Posición inicial'}).addTo(map);
//fullscreen						
var fsControl = new L.Control.FullScreen();
	map.addControl(fsControl);
	map.on('enterFullscreen', function(){
	if(window.console) window.console.log('enterFullscreen');
	});
	map.on('exitFullscreen', function(){
	if(window.console) window.console.log('exitFullscreen');
	});
	L.control.scale().addTo(map);

///////////Estilo de las capas especificas del visor///////////



//VARIABLES DEL SHPE
//VARIABLE1 "tipos"




//VARIABLE1 "vulnerabilidad"

function getColor11(a) {
	
return a == 1? '#ffffbf' :
	a == 2? '#ffc800':
	a == 3? '#d10000':
	a == 4? '#000000':

	
	'#B0ADAD';

};

function style11(feature) {
	return {
		fillColor: getColor11(feature.properties.expos),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};

function popup11(feature, layer) {
	if (feature.properties && feature.properties.expos) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Illa: </strong>"+feature.properties.ilha.toLocaleString()+"<br>"

			+"<strong>ENP: </strong>"+feature.properties.designacao.toLocaleString()+"<br>"

			/*	+"<strong>Concello: </strong>"+feature.properties.nom_conc.toLocaleString()+"<br>"

					+"<strong>Nome: </strong>"+feature.properties.Nombre.toLocaleString()+"<br>" */
			             
            	+"<strong>Cambio: </strong>"+feature.properties.expos_t,
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson11 = L.geoJson(TCR, {
	style: style11,
	onEachFeature: popup11
});




//VARIABLE2 "risco"

function getColor12(a) {
	
return a == 4? '#ffffbe' :
	a == 5? '#ffa77f':
	a == 6? '#e60000':
	a == 7? '#4c0073':
	a == 8? '#4c0073':


	
	'#B0ADAD';
};
function style12(feature) {
	return {
		fillColor: getColor12(feature.properties.risco),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};
function popup12(feature, layer) {
	if (feature.properties && feature.properties.risco) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Illa: </strong>"+feature.properties.ilha.toLocaleString()+"<br>"

			+"<strong>ENP: </strong>"+feature.properties.designacao.toLocaleString()+"<br>"

			/*	+"<strong>Concello: </strong>"+feature.properties.nom_conc.toLocaleString()+"<br>"

					+"<strong>Nome: </strong>"+feature.properties.Nombre.toLocaleString()+"<br>" */
			             
            	+"<strong>Risco: </strong>"+feature.properties.risco_t,
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson12 = L.geoJson(TCR, {
	style: style12,
	onEachFeature: popup12
});




//VARIABLE3 "tipo proteccion"

function getColor13(a) {
	
return a <= 1? '#d8d79e' :
	a <= 2? '#98e500':
	a <= 3? '#4c7300':
	a <= 4? '#f5f579':
	a <= 5? '#a9a800':
	
	'#B0ADAD';
};
function style13(feature) {
	return {
		fillColor: getColor13(feature.properties.cat_n),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};

function popup13(feature, layer) {
	if (feature.properties && feature.properties.cat_n) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Illa: </strong>"+feature.properties.ilha.toLocaleString()+"<br>"

			+"<strong>ENP: </strong>"+feature.properties.designacao.toLocaleString()+"<br>",

			/*	+"<strong>Tipo: </strong>"+feature.properties.categorias,

					+"<strong>Nome: </strong>"+feature.properties.Nombre.toLocaleString()+"<br>" 
			             
            	+"<strong>Tipo: </strong>"+feature.properties.categorias,*/


			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};





var geojson13 = L.geoJson(TCR, {
	style: style13,
	onEachFeature: popup13
});



//VARIABLE2 "risco"

function getColor14(a) {
	
return a == 1? '#ffffc7' :
	a == 2? '#ffff25':
	a == 3? '#ffb725':
	a == 4? '#fe2725':
	a == 5? '#682688':

	
	'#B0ADAD';
};
function style14(feature) {
	return {
		fillColor: getColor14(feature.properties.vulnerab),
		weight: 1,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};
function popup14(feature, layer) {
	if (feature.properties && feature.properties.vulnerab) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Illa: </strong>"+feature.properties.ilha.toLocaleString()+"<br>"

			+"<strong>ENP: </strong>"+feature.properties.designacao.toLocaleString()+"<br>"

			/*	+"<strong>Concello: </strong>"+feature.properties.nom_conc.toLocaleString()+"<br>"

					+"<strong>Nome: </strong>"+feature.properties.Nombre.toLocaleString()+"<br>" */
			             
            	+"<strong>Vulnerabilidade: </strong>"+feature.properties.vulner_t,
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson14 = L.geoJson(TCR, {
	style: style14,
	onEachFeature: popup14
});









var mapa14 = L.layerGroup([geojson14])
var mapa11 = L.layerGroup([geojson11])
var mapa12 = L.layerGroup([geojson12])
var mapa13 = L.layerGroup([geojson13]).addTo(map);





//BASE TREE
var baseTree = [
	{ label: "<strong>Limpar mapa", layer: osm3 },
	{
	label: '<strong>Mapas',
	children: [

		{ label: "Espazos Naturais Protexidos (ENP)", layer: mapa13 },
		{ label: "Vulnerabilidade á erosión dos ENP", layer: mapa14 },
		{ label: "Cambio na erosividade da chuvia nos ENP", layer: mapa11 },
		{ label: "Risco de erosión do solo polo cambio climático nos ENP", layer: mapa12 },
	

		
	
	]},
	
];	
	
//OVERLAY TREE	
var overlayTree = {
	label: 'Mapas de referencia',
	children: [
	
		//{ label: "<b>Límites de Comunidades Autónomas", layer: comunidades},
		{ label: "Relevo", layer: relieve},
		{ label: "OpenStreetMap", layer: osm},
		{ label: "Toponimia", layer: positronLabels},

	]
};	

//leyendas
var htmlLegend11 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na erosividade da chuvia nos Espazos Naturais Protexidos'+"<\h3>",
			layer: geojson11,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Cambio relativo do Índice Modificado de Fournier (IMF) entre os períodos 1991-2005 e <br> 2006-2020 <br><br> IMF: Indicador da agresividade da chuvia coma axente erosivo<br>&nbsp'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
		
			    label:"<h1>"+  '&nbsp  Baixo '+"<\h4>",html: '',style: {'background-color': '#ffffbf','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {	
				label:"<h1>"+  '&nbsp Moderado '+"<\h4>",html: '',style: {'background-color': '#ffc800','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h1>"+  '&nbsp Alto '+"<\h4>",html: '',style: {'background-color': '#d10000','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h1>"+  '&nbsp Moi Alto '+"<\h4>",html: '',style: {'background-color': '#000000','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h1>"+  '&nbsp Sen datos '+"<\h4>",html: '',style: {'background-color': '#B0ADAD','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {

				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend11);



var htmlLegend12 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Risco de erosión do solo polo cambio climático nos Espazos Naturais Protexidos'+"<\h3>",
			layer: geojson12,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Clases de risco definidas en función do aumento do Índice Modificado de Fournier entre os periodos 1991-2005 e 2006-2020 e a vulnerabilidade definida pola pendiente do terreo <br>&nbsp'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
		
			    label:"<h1>"+  '&nbsp Baixo '+"<\h4>",html: '',style: {'background-color': '#ffffbe','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {	
				label:"<h1>"+  '&nbsp Moderado '+"<\h4>",html: '',style: {'background-color':'#ffa77f','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h1>"+  '&nbsp Alto '+"<\h4>",html: '',style: {'background-color': '#e60000','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h1>"+  '&nbsp Extremo '+"<\h4>",html: '',style: {'background-color': '#4c0073','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h1>"+  '&nbsp Sen datos '+"<\h4>",html: '',style: {'background-color': '#B0ADAD','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {

				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend12);




var htmlLegend13 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Espazos Naturais Protexidos'+"<\h3>",
			layer: geojson13,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				

				
		
			    label:"<h2>"+  '&nbsp Monumento Natural '+"<\h4>",html: '',style: {'background-color': '#d8d79e','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {	
				label:"<h2>"+  '&nbsp Paisaxe Protexida '+"<\h4>",html: '',style: {'background-color':'#98e500','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h2>"+  '&nbsp Parque Natural '+"<\h4>",html: '',style: {'background-color': '#4c7300','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h2>"+  '&nbsp Reserva Natural '+"<\h4>",html: '',style: {'background-color': '#f5f579','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h2>"+  '&nbsp Reserva Natural <br> &nbsp Integral '+"<\h4>",html: '',style: {'background-color': '#a9a800','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {	

				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			





			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend13);



var htmlLegend14 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Vulnerabilidade á erosión dos Espazos Naturais Protexidos'+"<\h3>",
			layer: geojson14,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Vulnerabilidade definida en función da pendente media do terreo <br>&nbsp'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
		
			    label:"<h1>"+  '&nbsp Moi baixa '+"<\h4>",html: '',style: {'background-color': '#ffffc7','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {	
				label:"<h1>"+  '&nbsp Baixa '+"<\h4>",html: '',style: {'background-color':'#ffff25','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h1>"+  '&nbsp Moderada '+"<\h4>",html: '',style: {'background-color': '#ffb725','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h1>"+  '&nbsp Alta '+"<\h4>",html: '',style: {'background-color': '#fe2725','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {
				label:"<h1>"+  '&nbsp Moi alta '+"<\h4>",html: '',style: {'background-color': '#4c0073','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {		
				label:"<h1>"+  '&nbsp Sen datos '+"<\h4>",html: '',style: {'background-color': '#B0ADAD','width': '60px','height': '28px', 'border': 'black 2px solid'}}, {

				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend14);






//Visualizar capas
// L.control.layers(baseLayers, overlays,{collapsed:true, position: 'topright',}).addTo(map);
L.control.layers.tree(baseTree, overlayTree,{collapsed:true}).collapseTree(baseTree,overlayTree).addTo(map);

//boton de informacion 
var button2 = new L.Control.Button(L.DomUtil.get('helpbutton2'), { toggleButton: 'active', position: 'topright'});
	button2.addTo(map);
	button2.on('click', function () {
	 if (button2.isToggled()) {
			sidebar2.hide();
		} else {
			sidebar2.show();
		}
	});