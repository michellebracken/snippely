// Aliases

var console = AIR.Introspector.Console;

// Configuration

Application.autoExit = true;

// Temporary Data

var TAGS = [
	{ id: 1, name: 'Some Tag 1' },
	{ id: 2, name: 'Some Tag 2' },
	{ id: 3, name: 'Some Tag 3' }
];

var SNIPPETS = {
	"1": [
		{ id: 1, title: 'My First Snippet' },
		{ id: 2, title: 'My Second Snippet' },
		{ id: 3, title: 'My Third Snippet' }
	],
	"2": [
		{ id: 3, title: 'My Third Snippet' },
		{ id: 4, title: 'My Fourth Snippet' },
		{ id: 2, title: 'My Second Snippet' },
		{ id: 1, title: 'My First Snippet' }
	],
	"3": [
		{ id: 4, title: 'My Fourth Snippet' },
		{ id: 1, title: 'My First Snippet' },
		{ id: 2, title: 'My Second Snippet' }
	]
};

var SNIPPET = {
	"1": {
		title: 'My First Snippet',
		description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur consectetuer, elit quis gravida mollis, ligula sem cursus leo, lacinia rhoncus mi urna eget felis. Nam non felis id dolor egestas iaculis.',
		snips: [
			{ id: 1, type: 'javascript', code: true, content: 'Cras eget eros. Ut enim purus, scelerisque in, eleifend ut, tristique id, elit. Integer sapien. Proin nunc massa, auctor at, fermentum placerat, pulvinar sit amet, enim. Phasellus consequat lobortis nisl. Curabitur sed felis. Donec ultrices, libero at rhoncus blandit, lacus risus dapibus mi, quis fermentum velit erat volutpat lectus. Sed accumsan feugiat nulla. Ut in erat eu nisi sagittis blandit. Ut mauris ligula, pretium in, bibendum ac, bibendum eget, purus. In erat libero, hendrerit ac, faucibus a, pretium nec, diam. Vestibulum nisi. Curabitur tincidunt. Cras elementum justo.' },
			{ id: 2, type: 'php', code: true, content: 'Donec tincidunt ultricies risus. Donec tempor lacus id sem. Fusce aliquam, pede sed accumsan dapibus, mauris nisi faucibus purus, ut elementum dui arcu molestie tortor. Nunc sagittis iaculis eros. Quisque sodales ipsum et felis. Nulla facilisi. Nulla in mauris in purus condimentum ornare. Phasellus porta ante a purus. In quis diam. Curabitur non leo. Sed facilisis odio condimentum ante. Nam tempor feugiat sem. Praesent sit amet libero sit amet dolor consequat venenatis.' },
			{ id: 3, type: 'note', code: false, content: 'Nulla facilisi. Duis sem tellus, laoreet quis, hendrerit id, faucibus vel, augue. In hac habitasse platea dictumst. Aenean pretium cursus odio. Phasellus ac libero aliquet enim bibendum condimentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam posuere sodales pede. Vivamus porttitor libero nec pede feugiat consectetuer. Fusce vitae risus eu tortor pharetra dictum. Vivamus sit amet dui. Phasellus at nibh. Curabitur diam justo, convallis non, cursus eu, facilisis non, leo.' }
		]
	},
	"2": {
		title: 'My Second Snippet',
		description: 'Fusce gravida nulla nec erat. Fusce euismod nulla a arcu. Vivamus rutrum. Nam ultricies libero ut turpis. Vivamus viverra tempor neque. Aenean felis. Curabitur vel odio sit amet enim posuere blandit. Vivamus consequat sem luctus elit. In ante nisl, euismod sed, interdum at, eleifend id, dolor. Phasellus sit amet ipsum. Etiam augue arcu, suscipit vel, tincidunt ac, congue vel, mauris.',
		snips: [
			{ id: 4, type: 'ruby', code: true, content: 'Proin dictum lorem. Sed at lectus. Nullam cursus quam ac turpis. In hac habitasse platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et tellus vel sem pellentesque bibendum. Maecenas mollis urna ac est. Sed volutpat. Nam molestie turpis ac ante. Cras ultrices ante eget nibh. Integer lobortis interdum eros. Aliquam sapien ante, interdum nec, malesuada et, varius ac, nulla. Aliquam et diam. Maecenas mollis nunc in nunc.' },
			{ id: 5, type: 'note', code: false, content: 'Duis sem tellus, laoreet quis, hendrerit id, faucibus vel, augue. In hac habitasse platea dictumst. Aenean pretium cursus odio. Phasellus ac libero aliquet enim bibendum condimentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam posuere sodales pede. Vivamus porttitor libero nec pede feugiat consectetuer. Fusce vitae risus eu tortor pharetra dictum. Vivamus sit amet dui. Phasellus at nibh. Curabitur diam justo, convallis non, cursus eu, facilisis non, leo.' },
			{ id: 6, type: 'javascript', code: true, content: 'Ut enim purus, scelerisque in, eleifend ut, tristique id, elit. Integer sapien. Proin nunc massa, auctor at, fermentum placerat, pulvinar sit amet, enim. Phasellus consequat lobortis nisl. Curabitur sed felis. Donec ultrices, libero at rhoncus blandit, lacus risus dapibus mi, quis fermentum velit erat volutpat lectus. Sed accumsan feugiat nulla. Ut in erat eu nisi sagittis blandit. Ut mauris ligula, pretium in, bibendum ac, bibendum eget, purus. In erat libero, hendrerit ac, faucibus a, pretium nec, diam. Vestibulum nisi. Curabitur tincidunt. Cras elementum justo.' }
		]
	},
	"3": {
		title: 'My Third Snippet',
		description: 'Fusce gravida nulla nec erat. Fusce euismod nulla a arcu. Vivamus rutrum. Nam ultricies libero ut turpis. Vivamus viverra tempor neque. Aenean felis. Curabitur vel odio sit amet enim posuere blandit. Vivamus consequat sem luctus elit. In ante nisl, euismod sed, interdum at, eleifend id, dolor. Phasellus sit amet ipsum. Etiam augue arcu, suscipit vel, tincidunt ac, congue vel, mauris.',
		snips: [
			{ id: 7, type: 'php', code: true, content: 'In hac habitasse platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et tellus vel sem pellentesque bibendum. Maecenas mollis urna ac est. Sed volutpat. Nam molestie turpis ac ante. Cras ultrices ante eget nibh. Integer lobortis interdum eros. Aliquam sapien ante, interdum nec, malesuada et, varius ac, nulla. Aliquam et diam. Maecenas mollis nunc in nunc.' },
			{ id: 8, type: 'note', code: false, content: 'Duis sem tellus, laoreet quis, hendrerit id, faucibus vel, augue. In hac habitasse platea dictumst. Aenean pretium cursus odio. Phasellus ac libero aliquet enim bibendum condimentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam posuere sodales pede. Vivamus porttitor libero nec pede feugiat consectetuer. Fusce vitae risus eu tortor pharetra dictum. Vivamus sit amet dui. Phasellus at nibh. Curabitur diam justo, convallis non, cursus eu, facilisis non, leo.' },
		]
	},
	"4": {
		title: 'My Fourth Snippet',
		description: 'This snippet is all about ruby because i love ruby so much.',
		snips: [
			{ id: 9, type: 'ruby', code: true, content: 'Curabitur consectetuer, elit quis gravida mollis, ligula sem cursus leo, lacinia rhoncus mi urna eget felis. Nam non felis id dolor egestas iaculis. Fusce gravida nulla nec erat. Fusce euismod nulla a arcu. Vivamus rutrum. Nam ultricies libero ut turpis. Vivamus viverra tempor neque. Aenean felis. Curabitur vel odio sit amet enim posuere blandit. Vivamus consequat sem luctus elit. In ante nisl, euismod sed, interdum at, eleifend id, dolor.' },
			{ id: 10, type: 'ruby', code: true, content: 'Cras eget eros. Ut enim purus, scelerisque in, eleifend ut, tristique id, elit. Integer sapien. Proin dictum lorem. Sed at lectus. Nullam cursus quam ac turpis. In hac habitasse platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et tellus vel sem pellentesque bibendum. Maecenas mollis urna ac est. Sed volutpat. Nam molestie turpis ac ante. Cras ultrices ante eget nibh. Integer lobortis interdum eros.' },
			{ id: 11, type: 'ruby', code: true, content: 'Cras eget eros. Ut enim purus, scelerisque in, eleifend ut, tristique id, elit. Integer sapien. Proin dictum lorem. Sed at lectus. Nullam cursus quam ac turpis. In hac habitasse platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et tellus vel sem pellentesque bibendum. Maecenas mollis urna ac est. Sed volutpat. Nam molestie turpis ac ante. Cras ultrices ante eget nibh. Integer lobortis interdum eros.' },
			{ id: 12, type: 'ruby', code: true, content: 'Donec tincidunt ultricies risus. Donec tempor lacus id sem. Fusce aliquam, pede sed accumsan dapibus, mauris nisi faucibus purus, ut elementum dui arcu molestie tortor. Nunc sagittis iaculis eros. Quisque sodales ipsum et felis. Nulla facilisi. Nulla in mauris in purus condimentum ornare. Phasellus porta ante a purus. In quis diam. Curabitur non leo. Sed facilisis odio condimentum ante. Nam tempor feugiat sem. Praesent sit amet libero sit amet dolor consequat venenatis.' },
			{ id: 13, type: 'ruby', code: true, content: 'Nullam cursus quam ac turpis. In hac habitasse platea dictumst. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et tellus vel sem pellentesque bibendum. Maecenas mollis urna ac est. Sed volutpat. Nam molestie turpis ac ante. Cras ultrices ante eget nibh. Integer lobortis interdum eros. Aliquam sapien ante, interdum nec, malesuada et, varius ac, nulla. Aliquam et diam. Maecenas mollis nunc in nunc.' },
		]
	}
};

