/**
 * Created by rafael on 22/07/15.
 */
/*! DataTables Bootstrap 3 integration
 * ©2011-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for Bootstrap 3. This requires Bootstrap 3 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */
(function(window, document, undefined){

	var factory = function( $, DataTable ) {
		"use strict";


		/* Set the defaults for DataTables initialisation */
		$.extend( true, DataTable.defaults, {
			dom:
			"<'row'<'col-sm-6'l><'col-sm-6'f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'col-sm-5'i><'col-sm-7'p>>",
			renderer: 'bootstrap'
		} );


		/* Default class modification */
		$.extend( DataTable.ext.classes, {
			sWrapper:      "dataTables_wrapper form-inline dt-bootstrap",
			sFilterInput:  "form-control input-sm",
			sLengthSelect: "form-control input-sm"
		} );


		/* Bootstrap paging button renderer */
		DataTable.ext.renderer.pageButton.bootstrap = function ( settings, host, idx, buttons, page, pages ) {
			var api     = new DataTable.Api( settings );
			var classes = settings.oClasses;
			var lang    = settings.oLanguage.oPaginate;
			var btnDisplay, btnClass, counter=0;

			var attach = function( container, buttons ) {
				var i, ien, node, button;
				var clickHandler = function ( e ) {
					e.preventDefault();
					if ( !$(e.currentTarget).hasClass('disabled') ) {
						api.page( e.data.action ).draw( false );
					}
				};

				for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
					button = buttons[i];

					if ( $.isArray( button ) ) {
						attach( container, button );
					}
					else {
						btnDisplay = '';
						btnClass = '';

						switch ( button ) {
							case 'ellipsis':
								btnDisplay = '&hellip;';
								btnClass = 'disabled';
								break;

							case 'first':
								btnDisplay = lang.sFirst;
								btnClass = button + (page > 0 ?
										'' : ' disabled');
								break;

							case 'previous':
								btnDisplay = lang.sPrevious;
								btnClass = button + (page > 0 ?
										'' : ' disabled');
								break;

							case 'next':
								btnDisplay = lang.sNext;
								btnClass = button + (page < pages-1 ?
										'' : ' disabled');
								break;

							case 'last':
								btnDisplay = lang.sLast;
								btnClass = button + (page < pages-1 ?
										'' : ' disabled');
								break;

							default:
								btnDisplay = button + 1;
								btnClass = page === button ?
									'active' : '';
								break;
						}

						if ( btnDisplay ) {
							node = $('<li>', {
								'class': classes.sPageButton+' '+btnClass,
								'id': idx === 0 && typeof button === 'string' ?
								settings.sTableId +'_'+ button :
									null
							} )
								.append( $('<a>', {
									'href': '#',
									'aria-controls': settings.sTableId,
									'data-dt-idx': counter,
									'tabindex': settings.iTabIndex
								} )
									.html( btnDisplay )
							)
								.appendTo( container );

							settings.oApi._fnBindAction(
								node, {action: button}, clickHandler
							);

							counter++;
						}
					}
				}
			};

			// IE9 throws an 'unknown error' if document.activeElement is used
			// inside an iframe or frame.
			var activeEl;

			try {
				// Because this approach is destroying and recreating the paging
				// elements, focus is lost on the select button which is bad for
				// accessibility. So we want to restore focus once the draw has
				// completed
				activeEl = $(document.activeElement).data('dt-idx');
			}
			catch (e) {}

			attach(
				$(host).empty().html('<ul class="pagination"/>').children('ul'),
				buttons
			);

			if ( activeEl ) {
				$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
			}
		};


		/*
		 * TableTools Bootstrap compatibility
		 * Required TableTools 2.1+
		 */
		if ( DataTable.TableTools ) {
			// Set the classes that TableTools uses to something suitable for Bootstrap
			$.extend( true, DataTable.TableTools.classes, {
				"container": "DTTT btn-group",
				"buttons": {
					"normal": "btn btn-default",
					"disabled": "disabled"
				},
				"collection": {
					"container": "DTTT_dropdown dropdown-menu",
					"buttons": {
						"normal": "",
						"disabled": "disabled"
					}
				},
				"print": {
					"info": "DTTT_print_info"
				},
				"select": {
					"row": "active"
				}
			} );

			// Have the collection use a bootstrap compatible drop down
			$.extend( true, DataTable.TableTools.DEFAULTS.oTags, {
				"collection": {
					"container": "ul",
					"button": "li",
					"liner": "a"
				}
			} );
		}

	}; // /factory


// Define as an AMD module if possible
	if ( typeof define === 'function' && define.amd ) {
		define( ['jquery', 'datatables'], factory );
	}
	else if ( typeof exports === 'object' ) {
		// Node/CommonJS
		factory( require('jquery'), require('datatables') );
	}
	else if ( jQuery ) {
		// Otherwise simply initialise as normal, stopping multiple evaluation
		factory( jQuery, jQuery.fn.dataTable );
	}


})(window, document);



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


(function($){

	'use strict';

	var resizeFn = function() {
		$('.dataTable').css({
			'width': $('.dataTable').parent().width()
		});
	};

	$(window).resize(resizeFn);

})(jQuery);
/**
 * Created by rafael on 22/07/15.
 */
