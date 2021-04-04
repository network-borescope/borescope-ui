/**
 * Created by rafael on 22/07/15.
 */
/**
 * Este arquivo efetua a configuração do componente jquery-datatables
 * adoquando-o ao twitter-bootstrap e traduzindo-o para pt-br.
 *
 * @author william.lepinski
 */
(function() {

	/**
	 * Extendendo as configurações de tradução do componente para pt-BR.
	 */
	$.extend(true, $.fn.dataTable.defaults, {
		'sDom': "<'table-header clearfix'<'length'l><'filter'f>r>t<'table-footer clearfix'<'info'i><'pagination'p>>",
		'sPaginationType': 'bootstrap',
		'oLanguage': {
			'oAria': {
				'sSortAscending': ' - click/return to sort ascending',
				'sSortDescending': ' - click/return to sort descending'
			},
			'sProcessing': 'Carregando',
			'sLengthMenu': 'Registros por página: _MENU_',
			'sZeroRecords': 'Nenhum resultado encontrado',
			'sInfo': 'Total: _TOTAL_',
			'sInfoEmpty': 'Nenhum resultado encontrado',
			'sInfoFiltered': '',
			'sInfoPostFix': '',
			'sSearch': 'Filtrar por: ',
			'sSearchPlaceholder' : '',
			'oPaginate': {
				'sFirst': 'Primeira',
				'sPrevious': 'Anterior',
				'sNext': 'Próxima',
				'sLast': 'Última'
			}
		}
	});

	/**
	 * As informações sobre paginação.
	 * @param  {[type]} oSettings Configurações.
	 */
	$.fn.dataTableExt.oApi.fnPagingInfo = function(oSettings)
	{
		return {
			'iStart': oSettings._iDisplayStart,
			'iEnd': oSettings.fnDisplayEnd(),
			'iLength': oSettings._iDisplayLength,
			'iTotal': oSettings.fnRecordsTotal(),
			'iFilteredTotal': oSettings.fnRecordsDisplay(),
			'iPage': Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
			'iTotalPages': Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
		};
	};

	/**
	 * Extensão da configuração de paginação padrão do dataTables para
	 * se adequar ao padrão de paginação do bootstrap
	 */
	$.extend($.fn.dataTableExt.oPagination, {
		'bootstrap': {

			/**
			 * Método de inicialização da paginação
			 * @param  {object} oSettings As configurações.
			 * @param  {int} nPaging .
			 * @param  {boolean} fnDraw .
			 */
			fnInit: function(oSettings, nPaging, fnDraw) {
				var oLang = oSettings.oLanguage.oPaginate;
				var fnClickHandler = function(e) {
					e.preventDefault();
					if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
						fnDraw(oSettings);
					}
				};

				$(nPaging).addClass('pagination').append(
					'<ul class="pagination">' +
					'<li class="prev disabled"><a href="#">&larr; ' + oLang.sPrevious + '</a></li>' +
					'<li class="next disabled"><a href="#">' + oLang.sNext + ' &rarr; </a></li>' +
					'</ul>'
				);
				var els = $('a', nPaging);
				$(els[0]).bind('click.DT', { action: 'previous' }, fnClickHandler);
				$(els[1]).bind('click.DT', { action: 'next' }, fnClickHandler);
			},

			/**
			 * Método de update.
			 * @param  {object} oSettings As configurações.
			 * @param  {boolean} fnDraw    .
			 */
			fnUpdate: function(oSettings, fnDraw) {
				var iListLength = 5;
				var oPaging = oSettings.oInstance.fnPagingInfo();
				var an = oSettings.aanFeatures.p;
				var i, iLen, j, sClass, iStart, iEnd, iHalf = Math.floor(iListLength / 2);

				if (oPaging.iTotalPages < iListLength) {
					iStart = 1;
					iEnd = oPaging.iTotalPages;
				}
				else if (oPaging.iPage <= iHalf) {
					iStart = 1;
					iEnd = iListLength;
				} else if (oPaging.iPage >= (oPaging.iTotalPages - iHalf)) {
					iStart = oPaging.iTotalPages - iListLength + 1;
					iEnd = oPaging.iTotalPages;
				} else {
					iStart = oPaging.iPage - iHalf + 1;
					iEnd = iStart + iListLength - 1;
				}

				var clickHandler = function(e) {
					e.preventDefault();
					oSettings._iDisplayStart = (parseInt($('a', this).text(), 10) - 1) * oPaging.iLength;
					fnDraw(oSettings);
				};

				for (i = 0, iLen = an.length; i < iLen; i++) {
					$('li:gt(0)', an[i]).filter(':not(:last)').remove();

					for (j = iStart; j <= iEnd; j++) {
						sClass = (j === oPaging.iPage + 1) ? 'class="active"' : '';
						$('<li ' + sClass + '><a href="#">' + j + '</a></li>')
							.insertBefore($('li:last', an[i])[0])
							.bind('click', clickHandler);
					}

					if (oPaging.iPage === 0) {
						$('li:first', an[i]).addClass('disabled');
					} else {
						$('li:first', an[i]).removeClass('disabled');
					}

					if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
						$('li:last', an[i]).addClass('disabled');
					} else {
						$('li:last', an[i]).removeClass('disabled');
					}
				}
			}
		}
	});

	if ($.fn.livequery) {
		$('[datatable]').livequery(function(event) {
			var $target = $(this);
			if ($target.is('table')) {
				$target.dataTable();
			}
		});
	}

}(jQuery));