// Snippely Object

var Snippely = {
	
	initialize: function(){
		this.meta = $('meta');
		this.tags = $('tags');
		this.footer = $('footer');
		this.snippet = $('snippet');
		this.snippets = $('snippets');
		this.topResizer = $('top-resizer');
		this.leftResizer = $('left-resizer');
		
		this.initializeMenus();
		this.initializeLayout();
		this.initializeMetas();
		
		this.Tags.initialize();
		this.Snippet.initialize();
		
		this.activate();
	},
	
	initializeMenus: function(){
		//main menus
		this.mainMenu = new ART.Menu('MainMenu');
		this.saveItem = new ART.Menu.Item('Save');
		this.loadItem = new ART.Menu.Item('Load');
		this.saveItem.shortcut = 'command+s';
		this.loadItem.shortcut = 'command+l';
		this.fileMenu = new ART.Menu('File').addItem(this.saveItem).addItem(this.loadItem);
		this.mainMenu.addMenu(this.fileMenu);
		
		//add menu
		this.addMenu = new ART.Menu('AddMenu');
		this.addTagItem = new ART.Menu.Item('Add Tag...', {
			onSelect: this.Tags.add.bind(this.Tags)
		});
		this.addSnippetItem = new ART.Menu.Item('Add Snippet...', {
			onSelect: this.Snippets.add.bind(this.Snippets)
		});
		this.addMenu.addItem(this.addTagItem).addItem(this.addSnippetItem);
		
		//action menu
		this.actionMenu = new ART.Menu('ActionMenu');
		this.removeTagItem = new ART.Menu.Item('Remove Tag...');
		this.renameTagItem = new ART.Menu.Item('Rename Tag...');
		this.removeSnippetItem = new ART.Menu.Item('Remove Snippet...');
		this.renameSnippetItem = new ART.Menu.Item('Rename Snippet...');
		this.actionMenu.addItem(this.renameTagItem).addItem(this.removeTagItem).addItem(this.renameSnippetItem).addItem(this.removeSnippetItem);
		
		$('button-add').addEvent('mousedown', function(event){
			this.addClass('active');
			Snippely.addMenu.display(event.client); //he doesnt care about my passed positions.. whoa.
			this.removeClass('active'); //apparently, the menu blocks all activity.
			event.stop();
		});
		
		$('button-action').addEvent('mousedown', function(event){
			this.addClass('active');
			Snippely.actionMenu.display(event.client);
			this.removeClass('active');
			event.stop();
		});
	},
	
	initializeLayout: function(){
		var redraw = this.redraw.bind(this);
		
		new Drag(this.tags, {
			modifiers: {y: null, x: 'width'},
			handle: this.leftResizer,
			limit: {x: [150, 300]},
			onDrag: redraw
		});

		new Drag(this.snippets, {
			modifiers: {y: 'height', x: null},
			handle: this.topResizer,
			limit: {y: [38, function(){
				return $('snippets-wrap').scrollHeight;
			}]},
			onDrag: redraw
		});
		
		nativeWindow.addEventListener('resize', redraw);
		nativeWindow.addEventListener('activate', redraw);
		nativeWindow.addEventListener('deactivate', redraw);
		nativeWindow.addEventListener('activate', this.focus);
		nativeWindow.addEventListener('deactivate', this.blur);

		this.tagsScrollbar = new ART.ScrollBar('tags', 'tags-wrap');
		this.snippetScrollbar = new ART.ScrollBar('snippet', 'snippet-wrap');
		this.snippetsScrollbar = new ART.ScrollBar('snippets', 'snippets-wrap');
		
		this.redraw();
	},
	
	initializeMetas: function(){
		var metaButtons = $$('#meta .button');
		metaButtons.addEvent('mousedown', function(){
			this.addClass('active');
		});
		document.addEvent('mouseup', function(){
			metaButtons.removeClass('active');
		});
	},
	
	redraw: function(){
		var left = this.tags.offsetWidth;
		$$(this.snippets, this.topResizer, this.meta, this.snippet).setStyle('left', left);
		
		this.footer.setStyle('width', this.tags.clientWidth);
		this.topResizer.setStyle('top', this.snippets.offsetHeight);
		this.meta.setStyle('top', this.snippets.offsetHeight + this.topResizer.offsetHeight);
		this.snippet.setStyle('top', this.snippets.offsetHeight + this.topResizer.offsetHeight + this.meta.offsetHeight);
		
		this.tagsScrollbar.update();
		this.snippetScrollbar.update();
		this.snippetsScrollbar.update();
	},
	
	activate: function(){
		(function(){
			nativeWindow.visible = true;
			nativeWindow.activate();
		}).delay(100); //give some time to render, or else garbage will be displayed
	},

	focus: function(){
		document.body.id = 'focus';
	},
	
	blur: function(){
		document.body.id = 'blur';
	} 
	
};