/*
 * File:        jquery.dataTables.grouping.js
 * Version:     1.2.9.
 * Author:      Jovan Popovic
 *
 * Copyright 2013 Jovan Popovic, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, as supplied with this software.
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.
 * Parameters:
 * @iGroupingColumnIndex                                 Integer             Index of the column that will be used for grouping - default 0
 * @sGroupingColumnSortDirection                         Enumeration         Sort direction of the group
 * @iGroupingOrderByColumnIndex                          Integer             Index of the column that will be used for ordering groups
 * @sGroupingClass                                       String              Class that will be associated to the group row. Default - "group"
 * @sGroupItemClass                                      String              Class that will be associated to the group row of group items. Default - "group-item"
 * @bSetGroupingClassOnTR                                Boolean             If set class will be set to the TR instead of the TD withing the grouping TR
 * @bHideGroupingColumn                                  Boolean             Hide column used for grouping once results are grouped. Default - true
 * @bHideGroupingOrderByColumn                           Boolean             Hide column used for ordering groups once results are grouped. Default - true
 * @sGroupBy                                             Enumeration         Type of grouping that should be applied. Values "name"(default), "letter", "year"
 * @sGroupLabelPrefix                                    String              Prefix that will be added to each group cell
 * @bExpandableGrouping                                  Boolean             Attach expand/collapse handlers to the grouping rows
 * @bExpandSingleGroup                                   Boolean             Use accordon grouping
 * @iExpandGroupOffset                                   Integer             Number of pixels to set scroll position above the currently selected group. If -1 scroll will be alligned to the table
 * General settings
 * @sDateFormat: "dd/MM/yyyy"                            String              Date format used for grouping
 * @sEmptyGroupLabel                                     String              Lable that will be placed as group if grouping cells are empty. Default "-"

 * Parameters used in the second level grouping
 * @iGroupingColumnIndex2                                Integer             Index of the secondary column that will be used for grouping - default 0
 * @sGroupingColumnSortDirection2                        Enumeration         Sort direction of the secondary group
 * @iGroupingOrderByColumnIndex2                         Integer             Index of the column that will be used for ordering secondary groups
 * @sGroupingClass2                                      String              Class that will be associated to the secondary group row. Default "subgroup"
 * @sGroupItemClass2                                     String              Class that will be associated to the secondary group row of group items. Default "subgroup-item"
 * @bHideGroupingColumn2                                 Boolean             Hide column used for secondary grouping once results are grouped. Default - true,
 * @bHideGroupingOrderByColumn2                          Boolean             Hide column used for ordering secondary groups once results are grouped. Default - true,
 * @sGroupBy2                                            Enumeration         Type of grouping that should be applied to secondary column. Values "name"(default), "letter", "year",
 * @sGroupLabelPrefix2                                   String              Prefix that will be added to each secondary group cell
 * @fnOnGrouped                                          Function            Function that is called when grouping is finished. Function has no parameters.
 */
