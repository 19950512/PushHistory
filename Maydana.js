class maydana {

	add(evento, elemento, funcao) {
		if(elemento !== null){
			if(window.addEventListener){
				elemento.addEventListener(evento, function(evento){
					funcao(evento);
				}, true);
			}else{
				elemento.attachEvent("on"+evento, function(){
					funcao(evento);
				});
			}
		}
	}

	debounce(func, wait, immediate){

		let timeout;
		return function(...args){

			const context = this;

			const later = () => {

				timeout = null;
				if(!immediate){
					func.apply(context, args);
				}
			};

			const callNow = immediate && !timeout;

			clearTimeout(timeout);

			timeout = setTimeout(later, wait);

			if (callNow){
				func.apply(context, args);
			}
		};
	}

	targt(evts) {
		return evts.target;
	}

	trigger (evts, elemento){
		if(document.createEvent){
			Evento = document.createEvent('HTMLEvents');
			Evento.initEvent(evts, true, true);
			elemento.dispatchEvent(Evento);
		}else{
			Evento = document.createEventObject();
			elemento.fireEvent('on'+evts, Evento);
		}
	}

	id(element){
		return document.getElementById(element);
	}

	delay(funcao, time){
		setTimeout( funcao, time );
	}

	testJSON(text){
		if (typeof(text) !=="string"){
			return false;
		}
		try{
			return true;
		}
		catch (error){
			return false;
		}
	}
}

module.exports = maydana;