//The Tags List

Snippely.Tags = {

	initialize: function(){
		this.list = $('tags-list');
		this.editing = false;
		
		document.addEvent('mousedown', this.save.bind(this));
		
		//TODO - load tags from database initially
		this.load(TAGS);
	},

	create: function(tag){
		var element = new Element('li', { text: tag.name });
		return element.addEvents({
			click: this.select.bind(this, element),
			dblclick: this.edit.bind(this, element),
			mousedown: function(event){ event.stopPropagation(); }
		}).store('tag:id', tag.id);
	},
	
	load: function(tags){
		this.list.empty();
		var elements = tags.map(this.create, this);
		
		this.list.adopt(elements);
		this.elements = $$(elements);
	},
	
	add: function(){
		var element = this.create({name: 'New Tag', id: 0});
		
		this.list.adopt(element);
		this.elements.push(element);
		this.select(element);
		this.edit(element);
	},
	
	select: function(element){
		if (this.editing) this.save();
		
		this.elements.removeClass('selected');
		element.addClass('selected');

		var id = element.retrieve('tag:id');
		var snippets = SNIPPETS[id] || []; //TEMP - retrieve from database
		
		Snippely.Snippets.load(snippets);
	},
	
	edit: function(element){
		this.editing = element;
		element.contentEditable = true;
		element.addClass('editing').focus();
	},
	
	save: function(){
		if (!this.editing) return;
		var id = this.editing.retrieve('tag:id');
		var text = this.editing.get('text');
		//save this tag's new name to the database
		
		this.editing.removeClass('editing');
		this.editing = this.editing.contentEditable = false;
	}

};