(function ($) {

	"use strict";

	$.fn.rowGrouping = function (options) {

		function _fnOnGrouped() {

		}

		function _fnOnGroupCreated(oGroup, sGroup, iLevel) {
			///<summary>
			///Function called when a new grouping row is created(it should be overriden in properties)
			///</summary>
		}

		function _fnOnGroupCompleted(oGroup, sGroup, iLevel) {
			///<summary>
			///Function called when a new grouping row is created(it should be overriden in properties)
			///</summary>
		}

		function _getMonthName(iMonth) {
			var asMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			return asMonths[iMonth - 1];
		}

		var defaults = {

			iGroupingColumnIndex: 0,
			sGroupingColumnSortDirection: "",
			iGroupingOrderByColumnIndex: -1,
			sGroupingClass: "group",
			sGroupItemClass: "group-item",
			bHideGroupingColumn: true,
			bHideGroupingOrderByColumn: true,
			sGroupBy: "name",
			sGroupLabelPrefix: "",
			fnGroupLabelFormat: function (label) { return label; },
			bExpandableGrouping: false,
			bExpandSingleGroup: false,
			iExpandGroupOffset: 100,
			asExpandedGroups: null,

			sDateFormat: "dd/MM/yyyy",
			sEmptyGroupLabel: "-",
			bSetGroupingClassOnTR: false,

			iGroupingColumnIndex2: -1,
			sGroupingColumnSortDirection2: "",
			iGroupingOrderByColumnIndex2: -1,
			sGroupingClass2: "subgroup",
			sGroupItemClass2: "subgroup-item",
			bHideGroupingColumn2: true,
			bHideGroupingOrderByColumn2: true,
			sGroupBy2: "name",
			sGroupLabelPrefix2: "",
			fnGroupLabelFormat2: function (label) { return label; },
			bExpandableGrouping2: false,

			fnOnGrouped: _fnOnGrouped,

			fnOnGroupCreated: _fnOnGroupCreated,
			fnOnGroupCompleted: _fnOnGroupCompleted,

			oHideEffect: null, // { method: "hide", duration: "fast", easing: "linear" },
			oShowEffect: null,//{ method: "show", duration: "slow", easing: "linear" }

			bUseFilteringForGrouping: false // This is still work in progress option
		};
		return this.each(function (index, elem) {

			var oTable = $(elem).dataTable();

			var aoGroups = new Array();
			$(this).dataTableExt.aoGroups = aoGroups;

			function fnCreateGroupRow(sGroupCleaned, sGroup, iColspan) {
				var nGroup = document.createElement('tr');
				var nCell = document.createElement('td');
				nGroup.id = "group-id-" + oTable.attr("id") + "_" + sGroupCleaned;

				var oGroup = { id: nGroup.id, key: sGroupCleaned, text: sGroup, level: 0, groupItemClass: ".group-item-" + sGroupCleaned, dataGroup: sGroupCleaned, aoSubgroups: new Array() };



				if (properties.bSetGroupingClassOnTR) {
					nGroup.className = properties.sGroupingClass + " " + sGroupCleaned;
				} else {
					nCell.className = properties.sGroupingClass + " " + sGroupCleaned;
				}

				nCell.colSpan = iColspan;
				nCell.innerHTML = properties.sGroupLabelPrefix + properties.fnGroupLabelFormat(sGroup == "" ? properties.sEmptyGroupLabel : sGroup, oGroup );
				if (properties.bExpandableGrouping) {

					if (!_fnIsGroupCollapsed(sGroupCleaned)) {
						nCell.className += " expanded-group";
						oGroup.state = "expanded";
					} else {
						nCell.className += " collapsed-group";
						oGroup.state = "collapsed";
					}
					nCell.className += " group-item-expander";
					$(nCell).attr('data-group', oGroup.dataGroup); //Fix provided by mssskhalsa (Issue 5)
					$(nCell).attr("data-group-level", oGroup.level);
					$(nCell).click(_fnOnGroupClick);
				}
				nGroup.appendChild(nCell);
				aoGroups[sGroupCleaned] = oGroup;
				oGroup.nGroup = nGroup;
				properties.fnOnGroupCreated(oGroup, sGroupCleaned, 1);
				return oGroup;
			}

			function _fnCreateGroup2Row(sGroup2, sGroupLabel, iColspan, oParentGroup) {

				var nGroup2 = document.createElement('tr');
				nGroup2.id = oParentGroup.id + "_" + sGroup2;
				var nCell2 = document.createElement('td');
				var dataGroup = oParentGroup.dataGroup + '_' + sGroup2;

				var oGroup = { id: nGroup2.id, key: sGroup2, text: sGroupLabel, level: oParentGroup.level + 1, groupItemClass: ".group-item-" + dataGroup,
					dataGroup: dataGroup, aoSubgroups: new Array()
				};

				if (properties.bSetGroupingClassOnTR) {
					nGroup2.className = properties.sGroupingClass2 + " " + sGroup2;
				} else {
					nCell2.className = properties.sGroupingClass2 + " " + sGroup2;
				}

				nCell2.colSpan = iColspan;
				nCell2.innerHTML = properties.sGroupLabelPrefix2 + properties.fnGroupLabelFormat2(sGroupLabel == "" ? properties.sEmptyGroupLabel : sGroupLabel, oGroup);

				if (properties.bExpandableGrouping) {

					nGroup2.className += " group-item-" + oParentGroup.dataGroup;
				}


				if (properties.bExpandableGrouping && properties.bExpandableGrouping2) {

					if (!_fnIsGroupCollapsed(oGroup.dataGroup)) {
						nCell2.className += " expanded-group";
						oGroup.state = "expanded";
					} else {
						nCell2.className += " collapsed-group";
						oGroup.state = "collapsed";
					}
					nCell2.className += " group-item-expander";
					$(nCell2).attr('data-group', oGroup.dataGroup);
					$(nCell2).attr("data-group-level", oGroup.level);
					$(nCell2).click(_fnOnGroupClick);
				}

				nGroup2.appendChild(nCell2);

				oParentGroup.aoSubgroups[oGroup.dataGroup] = oGroup;
				aoGroups[oGroup.dataGroup] = oGroup;
				oGroup.nGroup = nGroup2;
				properties.fnOnGroupCreated(oGroup, sGroup2, 2);
				return oGroup;
			}

			function _fnIsGroupCollapsed(sGroup) {
				if (aoGroups[sGroup] != null)
					return (aoGroups[sGroup].state == "collapsed");
				else
				if (sGroup.indexOf("_") > -1)
					true;
				else
				if(bInitialGrouping && (asExpandedGroups==null || asExpandedGroups.length == 0))
					return false;// initially if asExpandedGroups is empty - no one is collapsed
				else
					return ($.inArray(sGroup, asExpandedGroups) == -1); //the last chance check asExpandedGroups
			}

			function _fnGetYear(x) {
				if(x.length< (iYearIndex+iYearLength) )
					return x;
				else
					return x.substr(iYearIndex, iYearLength);
			}
			function _fnGetGroupByName(x) {
				return x;
			}

			function _fnGetGroupByLetter(x) {
				return x.substr(0, 1);
			}

			function _fnGetGroupByYear(x) {
				return _fnGetYear(x);
				//return Date.parseExact(x, properties.sDateFormat).getFullYear();//slooooow
			}

			function _fnGetGroupByYearMonth(x) {
				//var date = Date.parseExact(x, "dd/MM/yyyy");
				//return date.getFullYear() + " / " + date.getMonthName();
				//return x.substr(iYearIndex, iYearLength) + '/' + x.substr(iMonthIndex, iMonthLength);
				return x.substr(iYearIndex, iYearLength) + ' ' + _getMonthName(x.substr(iMonthIndex, iMonthLength));
			}

			function _fnGetCleanedGroup(sGroup) {

				if (sGroup === "") return "-";
				return sGroup.toLowerCase().replace(/[^a-zA-Z0-9\u0080-\uFFFF]+/g, "-"); //fix for unicode characters (Issue 23)
				//return sGroup.toLowerCase().replace(/\W+/g, "-"); //Fix provided by bmathews (Issue 7)
			}

			function _rowGroupingRowFilter(oSettings, aData, iDataIndex) {
				///<summary>Used to expand/collapse groups with DataTables filtering</summary>
				if (oSettings.nTable.id !== oTable[0].id) return true;
				var sColData = aData[properties.iGroupingColumnIndex];
				if (typeof sColData === "undefined")
					sColData = aData[oSettings.aoColumns[properties.iGroupingColumnIndex].mDataProp];
				if (_fnIsGroupCollapsed(_fnGetCleanedGroup(sColData))) {
					if (oTable.fnIsOpen(oTable.fnGetNodes(iDataIndex)))
					{
						if (properties.fnOnRowClosed != null) {
							properties.fnOnRowClosed(this); //    $(this.cells[0].children[0]).attr('src', '../../Images/details.png');
						}
						oTable.fnClose(oTable.fnGetNodes(iDataIndex));
					}
					return false;
				};
				return true;
			} //end of function _rowGroupingRowFilter


			function fnExpandGroup(sGroup) {
				///<summary>Expand group if expanadable grouping is used</summary>

				aoGroups[sGroup].state = "expanded";

				$("td[data-group^='" + sGroup + "']").removeClass("collapsed-group");
				$("td[data-group^='" + sGroup + "']").addClass("expanded-group");


				if(properties.bUseFilteringForGrouping)
				{
					oTable.fnDraw();
					return;//Because rows are expanded with _rowGroupingRowFilter function
				}

				if (jQuery.inArray(sGroup, asExpandedGroups)==-1)
					asExpandedGroups.push(sGroup);

				if (properties.oHideEffect != null)
					$(".group-item-" + sGroup, oTable)
						[properties.oShowEffect.method](properties.oShowEffect.duration,
						properties.oShowEffect.easing,
						function () { });
				else
					$(".group-item-" + sGroup, oTable).show();


			} //end of function fnExpandGroup

			function fnCollapseGroup(sGroup) {
				///<summary>Collapse group if expanadable grouping is used</summary>

				aoGroups[sGroup].state = "collapsed";
				$("td[data-group^='" + sGroup + "']").removeClass("expanded-group");
				$("td[data-group^='" + sGroup + "']").addClass("collapsed-group");

				if(properties.bUseFilteringForGrouping)
				{
					oTable.fnDraw();
					return;//Because rows are expanded with _rowGroupingRowFilter function
				}
				//var index = $.inArray(sGroup, asExpandedGroups);
				//asExpandedGroups.splice(index, 1);

				$('.group-item-' + sGroup).each(function () {
					//Issue 24 - Patch provided by Bob Graham
					if (oTable.fnIsOpen(this)) {
						if (properties.fnOnRowClosed != null) {
							properties.fnOnRowClosed(this); //    $(this.cells[0].children[0]).attr('src', '../../Images/details.png');
						}
						oTable.fnClose(this);
					}
				});

				if (properties.oHideEffect != null)
					$(".group-item-" + sGroup, oTable)
						[properties.oHideEffect.method](properties.oHideEffect.duration,
						properties.oHideEffect.easing,
						function () { });
				else
					$(".group-item-" + sGroup, oTable).hide();

			} //end of function fnCollapseGroup

			function _fnOnGroupClick(e) {
				///<summary>
				///Function that is called when user click on the group cell in order to
				///expand of collapse group
				///</summary>

				//var sGroup = $(this).attr("rel");
				var sGroup = $(this).attr("data-group");
				var iGroupLevel = $(this).attr("data-group-level");

				var bIsExpanded = !_fnIsGroupCollapsed(sGroup);
				if (properties.bExpandSingleGroup) {
					if (!bIsExpanded) {
						var sCurrentGroup = $("td.expanded-group").attr("data-group");
						fnCollapseGroup(sCurrentGroup);
						fnExpandGroup(sGroup);

						if (properties.iExpandGroupOffset != -1) {
							var position = $("#group-id-" + oTable.attr("id") + "_" + sGroup).offset().top - properties.iExpandGroupOffset;
							window.scroll(0, position);
						} else {
							var position = oTable.offset().top;
							window.scroll(0, position);
						}
					}
				} else {
					if (bIsExpanded) {
						fnCollapseGroup(sGroup);
					} else {
						fnExpandGroup(sGroup);
					}
				}
				e.preventDefault();

			}; //end function _fnOnGroupClick


			function _fnDrawCallBackWithGrouping (oSettings) {

				if (oTable.fnSettings().oFeatures.bServerSide)
					bInitialGrouping = true;
				var bUseSecondaryGrouping = false;

				if (properties.iGroupingColumnIndex2 != -1)
					bUseSecondaryGrouping = true;

				//-----Start grouping

				if (oSettings.aiDisplayMaster.length == 0) { //aiDisplay
					return;
				}

				var nTrs = $('tbody tr', oTable);
				var iColspan = 0; //nTrs[0].getElementsByTagName('td').length;
				for (var iColIndex = 0; iColIndex < oSettings.aoColumns.length; iColIndex++) {
					if (oSettings.aoColumns[iColIndex].bVisible)
						iColspan += 1;
				}
				var sLastGroup = null;
				var sLastGroup2 = null;
				if (oSettings.aiDisplay.length > 0) {
					for (var i = 0; i < nTrs.length; i++) {


						var iDisplayIndex = oSettings._iDisplayStart + i;
						if (oTable.fnSettings().oFeatures.bServerSide)
							iDisplayIndex = i;
						var sGroupData = "";
						var sGroup = null;
						var sGroupData2 = "";
						var sGroup2 = null;

						//Issue 31 - Start fix provided by Fabien Taysse
//                      sGroupData = oSettings.aoData[oSettings.aiDisplay[iDisplayIndex]]._aData[properties.iGroupingColumnIndex];
//                      if (sGroupData == undefined)
//                          sGroupData = oSettings.aoData[oSettings.aiDisplay[iDisplayIndex]]._aData[oSettings.aoColumns[properties.iGroupingColumnIndex].mDataProp];
						sGroupData = this.fnGetData(nTrs[i], properties.iGroupingColumnIndex);
						//Issue 31 - End fix provided by Fabien Taysse

						var sGroup = sGroupData;
						if (properties.sGroupBy != "year")
							sGroup = fnGetGroup(sGroupData);

						if (bUseSecondaryGrouping) {
							sGroupData2 = oSettings.aoData[oSettings.aiDisplay[iDisplayIndex]]._aData[properties.iGroupingColumnIndex2];
							if (sGroupData2 == undefined)
								sGroupData2 = oSettings.aoData[oSettings.aiDisplay[iDisplayIndex]]._aData[oSettings.aoColumns[properties.iGroupingColumnIndex2].mDataProp];
							if (properties.sGroupBy2 != "year")
								sGroup2 = fnGetGroup(sGroupData2);
						}


						if (sLastGroup == null || _fnGetCleanedGroup(sGroup) != _fnGetCleanedGroup(sLastGroup)) { // new group encountered (or first of group)
							var sGroupCleaned = _fnGetCleanedGroup(sGroup);

							if(sLastGroup != null)
							{
								properties.fnOnGroupCompleted(aoGroups[_fnGetCleanedGroup(sLastGroup)]);
							}
							/*
							 if (properties.bExpandableGrouping && bInitialGrouping) {
							 if (properties.bExpandSingleGroup) {
							 if (asExpandedGroups.length == 0)
							 asExpandedGroups.push(sGroupCleaned);
							 } else {
							 asExpandedGroups.push(sGroupCleaned);
							 }
							 }
							 */
							if(properties.bAddAllGroupsAsExpanded && jQuery.inArray(sGroupCleaned,asExpandedGroups) == -1)
								asExpandedGroups.push(sGroupCleaned);

							var oGroup = fnCreateGroupRow(sGroupCleaned, sGroup, iColspan);
							var nGroup = oGroup.nGroup;

							if(nTrs[i].parentNode!=null)
								nTrs[i].parentNode.insertBefore(nGroup, nTrs[i]);
							else
								$(nTrs[i]).before(nGroup);

							sLastGroup = sGroup;
							sLastGroup2 = null; //to reset second level grouping





						} // end if (sLastGroup == null || sGroup != sLastGroup)

						$(nTrs[i]).attr("data-group", aoGroups[sGroupCleaned].dataGroup);

						$(nTrs[i]).addClass(properties.sGroupItemClass);
						$(nTrs[i]).addClass("group-item-" + sGroupCleaned);
						if (properties.bExpandableGrouping) {
							if (_fnIsGroupCollapsed(sGroupCleaned) && !properties.bUseFilteringForGrouping) {
								$(nTrs[i]).hide();
							}
						}


						if (bUseSecondaryGrouping) {

							if (sLastGroup2 == null || _fnGetCleanedGroup(sGroup2) != _fnGetCleanedGroup(sLastGroup2)) {
								var sGroup2Id = _fnGetCleanedGroup(sGroup) + '-' + _fnGetCleanedGroup(sGroup2);
								var oGroup2 = _fnCreateGroup2Row(sGroup2Id, sGroup2, iColspan, aoGroups[sGroupCleaned])
								var nGroup2 = oGroup2.nGroup;
								nTrs[i].parentNode.insertBefore(nGroup2, nTrs[i]);

								sLastGroup2 = sGroup2;
							}

							$(nTrs[i]).attr("data-group", oGroup2.dataGroup)
								.addClass(properties.sGroupItemClass2)
								.addClass("group-item-" + oGroup2.dataGroup);
						} //end if (bUseSecondaryGrouping)



					} // end for (var i = 0; i < nTrs.length; i++)
				}; // if (oSettings.aiDisplay.length > 0)

				if(sLastGroup != null)
				{
					properties.fnOnGroupCompleted(aoGroups[_fnGetCleanedGroup(sLastGroup)]);
				}


				//-----End grouping
				properties.fnOnGrouped(aoGroups);

				bInitialGrouping = false;

			}; // end of _fnDrawCallBackWithGrouping = function (oSettings)


			//var oTable = this;
			var iYearIndex = 6;
			var iYearLength = 4;
			var asExpandedGroups = new Array();
			var bInitialGrouping = true;

			var properties = $.extend(defaults, options);

			if (properties.iGroupingOrderByColumnIndex == -1) {
				properties.bCustomColumnOrdering = false;
				properties.iGroupingOrderByColumnIndex = properties.iGroupingColumnIndex;
			} else {
				properties.bCustomColumnOrdering = true;
			}

			if (properties.sGroupingColumnSortDirection == "") {
				if (properties.sGroupBy == "year")
					properties.sGroupingColumnSortDirection = "desc";
				else
					properties.sGroupingColumnSortDirection = "asc";
			}


			if (properties.iGroupingOrderByColumnIndex2 == -1) {
				properties.bCustomColumnOrdering2 = false;
				properties.iGroupingOrderByColumnIndex2 = properties.iGroupingColumnIndex2;
			} else {
				properties.bCustomColumnOrdering2 = true;
			}

			if (properties.sGroupingColumnSortDirection2 == "") {
				if (properties.sGroupBy2 == "year")
					properties.sGroupingColumnSortDirection2 = "desc";
				else
					properties.sGroupingColumnSortDirection2 = "asc";
			}



			iYearIndex = properties.sDateFormat.toLowerCase().indexOf('yy');
			iYearLength = properties.sDateFormat.toLowerCase().lastIndexOf('y') - properties.sDateFormat.toLowerCase().indexOf('y') + 1;

			var iMonthIndex = properties.sDateFormat.toLowerCase().indexOf('mm');
			var iMonthLength = properties.sDateFormat.toLowerCase().lastIndexOf('m') - properties.sDateFormat.toLowerCase().indexOf('m') + 1;

			var fnGetGroup = _fnGetGroupByName;
			switch (properties.sGroupBy) {
				case "letter": fnGetGroup = _fnGetGroupByLetter;
					break;
				case "year": fnGetGroup = _fnGetGroupByYear;
					break;
				case "month": fnGetGroup = _fnGetGroupByYearMonth;
					break;
				default: fnGetGroup = _fnGetGroupByName;
					break;
			}


			if (properties.asExpandedGroups != null) {
				if (properties.asExpandedGroups == "NONE") {
					properties.asExpandedGroups = [];
					asExpandedGroups = properties.asExpandedGroups;
					bInitialGrouping = false;
				} else if (properties.asExpandedGroups == "ALL") {
					properties.bAddAllGroupsAsExpanded = true;
				} else if (properties.asExpandedGroups.constructor == String) {
					var currentGroup = properties.asExpandedGroups;
					properties.asExpandedGroups = new Array();
					properties.asExpandedGroups.push(_fnGetCleanedGroup(currentGroup));
					asExpandedGroups = properties.asExpandedGroups;
					bInitialGrouping = false;
				} else if (properties.asExpandedGroups.constructor == Array) {
					for (var i = 0; i < properties.asExpandedGroups.length; i++) {
						asExpandedGroups.push(_fnGetCleanedGroup(properties.asExpandedGroups[i]));
						if (properties.bExpandSingleGroup)
							break;
					}
					bInitialGrouping = false;
				}
			}else{
				properties.asExpandedGroups = new Array();
				properties.bAddAllGroupsAsExpanded = true;
			}
			if(properties.bExpandSingleGroup){
				var nTrs = $('tbody tr', oTable);
				var sGroupData = oTable.fnGetData(nTrs[0], properties.iGroupingColumnIndex);

				var sGroup = sGroupData;
				if (properties.sGroupBy != "year")
					sGroup = fnGetGroup(sGroupData);

				var sGroupCleaned = _fnGetCleanedGroup(sGroup);
				properties.asExpandedGroups = new Array();
				properties.asExpandedGroups.push(sGroupCleaned);

			}

			oTable.fnSetColumnVis(properties.iGroupingColumnIndex, !properties.bHideGroupingColumn);
			if (properties.bCustomColumnOrdering) {
				oTable.fnSetColumnVis(properties.iGroupingOrderByColumnIndex, !properties.bHideGroupingOrderByColumn);
			}
			if (properties.iGroupingColumnIndex2 != -1) {
				oTable.fnSetColumnVis(properties.iGroupingColumnIndex2, !properties.bHideGroupingColumn2);
			}
			if (properties.bCustomColumnOrdering2) {
				oTable.fnSetColumnVis(properties.iGroupingOrderByColumnIndex2, !properties.bHideGroupingOrderByColumn2);
			}
			oTable.fnSettings().aoDrawCallback.push({
				"fn": _fnDrawCallBackWithGrouping,
				"sName": "fnRowGrouping"
			});

			var aaSortingFixed = new Array();
			aaSortingFixed.push([properties.iGroupingOrderByColumnIndex, properties.sGroupingColumnSortDirection]);
			if (properties.iGroupingColumnIndex2 != -1) {
				aaSortingFixed.push([properties.iGroupingOrderByColumnIndex2, properties.sGroupingColumnSortDirection2]);
			} // end of if (properties.iGroupingColumnIndex2 != -1)

			oTable.fnSettings().aaSortingFixed = aaSortingFixed;
			//Old way
			//oTable.fnSettings().aaSortingFixed = [[properties.iGroupingOrderByColumnIndex, properties.sGroupingColumnSortDirection]];

			switch (properties.sGroupBy) {
				case "name":
					break;


				case "letter":

					/* Create an array with the values of all the input boxes in a column */
					oTable.fnSettings().aoColumns[properties.iGroupingOrderByColumnIndex].sSortDataType = "rg-letter";
					$.fn.dataTableExt.afnSortData['rg-letter'] = function (oSettings, iColumn) {
						var aData = [];
						$('td:eq(' + iColumn + ')', oSettings.oApi._fnGetTrNodes(oSettings)).each(function () {
							aData.push(_fnGetGroupByLetter(this.innerHTML));
						});
						return aData;
					}


					break;


				case "year":
					/* Create an array with the values of all the input boxes in a column */
					oTable.fnSettings().aoColumns[properties.iGroupingOrderByColumnIndex].sSortDataType = "rg-date";
					$.fn.dataTableExt.afnSortData['rg-date'] = function (oSettings, iColumn) {
						var aData = [];
						var nTrs = oSettings.oApi._fnGetTrNodes(oSettings);
						for(i = 0; i< nTrs.length; i++)
						{
							aData.push(_fnGetYear( oTable.fnGetData( nTrs[i], iColumn) ));
						}

						/*
						 $('td:eq(' + iColumn + ')', oSettings.oApi._fnGetTrNodes(oSettings)).each(function () {
						 aData.push(_fnGetYear(this.innerHTML));
						 });
						 */
						return aData;
					}
					break;
				default:
					break;

			} // end of switch (properties.sGroupBy)

			if(properties.bUseFilteringForGrouping)
				$.fn.dataTableExt.afnFiltering.push(_rowGroupingRowFilter);

			oTable.fnDraw();



		});
	};
})(jQuery);

/**
 * Arquivo de configuração para os componentes do jQuery UI.
 */
(function($) {
    /**
     * Internacionalização do datepicker para pt-br
     */
    $.datepicker.regional['pt-BR'] = {
        closeText: 'Fechar',
        prevText: '&#x3c;Anterior',
        nextText: 'Pr&oacute;ximo&#x3e;',
        currentText: 'Hoje',
        monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNames: ['Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S&aacute;bado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['pt-BR']);

    if ($.fn.livequery) {
        $('[datepicker]').livequery(function(event) {
            var $target = $(this);
            if ($target.is(':input')) {
                $target.datepicker();
            }
        });
    }
}(jQuery));
(function($) {
    if ($.fn.livequery) {
        $('[data-fontcontrol]').livequery(function(event) {
        	$('[data-fontcontrol]').on('click', function(event) {
			        event.preventDefault();

			        // Trigger element
			        var $el  = $(event.target);
			        if ( $el.is('i') ) {$el = $el.parent();}

			        // If element is not disabled, do the font control
			        if (!$el.attr('disabled')) {

			            // Container that will have its font size controlled
			            var $container = $('.font-control');

			            // Control method can be "increment" or "decrement"
			            var method = $el.data('fontcontrol');

			            if (method == 'increment') {
			                $('[data-fontcontrol="decrement"]').removeAttr('disabled');

			                if ($container.hasClass('font-large')) {
			                    $container.addClass('font-xlarge');
			                    $('[data-fontcontrol="increment"]').attr('disabled', true);
			                } else {
			                    $container.addClass('font-large');
			                }
			            } else {
			                $('[data-fontcontrol="increment"]').removeAttr('disabled');

			                if ($container.hasClass('font-xlarge')) {
			                    $container.removeClass('font-xlarge');
			                } else {
			                    $container.removeClass('font-large');
			                    $('[data-fontcontrol="decrement"]').attr('disabled', true);
			                }
			            }
			        }
			    });

        });
    }
}(jQuery));
/**
 * [options description]
 * @type {[type]}
 */
(function($) {
    $.mask.options = $.extend($.mask.options, {
      attr: 'mask',
      selectCharsOnFocus: true
    });

    $.mask.masks['numeric'] = { mask: '9', type: 'repeat' };
    $.mask.masks['alphanumeric'] = { mask: '@', type: 'repeat' };
    $.mask.masks['alpha'] = { mask: 'a', type: 'repeat' };

    if ($.fn.livequery) {
        $('[mask]').livequery(function(event) {
            var $target = $(this);

            if ($target.is(':input')) {
                $target.setMask();
            }
        });
    }
}(jQuery));
/*global setTimeout:true*/
(function($) {
  var navActions = {
    'close-application': function() { 
      if (confirm('Deseja sair da aplicação?')) {
    	window.open("", "_self",""); //bug fix
        window.close();
      };
    },
  }

  if ($.fn.livequery) {
    $('.navbar [data-action]').livequery(function() {
      var $el = $(this);

      $el.on('click', function(event) {
        event.preventDefault();
        var action = navActions[$el.data('action')];
        if (action) action();
      });
    });
  }
}(jQuery));
/*global setTimeout:true*/
(function($) {
    // Executar logo após o carregamento completo da página
    $(function() {
        // Procura o link que abre o dropdown menu com as
        // notificações disponíveis
        $('.notification-toggle').each(function() {
            var notificationToggle = $(this);
            // Procura pelo notification center na barra de navegação do sistema
            var noteCenter = notificationToggle.parents('.notification-center');
             // Contador de notificações
            var notificationCounter = noteCenter.find('.notification-counter');
            var notificationsAvailable = parseInt(notificationCounter.text(), 10);

            if (notificationsAvailable === 0) {
                notificationCounter.hide();
                return;
            }
            else {
                // Quando o usuário clicar no link, devemos ocultar o
                // contador caso não existam notificações não lidas a serem
                // verificadas pelo usuário
                notificationToggle.one('click', function(event) {
                    // Devemos chamar a operação remota para enviar o id da ultima notificação
                    // não lida, para que no próximo request ela não seja mais exibida como
                    // uma notificação não lida.
                    var lastUnreadNotification = noteCenter.find('.notifications .notification:first-child')
                        .data('id');

                    // Remove a classe .notification-unread de todas as
                    // notificações listadas
                    setTimeout(function() {
                        noteCenter.find('.notification')
                            .removeClass('notification-unread');
                    }, 500);

                    notificationCounter.animate({
                        opacity: 0
                    });
                });
            }
        });
    });

}(jQuery));
/*global window:true*/
(function($){

  $('body').on('click.page.print', '.print-page', function(event){
    window.print();
    event.preventDefault();
  });

}(jQuery));
/*global document:true*/
(function($){

    "use strict";

    function TextareaLimit(element, options){
        this.$textarea = $(element);
        this.options = $.extend({}, $.textareaLimit.defaults, options);

        if(this.options.label){
            this.labelElement = $(this.options.label);
        }
        else {
            var $label = $('<label></label>');
            this.$textarea.after($label);
            this.labelElement = $label;
        }

        if(!this.$textarea.is('textarea')){
            throw new Error('The data [data-textarea-range] should be used only with textarea elements');
        }

        this.init();
    }

    /**
     * [prototype description]
     * @type {Object}
     */
    TextareaLimit.prototype = {
        /**
         * [init description]
         */
        init : function(){
            this.$textarea.removeAttr('maxlength');

            this.$textarea.keyup($.proxy(this.change, this));
            this.updateLabel();
        },

        /**
         * [updateLabel description]
         * @return {[type]} [description]
         */
        updateLabel: function(){
            var text = this.$textarea.val();
            text = text.replace(/\u000d\u000a/g,'\u000a').replace(/\u000a/g,'\u000d\u000a');
            var availableCount = Math.abs(text.length - this.options.maxlength);
            var message = this.options.labelText.replace(/\{\#\}/g, availableCount);
            this.labelElement.text(message);
        },

        /**
         * [change description]
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
        change : function(event){
            var text = this.$textarea.val();
            text = text.replace(/\u000d\u000a/g,'\u000a').replace(/\u000a/g,'\u000d\u000a');

            if(text.length >= this.options.maxlength){
                this.$textarea.val(text.slice(0, this.options.maxlength));
            }

            this.updateLabel();
        }
    };

    /**
     * [textareaLimit description]
     * @param  {[type]} option [description]
     * @return {[type]}        [description]
     */
    $.fn.textareaLimit = function ( option ) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('textareaLimit'),
                options = typeof option === 'object' && option;

            if (!data || typeof data === 'string'){
                $this.data('textareaLimit', (data = new TextareaLimit(this, options)));
            }

            if (typeof option === 'string'){
                data[option]();
            }
        });
    };

    $.textareaLimit = {};
    $.textareaLimit.defaults = {
        labelText: 'Restam {#} caracteres',
        defaultMaxLength: !('maxLength' in document.createElement('textarea'))
    };

    $.fn.textareaLimit.Constructor = TextareaLimit;

    if ($.fn.livequery) {
        $('textarea[maxlength]').livequery(function(event) {
            var $target = $(this),
                data = $target.data();

            data = $.extend(data, {
                maxlength : $target.attr('maxlength')
            });

            $target.textareaLimit(data);
        });
    }
}(jQuery));