//The Snippets List

Snippely.Snippets = {

	load: function(snippets){
		var list = $('snippets-list').empty();
		var elements = snippets.map(function(snippet){
			var element = new Element('li', { text: snippet.title });
			element.addEvent('click', this.select.bind(this, element));
			element.store('snippet:id', snippet.id);
			return element;
		}, this);
		
		list.adopt(elements).getElements(':odd').addClass('odd');
		this.elements = $$(elements);
	},
	
	select: function(element){
		this.elements.removeClass('selected');
		element.addClass('selected');
		
		var id = element.retrieve('snippet:id');
		var snippet = SNIPPET[id]; //TEMP - retrieve from database
		
		Snippely.Snippet.load(snippet);
	},
	
	add: function(){
		
	}
	
};

//The Snippet and all his Snips

Snippely.Snippet = {

	initialize: function(){
		this.active = false;
		
		this.title = $('snippet-title');
		this.description = $('snippet-description');
		this.container = $('snippet-snips');
		
		document.addEvent('mousedown', function(){
			this.blur(this.active);
		}.bind(this));
	},

	load: function(snippet){
		this.container.empty();
		this.title.set('text', snippet.title);
		this.description.set('text', snippet.description);
		
		snippet.snips.each(function(snip){
			var type = snip.type + (snip.code ? ' code' : '');
			var info = new Element('div', {'class': 'info', 'text': type});
			var content = new Element('div', {
				'class': 'content',
				'text': snip.content
			}).store('snip:id', snip.id);

			content.addEvent('mousedown', this.focus.bindWithEvent(this, content));

			this.container.adopt(new Element('div', {
				'class': snippet.type + ' snip'
			}).adopt(info, content));
		}, this);
		
		//initialize history
		$$('#snippet-snips div.content').each(function(element){
			element.set('html', element.get('html').trim());
			element.history = [element.get('html')];
			element.addEvent('keydown', function(event){
				if (event.meta && event.key == 'z'){
					event.preventDefault();
					var start = this.selectionStart;
					var previous = (this.history.length > 1) ? this.history.pop() : this.history[0];
					this.setHTML(previous);
				} else {
					if (this.getHTML() != this.history.getLast()) this.history.push(this.getHTML());
				}
			});
		});
		
		//initialize sortables
		new Sortables('snippet-snips', { handle: 'div.info' });
	},
	
	focus: function(event, element){
		event.stopPropagation();
		if (element.contentEditable == true) return;
		if (this.active) this.blur(this.active);
		element.getParent().addClass('editing');
		element.contentEditable = true;
		this.active = element;
	},
	
	blur: function(element){
		if (!element.contentEditable) return;
		element.getParent().removeClass('editing');
		this.active = element.contentEditable = false;
	},
	
	save: function(){
		
	}

};

window.addEvent('load', Snippely.initialize.bind(Snippely));