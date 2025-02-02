(() => {
	let e,
		t,
		r,
		n,
		a = {
			3752: (e, t, r) => {
				'use strict';
				t.A = void 0;
				const n = r(6087);
				t.A = (0, n.forwardRef)(function (
					{ icon: e, size: t = 24, ...r },
					a
				) {
					return (0, n.cloneElement)(e, {
						width: t,
						height: t,
						...r,
						ref: a,
					});
				});
			},
			1973: (e, t, r) => {
				'use strict';
				Object.defineProperty(t, '__esModule', { value: !0 }),
					(t.default = void 0);
				const n = r(5573),
					a = r(790);
				const s = (0, a.jsx)(n.SVG, {
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24',
					children: (0, a.jsx)(n.Path, {
						d: 'M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z',
					}),
				});
				t.default = s;
			},
			2563: (e, t, r) => {
				const n = {
					'./add-card.js': [6870, 4976],
					'./add-submenu.js': [9663, 9523],
					'./add-template.js': [7058, 156],
					'./align-center.js': [5231, 5445],
					'./align-justify.js': [9792, 6456],
					'./align-left.js': [4115, 6781],
					'./align-none.js': [6740, 5474],
					'./align-right.js': [7482, 5418],
					'./archive.js': [358, 2318],
					'./arrow-down-right.js': [2561, 9455],
					'./arrow-down.js': [9962, 6704],
					'./arrow-left.js': [4771, 2905],
					'./arrow-right.js': [7018, 5198],
					'./arrow-up-left.js': [9389, 2409],
					'./arrow-up.js': [3395, 2845],
					'./aspect-ratio.js': [5004, 9658],
					'./at-symbol.js': [1660, 2100],
					'./audio.js': [826, 8202],
					'./background.js': [7134, 4388],
					'./backup.js': [2108, 5470],
					'./bell-unread.js': [2555, 3903],
					'./bell.js': [9479, 4253],
					'./block-default.js': [7033, 1109],
					'./block-meta.js': [7879, 637],
					'./block-table.js': [2548, 7376],
					'./border.js': [7108, 9694],
					'./box.js': [3629, 6629],
					'./brush.js': [5984, 800],
					'./bug.js': [9830, 946],
					'./button.js': [7834, 9044],
					'./buttons.js': [8953, 3065],
					'./calendar.js': [7732, 8142],
					'./cancel-circle-filled.js': [3658, 7124],
					'./caption.js': [2702, 370],
					'./capture-photo.js': [1855, 3615],
					'./capture-video.js': [9852, 2436],
					'./category.js': [258, 1016],
					'./chart-bar.js': [5736, 8552],
					'./check.js': [3372, 4088],
					'./chevron-down-small.js': [3346, 9012],
					'./chevron-down.js': [824, 234],
					'./chevron-left-small.js': [4639, 7529],
					'./chevron-left.js': [1961, 7963],
					'./chevron-right-small.js': [4298, 6726],
					'./chevron-right.js': [4880, 3928],
					'./chevron-up-down.js': [4294, 3246],
					'./chevron-up.js': [1069, 371],
					'./classic.js': [3184, 128],
					'./close-small.js': [1354, 7274],
					'./close.js': [2960, 140],
					'./cloud-download.js': [5054, 7556],
					'./cloud-upload.js': [4591, 4257],
					'./cloud.js': [6233, 4261],
					'./code.js': [2107, 81],
					'./cog.js': [9999, 8899],
					'./color.js': [127, 4083],
					'./column.js': [6676, 9298],
					'./columns.js': [1035, 9407],
					'./comment-author-avatar.js': [8235, 887],
					'./comment-author-name.js': [7913, 13],
					'./comment-content.js': [2753, 1745],
					'./comment-edit-link.js': [5287, 4579],
					'./comment-reply-link.js': [4349, 2947],
					'./comment.js': [4553, 8305],
					'./connection.js': [8818, 3056],
					'./copy-small.js': [7821, 5595],
					'./copy.js': [4523, 5286],
					'./cover.js': [6503, 6671],
					'./create.js': [5774, 2036],
					'./crop.js': [6871, 5358],
					'./currency-dollar.js': [5120, 9400],
					'./currency-euro.js': [5195, 9919],
					'./currency-pound.js': [2842, 2504],
					'./custom-link.js': [9990, 3498],
					'./custom-post-type.js': [4797, 8439],
					'./desktop.js': [3896, 8992],
					'./details.js': [7622, 6182],
					'./download.js': [7938, 5640],
					'./drafts.js': [3806, 136],
					'./drag-handle.js': [8195, 1743],
					'./drawer-left.js': [1369, 5226],
					'./drawer-right.js': [6512, 9754],
					'./edit.js': [9930, 6340],
					'./envelope.js': [7926, 4412],
					'./external.js': [6477, 3515],
					'./file.js': [5e3, 742],
					'./filter.js': [1196, 8210],
					'./flip-horizontal.js': [7374, 7614],
					'./flip-vertical.js': [8316, 7944],
					'./footer.js': [8949, 1551],
					'./format-bold.js': [3465, 7001],
					'./format-capitalize.js': [5280, 3556],
					'./format-indent-rtl.js': [2975, 2291],
					'./format-indent.js': [4024, 6504],
					'./format-italic.js': [3646, 486],
					'./format-list-bullets-rtl.js': [7105, 8057],
					'./format-list-bullets.js': [5998, 1386],
					'./format-list-numbered-rtl.js': [2408, 6670],
					'./format-list-numbered.js': [5379, 7777],
					'./format-lowercase.js': [6465, 9199],
					'./format-ltr.js': [9910, 3416],
					'./format-outdent-rtl.js': [1410, 6152],
					'./format-outdent.js': [9473, 655],
					'./format-rtl.js': [4838, 48],
					'./format-strikethrough.js': [4803, 8637],
					'./format-underline.js': [5212, 4950],
					'./format-uppercase.js': [5888, 634],
					'./fullscreen.js': [951, 5237],
					'./funnel.js': [4058, 5268],
					'./gallery.js': [5086, 7230],
					'./globe.js': [5125, 1545],
					'./grid.js': [226, 80],
					'./group.js': [5451, 119],
					'./handle.js': [3792, 974],
					'./header.js': [1759, 4001],
					'./heading-level-1.js': [335, 3323],
					'./heading-level-2.js': [1954, 5010],
					'./heading-level-3.js': [5857, 2649],
					'./heading-level-4.js': [4516, 7640],
					'./heading-level-5.js': [1515, 8847],
					'./heading-level-6.js': [2718, 4246],
					'./heading.js': [5241, 9022],
					'./help-filled.js': [1026, 1606],
					'./help.js': [1973],
					'./home-button.js': [4022, 7190],
					'./home.js': [473, 4283],
					'./html.js': [7839, 433],
					'./image.js': [7029, 6705],
					'./inbox.js': [9248, 7608],
					'./info.js': [3926, 6796],
					'./insert-after.js': [2612, 7770],
					'./insert-before.js': [8935, 2895],
					'./institution.js': [3230, 8994],
					'./justify-bottom.js': [4158, 5768],
					'./justify-center-vertical.js': [6591, 7159],
					'./justify-center.js': [8920, 1506],
					'./justify-left.js': [6272, 5374],
					'./justify-right.js': [5299, 1239],
					'./justify-space-between-vertical.js': [7377, 9399],
					'./justify-space-between.js': [4562, 1490],
					'./justify-stretch-vertical.js': [6647, 9161],
					'./justify-stretch.js': [4688, 6260],
					'./justify-top.js': [9194, 8894],
					'./key.js': [5835, 6699],
					'./keyboard-close.js': [442, 2884],
					'./keyboard-return.js': [5250, 8182],
					'./keyboard.js': [1243, 6409],
					'./language.js': [9128, 5882],
					'./layout.js': [1172, 1950],
					'./level-up.js': [6094, 5044],
					'./lifesaver.js': [4255, 9395],
					'./line-dashed.js': [7996, 9732],
					'./line-dotted.js': [117, 6345],
					'./line-solid.js': [2650, 2663],
					'./link-off.js': [4322, 8156],
					'./link.js': [9402, 7408],
					'./list-item.js': [192, 1744],
					'./list-view.js': [1134, 4834],
					'./list.js': [626, 2888],
					'./lock-outline.js': [9014, 2520],
					'./lock-small.js': [1107, 6193],
					'./lock.js': [4333, 7203],
					'./login.js': [5285, 9225],
					'./loop.js': [7328, 1022],
					'./map-marker.js': [9201, 2759],
					'./media-and-text.js': [1754, 3468],
					'./media.js': [9072, 5820],
					'./megaphone.js': [1674, 5350],
					'./menu.js': [1429, 3443],
					'./mobile.js': [5388, 6970],
					'./more-horizontal-mobile.js': [5751, 6969],
					'./more-horizontal.js': [572, 9764],
					'./more-vertical.js': [898, 6046],
					'./more.js': [2719, 4789],
					'./move-to.js': [8841, 3269],
					'./navigation.js': [4160, 6146],
					'./next.js': [5351, 7525],
					'./not-allowed.js': [3960, 7759],
					'./not-found.js': [3588, 1960],
					'./offline.js': [9159, 2171],
					'./overlay-text.js': [2578, 6144],
					'./page-break.js': [3571, 8069],
					'./page.js': [5849, 223],
					'./pages.js': [7052, 7584],
					'./paragraph.js': [7354, 9542],
					'./payment.js': [8282, 7790],
					'./pencil.js': [9963, 9553],
					'./pending.js': [9211, 1183],
					'./people.js': [7249, 4887],
					'./percent.js': [6669, 7973],
					'./pin-small.js': [2597, 7705],
					'./pin.js': [1315, 4523],
					'./plugins.js': [1376, 88],
					'./plus-circle-filled.js': [8760, 4434],
					'./plus-circle.js': [203, 9803],
					'./plus.js': [9870, 7344],
					'./position-center.js': [5011, 7243],
					'./position-left.js': [6711, 6579],
					'./position-right.js': [4966, 2416],
					'./post-author.js': [2226, 8550],
					'./post-categories.js': [4217, 5529],
					'./post-comments-count.js': [7225, 5321],
					'./post-comments-form.js': [9374, 1280],
					'./post-comments.js': [1591, 3827],
					'./post-content.js': [8716, 4442],
					'./post-date.js': [493, 3885],
					'./post-excerpt.js': [8504, 4406],
					'./post-featured-image.js': [1263, 627],
					'./post-list.js': [5781, 3725],
					'./post-terms.js': [3622, 9972],
					'./post.js': [5532, 7738],
					'./preformatted.js': [7885, 1587],
					'./previous.js': [4815, 6569],
					'./published.js': [4677, 7570],
					'./pull-left.js': [459, 1343],
					'./pull-right.js': [7810, 1140],
					'./pullquote.js': [7629, 8277],
					'./query-pagination-next.js': [7399, 3591],
					'./query-pagination-numbers.js': [418, 2568],
					'./query-pagination-previous.js': [8239, 79],
					'./query-pagination.js': [3397, 6363],
					'./quote.js': [8852, 1540],
					'./receipt.js': [9424, 4204],
					'./redo.js': [7890, 9872],
					'./remove-bug.js': [1493, 2887],
					'./remove-submenu.js': [5510, 5172],
					'./replace.js': [2224, 1544],
					'./reset.js': [3607, 7499],
					'./resize-corner-n-e.js': [1427, 5859],
					'./reusable-block.js': [3539, 3901],
					'./rotate-left.js': [3047, 4551],
					'./rotate-right.js': [2438, 876],
					'./row.js': [9264, 9636],
					'./rss.js': [376, 9668],
					'./scheduled.js': [9255, 487],
					'./search.js': [2770, 7356],
					'./seen.js': [6637, 3963],
					'./send.js': [1548, 9470],
					'./separator.js': [7899, 2547],
					'./settings.js': [1316, 9561],
					'./shadow.js': [314, 9092],
					'./share.js': [3951, 783],
					'./shield.js': [6447, 9437],
					'./shipping.js': [2768, 7298],
					'./shortcode.js': [627, 7227],
					'./shuffle.js': [8977, 1893],
					'./sidebar.js': [5764, 4852],
					'./sides-all.js': [2278, 3658],
					'./sides-axial.js': [5564, 7312],
					'./sides-bottom.js': [7854, 4240],
					'./sides-horizontal.js': [7005, 2491],
					'./sides-left.js': [6816, 9062],
					'./sides-right.js': [6771, 7663],
					'./sides-top.js': [778, 3174],
					'./sides-vertical.js': [3835, 9109],
					'./site-logo.js': [8993, 7753],
					'./square.js': [1833, 1979],
					'./stack.js': [7284, 5320],
					'./star-empty.js': [2774, 2484],
					'./star-filled.js': [2403, 1931],
					'./star-half.js': [8238, 7138],
					'./store.js': [2801, 765],
					'./stretch-full-width.js': [9038, 6828],
					'./stretch-wide.js': [6941, 1907],
					'./styles.js': [7500, 7562],
					'./subscript.js': [6445, 6973],
					'./superscript.js': [8228, 676],
					'./swatch.js': [8061, 300],
					'./symbol-filled.js': [3011, 2127],
					'./symbol.js': [7162, 4276],
					'./table-column-after.js': [5168, 1470],
					'./table-column-before.js': [7779, 915],
					'./table-column-delete.js': [3311, 9875],
					'./table-of-contents.js': [2611, 4883],
					'./table-row-after.js': [8645, 9918],
					'./table-row-before.js': [7465, 531],
					'./table-row-delete.js': [1821, 4163],
					'./table.js': [820, 2876],
					'./tablet.js': [8514, 7392],
					'./tag.js': [2680, 4600],
					'./term-description.js': [5551, 8789],
					'./text-color.js': [4819, 6341],
					'./text-horizontal.js': [3662, 9250],
					'./text-vertical.js': [3516, 7652],
					'./thumbs-down.js': [8424, 4640],
					'./thumbs-up.js': [1245, 349],
					'./tip.js': [5381, 6129],
					'./title.js': [5509, 358],
					'./tool.js': [4572, 7450],
					'./trash.js': [6350, 9642],
					'./trending-down.js': [9016, 7632],
					'./trending-up.js': [6861, 3549],
					'./typography.js': [6243, 1537],
					'./undo.js': [5844, 2646],
					'./ungroup.js': [5030, 1178],
					'./unlock.js': [270, 1172],
					'./unseen.js': [4418, 3096],
					'./update.js': [3667, 8957],
					'./upload.js': [4123, 5933],
					'./verse.js': [2285, 7881],
					'./video.js': [4547, 5935],
					'./warning.js': [1452, 7740],
					'./widget.js': [1670, 2444],
					'./wordpress.js': [707, 5771],
				};
				function a(e) {
					if (!r.o(n, e)) {
						return Promise.resolve().then(() => {
							let t = new Error("Cannot find module '" + e + "'");
							throw ((t.code = 'MODULE_NOT_FOUND'), t);
						});
					}
					const t = n[e],
						a = t[0];
					return Promise.all(t.slice(1).map(r.e)).then(() => r(a));
				}
				(a.keys = () => Object.keys(n)), (a.id = 2563), (e.exports = a);
			},
			7365: (e, t, r) => {
				'use strict';
				r.d(t, { A: () => o });
				const n = window.wp.apiFetch;
				const a = r.n(n);
				const s = window.wp.url,
					o = {
						id: 'default',
						search: async (e, t, r) =>
							(
								await a()({
									path: (0, s.addQueryArgs)(
										`/wc/merchant-buddy/default/search/${t}`,
										{ s: e }
									),
									signal: r,
								})
							)[t],
						searchAll: async (e, t) =>
							await a()({
								path: (0, s.addQueryArgs)(
									'/wc/merchant-buddy/default/search/all',
									{ s: e }
								),
								signal: t,
							}),
					};
			},
			790: (e) => {
				'use strict';
				e.exports = window.ReactJSXRuntime;
			},
			6087: (e) => {
				'use strict';
				e.exports = window.wp.element;
			},
			5573: (e) => {
				'use strict';
				e.exports = window.wp.primitives;
			},
		},
		s = {};
	function o(e) {
		const t = s[e];
		if (void 0 !== t) {
			return t.exports;
		}
		const r = (s[e] = { exports: {} });
		return a[e](r, r.exports, o), r.exports;
	}
	(o.m = a),
		(o.n = (e) => {
			const t = e && e.__esModule ? () => e.default : () => e;
			return o.d(t, { a: t }), t;
		}),
		(t = Object.getPrototypeOf
			? (e) => Object.getPrototypeOf(e)
			: (e) => e.__proto__),
		(o.t = function (r, n) {
			if ((1 & n && (r = this(r)), 8 & n)) {
				return r;
			}
			if ('object' === typeof r && r) {
				if (4 & n && r.__esModule) {
					return r;
				}
				if (16 & n && 'function' === typeof r.then) {
					return r;
				}
			}
			const a = Object.create(null);
			o.r(a);
			const s = {};
			e = e || [null, t({}), t([]), t(t)];
			for (
				let i = 2 & n && r;
				'object' === typeof i && !~e.indexOf(i);
				i = t(i)
			) {
				Object.getOwnPropertyNames(i).forEach(
					(e) => (s[e] = () => r[e])
				);
			}
			return (s.default = () => r), o.d(a, s), a;
		}),
		(o.d = (e, t) => {
			for (const r in t) {
				o.o(t, r) &&
					!o.o(e, r) &&
					Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
			}
		}),
		(o.f = {}),
		(o.e = (e) =>
			Promise.all(
				Object.keys(o.f).reduce((t, r) => (o.f[r](e, t), t), [])
			)),
		(o.u = (e) =>
			({
				13: 'wp-icons-comment-author-name-js',
				48: 'wp-icons-format-rtl-js',
				79: 'wp-icons-query-pagination-previous-js',
				80: 'wp-icons-grid-js',
				81: 'wp-icons-code-js',
				88: 'wp-icons-plugins-js',
				119: 'wp-icons-group-js',
				128: 'wp-icons-classic-js',
				136: 'wp-icons-drafts-js',
				140: 'wp-icons-close-js',
				156: 'wp-icons-add-template-js',
				223: 'wp-icons-page-js',
				234: 'wp-icons-chevron-down-js',
				300: 'wp-icons-swatch-js',
				349: 'wp-icons-thumbs-up-js',
				358: 'wp-icons-title-js',
				370: 'wp-icons-caption-js',
				371: 'wp-icons-chevron-up-js',
				433: 'wp-icons-html-js',
				486: 'wp-icons-format-italic-js',
				487: 'wp-icons-scheduled-js',
				531: 'wp-icons-table-row-before-js',
				627: 'wp-icons-post-featured-image-js',
				634: 'wp-icons-format-uppercase-js',
				637: 'wp-icons-block-meta-js',
				655: 'wp-icons-format-outdent-js',
				676: 'wp-icons-superscript-js',
				742: 'wp-icons-file-js',
				765: 'wp-icons-store-js',
				783: 'wp-icons-share-js',
				800: 'wp-icons-brush-js',
				876: 'wp-icons-rotate-right-js',
				887: 'wp-icons-comment-author-avatar-js',
				915: 'wp-icons-table-column-before-js',
				946: 'wp-icons-bug-js',
				974: 'wp-icons-handle-js',
				1016: 'wp-icons-category-js',
				1022: 'wp-icons-loop-js',
				1109: 'wp-icons-block-default-js',
				1140: 'wp-icons-pull-right-js',
				1172: 'wp-icons-unlock-js',
				1178: 'wp-icons-ungroup-js',
				1183: 'wp-icons-pending-js',
				1239: 'wp-icons-justify-right-js',
				1280: 'wp-icons-post-comments-form-js',
				1343: 'wp-icons-pull-left-js',
				1386: 'wp-icons-format-list-bullets-js',
				1470: 'wp-icons-table-column-after-js',
				1490: 'wp-icons-justify-space-between-js',
				1506: 'wp-icons-justify-center-js',
				1537: 'wp-icons-typography-js',
				1540: 'wp-icons-quote-js',
				1544: 'wp-icons-replace-js',
				1545: 'wp-icons-globe-js',
				1551: 'wp-icons-footer-js',
				1587: 'wp-icons-preformatted-js',
				1606: 'wp-icons-help-filled-js',
				1743: 'wp-icons-drag-handle-js',
				1744: 'wp-icons-list-item-js',
				1745: 'wp-icons-comment-content-js',
				1893: 'wp-icons-shuffle-js',
				1907: 'wp-icons-stretch-wide-js',
				1931: 'wp-icons-star-filled-js',
				1950: 'wp-icons-layout-js',
				1960: 'wp-icons-not-found-js',
				1979: 'wp-icons-square-js',
				2036: 'wp-icons-create-js',
				2100: 'wp-icons-at-symbol-js',
				2127: 'wp-icons-symbol-filled-js',
				2171: 'wp-icons-offline-js',
				2291: 'wp-icons-format-indent-rtl-js',
				2318: 'wp-icons-archive-js',
				2409: 'wp-icons-arrow-up-left-js',
				2416: 'wp-icons-position-right-js',
				2436: 'wp-icons-capture-video-js',
				2444: 'wp-icons-widget-js',
				2484: 'wp-icons-star-empty-js',
				2491: 'wp-icons-sides-horizontal-js',
				2504: 'wp-icons-currency-pound-js',
				2520: 'wp-icons-lock-outline-js',
				2547: 'wp-icons-separator-js',
				2568: 'wp-icons-query-pagination-numbers-js',
				2646: 'wp-icons-undo-js',
				2649: 'wp-icons-heading-level-3-js',
				2663: 'wp-icons-line-solid-js',
				2759: 'wp-icons-map-marker-js',
				2845: 'wp-icons-arrow-up-js',
				2876: 'wp-icons-table-js',
				2884: 'wp-icons-keyboard-close-js',
				2887: 'wp-icons-remove-bug-js',
				2888: 'wp-icons-list-js',
				2895: 'wp-icons-insert-before-js',
				2905: 'wp-icons-arrow-left-js',
				2947: 'wp-icons-comment-reply-link-js',
				3056: 'wp-icons-connection-js',
				3065: 'wp-icons-buttons-js',
				3096: 'wp-icons-unseen-js',
				3174: 'wp-icons-sides-top-js',
				3246: 'wp-icons-chevron-up-down-js',
				3269: 'wp-icons-move-to-js',
				3323: 'wp-icons-heading-level-1-js',
				3416: 'wp-icons-format-ltr-js',
				3443: 'wp-icons-menu-js',
				3468: 'wp-icons-media-and-text-js',
				3498: 'wp-icons-custom-link-js',
				3515: 'wp-icons-external-js',
				3549: 'wp-icons-trending-up-js',
				3556: 'wp-icons-format-capitalize-js',
				3591: 'wp-icons-query-pagination-next-js',
				3615: 'wp-icons-capture-photo-js',
				3658: 'wp-icons-sides-all-js',
				3725: 'wp-icons-post-list-js',
				3827: 'wp-icons-post-comments-js',
				3885: 'wp-icons-post-date-js',
				3901: 'wp-icons-reusable-block-js',
				3903: 'wp-icons-bell-unread-js',
				3928: 'wp-icons-chevron-right-js',
				3963: 'wp-icons-seen-js',
				4001: 'wp-icons-header-js',
				4083: 'wp-icons-color-js',
				4088: 'wp-icons-check-js',
				4163: 'wp-icons-table-row-delete-js',
				4204: 'wp-icons-receipt-js',
				4240: 'wp-icons-sides-bottom-js',
				4246: 'wp-icons-heading-level-6-js',
				4253: 'wp-icons-bell-js',
				4257: 'wp-icons-cloud-upload-js',
				4261: 'wp-icons-cloud-js',
				4276: 'wp-icons-symbol-js',
				4283: 'wp-icons-home-js',
				4388: 'wp-icons-background-js',
				4406: 'wp-icons-post-excerpt-js',
				4412: 'wp-icons-envelope-js',
				4434: 'wp-icons-plus-circle-filled-js',
				4442: 'wp-icons-post-content-js',
				4523: 'wp-icons-pin-js',
				4551: 'wp-icons-rotate-left-js',
				4579: 'wp-icons-comment-edit-link-js',
				4600: 'wp-icons-tag-js',
				4640: 'wp-icons-thumbs-down-js',
				4789: 'wp-icons-more-js',
				4834: 'wp-icons-list-view-js',
				4852: 'wp-icons-sidebar-js',
				4883: 'wp-icons-table-of-contents-js',
				4887: 'wp-icons-people-js',
				4950: 'wp-icons-format-underline-js',
				4976: 'wp-icons-add-card-js',
				5010: 'wp-icons-heading-level-2-js',
				5044: 'wp-icons-level-up-js',
				5172: 'wp-icons-remove-submenu-js',
				5198: 'wp-icons-arrow-right-js',
				5226: 'wp-icons-drawer-left-js',
				5237: 'wp-icons-fullscreen-js',
				5268: 'wp-icons-funnel-js',
				5286: 'wp-icons-copy-js',
				5320: 'wp-icons-stack-js',
				5321: 'wp-icons-post-comments-count-js',
				5350: 'wp-icons-megaphone-js',
				5358: 'wp-icons-crop-js',
				5374: 'wp-icons-justify-left-js',
				5418: 'wp-icons-align-right-js',
				5445: 'wp-icons-align-center-js',
				5470: 'wp-icons-backup-js',
				5474: 'wp-icons-align-none-js',
				5529: 'wp-icons-post-categories-js',
				5595: 'wp-icons-copy-small-js',
				5640: 'wp-icons-download-js',
				5768: 'wp-icons-justify-bottom-js',
				5771: 'wp-icons-wordpress-js',
				5820: 'wp-icons-media-js',
				5859: 'wp-icons-resize-corner-n-e-js',
				5882: 'wp-icons-language-js',
				5933: 'wp-icons-upload-js',
				5935: 'wp-icons-video-js',
				6046: 'wp-icons-more-vertical-js',
				6129: 'wp-icons-tip-js',
				6144: 'wp-icons-overlay-text-js',
				6146: 'wp-icons-navigation-js',
				6152: 'wp-icons-format-outdent-rtl-js',
				6182: 'wp-icons-details-js',
				6193: 'wp-icons-lock-small-js',
				6260: 'wp-icons-justify-stretch-js',
				6340: 'wp-icons-edit-js',
				6341: 'wp-icons-text-color-js',
				6345: 'wp-icons-line-dotted-js',
				6363: 'wp-icons-query-pagination-js',
				6409: 'wp-icons-keyboard-js',
				6456: 'wp-icons-align-justify-js',
				6504: 'wp-icons-format-indent-js',
				6569: 'wp-icons-previous-js',
				6579: 'wp-icons-position-left-js',
				6629: 'wp-icons-box-js',
				6670: 'wp-icons-format-list-numbered-rtl-js',
				6671: 'wp-icons-cover-js',
				6699: 'wp-icons-key-js',
				6704: 'wp-icons-arrow-down-js',
				6705: 'wp-icons-image-js',
				6726: 'wp-icons-chevron-right-small-js',
				6781: 'wp-icons-align-left-js',
				6796: 'wp-icons-info-js',
				6828: 'wp-icons-stretch-full-width-js',
				6969: 'wp-icons-more-horizontal-mobile-js',
				6970: 'wp-icons-mobile-js',
				6973: 'wp-icons-subscript-js',
				7001: 'wp-icons-format-bold-js',
				7124: 'wp-icons-cancel-circle-filled-js',
				7138: 'wp-icons-star-half-js',
				7159: 'wp-icons-justify-center-vertical-js',
				7190: 'wp-icons-home-button-js',
				7203: 'wp-icons-lock-js',
				7227: 'wp-icons-shortcode-js',
				7230: 'wp-icons-gallery-js',
				7243: 'wp-icons-position-center-js',
				7274: 'wp-icons-close-small-js',
				7298: 'wp-icons-shipping-js',
				7312: 'wp-icons-sides-axial-js',
				7344: 'wp-icons-plus-js',
				7356: 'wp-icons-search-js',
				7376: 'wp-icons-block-table-js',
				7392: 'wp-icons-tablet-js',
				7408: 'wp-icons-link-js',
				7450: 'wp-icons-tool-js',
				7499: 'wp-icons-reset-js',
				7525: 'wp-icons-next-js',
				7529: 'wp-icons-chevron-left-small-js',
				7556: 'wp-icons-cloud-download-js',
				7562: 'wp-icons-styles-js',
				7570: 'wp-icons-published-js',
				7584: 'wp-icons-pages-js',
				7608: 'wp-icons-inbox-js',
				7614: 'wp-icons-flip-horizontal-js',
				7632: 'wp-icons-trending-down-js',
				7640: 'wp-icons-heading-level-4-js',
				7652: 'wp-icons-text-vertical-js',
				7663: 'wp-icons-sides-right-js',
				7705: 'wp-icons-pin-small-js',
				7738: 'wp-icons-post-js',
				7740: 'wp-icons-warning-js',
				7753: 'wp-icons-site-logo-js',
				7759: 'wp-icons-not-allowed-js',
				7770: 'wp-icons-insert-after-js',
				7777: 'wp-icons-format-list-numbered-js',
				7790: 'wp-icons-payment-js',
				7881: 'wp-icons-verse-js',
				7944: 'wp-icons-flip-vertical-js',
				7963: 'wp-icons-chevron-left-js',
				7973: 'wp-icons-percent-js',
				8057: 'wp-icons-format-list-bullets-rtl-js',
				8069: 'wp-icons-page-break-js',
				8142: 'wp-icons-calendar-js',
				8156: 'wp-icons-link-off-js',
				8182: 'wp-icons-keyboard-return-js',
				8202: 'wp-icons-audio-js',
				8210: 'wp-icons-filter-js',
				8277: 'wp-icons-pullquote-js',
				8305: 'wp-icons-comment-js',
				8439: 'wp-icons-custom-post-type-js',
				8550: 'wp-icons-post-author-js',
				8552: 'wp-icons-chart-bar-js',
				8637: 'wp-icons-format-strikethrough-js',
				8789: 'wp-icons-term-description-js',
				8847: 'wp-icons-heading-level-5-js',
				8894: 'wp-icons-justify-top-js',
				8899: 'wp-icons-cog-js',
				8957: 'wp-icons-update-js',
				8992: 'wp-icons-desktop-js',
				8994: 'wp-icons-institution-js',
				9012: 'wp-icons-chevron-down-small-js',
				9022: 'wp-icons-heading-js',
				9044: 'wp-icons-button-js',
				9062: 'wp-icons-sides-left-js',
				9092: 'wp-icons-shadow-js',
				9109: 'wp-icons-sides-vertical-js',
				9161: 'wp-icons-justify-stretch-vertical-js',
				9199: 'wp-icons-format-lowercase-js',
				9225: 'wp-icons-login-js',
				9250: 'wp-icons-text-horizontal-js',
				9298: 'wp-icons-column-js',
				9395: 'wp-icons-lifesaver-js',
				9399: 'wp-icons-justify-space-between-vertical-js',
				9400: 'wp-icons-currency-dollar-js',
				9407: 'wp-icons-columns-js',
				9437: 'wp-icons-shield-js',
				9455: 'wp-icons-arrow-down-right-js',
				9470: 'wp-icons-send-js',
				9523: 'wp-icons-add-submenu-js',
				9542: 'wp-icons-paragraph-js',
				9553: 'wp-icons-pencil-js',
				9561: 'wp-icons-settings-js',
				9636: 'wp-icons-row-js',
				9642: 'wp-icons-trash-js',
				9658: 'wp-icons-aspect-ratio-js',
				9668: 'wp-icons-rss-js',
				9694: 'wp-icons-border-js',
				9732: 'wp-icons-line-dashed-js',
				9754: 'wp-icons-drawer-right-js',
				9764: 'wp-icons-more-horizontal-js',
				9803: 'wp-icons-plus-circle-js',
				9872: 'wp-icons-redo-js',
				9875: 'wp-icons-table-column-delete-js',
				9918: 'wp-icons-table-row-after-js',
				9919: 'wp-icons-currency-euro-js',
				9972: 'wp-icons-post-terms-js',
			})[e] + '.js'),
		(o.miniCssF = (e) => {}),
		(o.g = (function () {
			if ('object' === typeof globalThis) {
				return globalThis;
			}
			try {
				return this || new Function('return this')();
			} catch (e) {
				if ('object' === typeof window) {
					return window;
				}
			}
		})()),
		(o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(r = {}),
		(n = 'algolia-search:'),
		(o.l = (e, t, a, s) => {
			if (r[e]) {
				r[e].push(t);
			} else {
				let i, c;
				if (void 0 !== a) {
					for (
						let l = document.getElementsByTagName('script'), u = 0;
						u < l.length;
						u++
					) {
						let d = l[u];
						if (
							d.getAttribute('src') == e ||
							d.getAttribute('data-webpack') == n + a
						) {
							i = d;
							break;
						}
					}
				}
				i ||
					((c = !0),
					((i = document.createElement('script')).charset = 'utf-8'),
					(i.timeout = 120),
					o.nc && i.setAttribute('nonce', o.nc),
					i.setAttribute('data-webpack', n + a),
					(i.src = e)),
					(r[e] = [t]);
				var h = (t, n) => {
						(i.onerror = i.onload = null), clearTimeout(p);
						const a = r[e];
						if (
							(delete r[e],
							i.parentNode && i.parentNode.removeChild(i),
							a && a.forEach((e) => e(n)),
							t)
						) {
							return t(n);
						}
					},
					p = setTimeout(
						h.bind(null, void 0, { type: 'timeout', target: i }),
						12e4
					);
				(i.onerror = h.bind(null, i.onerror)),
					(i.onload = h.bind(null, i.onload)),
					c && document.head.appendChild(i);
			}
		}),
		(o.r = (e) => {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {
					value: 'Module',
				}),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(() => {
			let e;
			o.g.importScripts && (e = o.g.location + '');
			const t = o.g.document;
			if (
				!e &&
				t &&
				(t.currentScript &&
					'SCRIPT' === t.currentScript.tagName.toUpperCase() &&
					(e = t.currentScript.src),
				!e)
			) {
				const r = t.getElementsByTagName('script');
				if (r.length) {
					for (
						let n = r.length - 1;
						n > -1 && (!e || !/^http(s?):/.test(e));

					)
						{e = r[n--].src;}}
			}
			if (!e) {
				throw new Error(
					'Automatic publicPath is not supported in this browser'
				);
			}
			(e = e
				.replace(/#.*$/, '')
				.replace(/\?.*$/, '')
				.replace(/\/[^\/]+$/, '/')),
				(o.p = e);
		})(),
		(() => {
			const e = { 3057: 0, 3111: 0 };
			o.f.j = (t, r) => {
				let n = o.o(e, t) ? e[t] : void 0;
				if (0 !== n) {
					if (n) {r.push(n[2]);}
					else {
						let a = new Promise((r, a) => (n = e[t] = [r, a]));
						r.push((n[2] = a));
						let s = o.p + o.u(t),
							i = new Error();
						o.l(
							s,
							(r) => {
								if (
									o.o(e, t) &&
									(0 !== (n = e[t]) && (e[t] = void 0), n)
								) {
									let a =
											r &&
											('load' === r.type
												? 'missing'
												: r.type),
										s = r && r.target && r.target.src;
									(i.message =
										'Loading chunk ' +
										t +
										' failed.\n(' +
										a +
										': ' +
										s +
										')'),
										(i.name = 'ChunkLoadError'),
										(i.type = a),
										(i.request = s),
										n[1](i);
								}
							},
							'chunk-' + t,
							t
						);
					}
				}
			};
			const t = (t, r) => {
					let n,
						a,
						s = r[0],
						i = r[1],
						c = r[2],
						l = 0;
					if (s.some((t) => 0 !== e[t])) {
						for (n in i) {o.o(i, n) && (o.m[n] = i[n]);}
						c && c(o);
					}
					for (t && t(r); l < s.length; l++)
						{(a = s[l]), o.o(e, a) && e[a] && e[a][0](), (e[a] = 0);}
				},
				r = (self.webpackChunkalgolia_search =
					self.webpackChunkalgolia_search || []);
			r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
		})(),
		(o.nc = void 0),
		(() => {
			'use strict';
			const e = window.React;
			let t,
				r,
				n = o.t(e, 2);
			function a() {
				return (
					(a = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (let t = 1; t < arguments.length; t++) {
									const r = arguments[t];
									for (const n in r) {
										Object.prototype.hasOwnProperty.call(
											r,
											n
										) && (e[n] = r[n]);
									}
								}
								return e;
							}),
					a.apply(this, arguments)
				);
			}
			function s(e, t) {
				if (!1 === e || null == e) {
					throw new Error(t);
				}
			}
			function i(e, t) {
				if (!e) {
					'undefined' !== typeof console && console.warn(t);
					try {
						throw new Error(t);
					} catch (e) {}
				}
			}
			function c(e, t, r, n) {
				return (
					void 0 === r && (r = null),
					a(
						{
							pathname: 'string' === typeof e ? e : e.pathname,
							search: '',
							hash: '',
						},
						'string' === typeof t ? u(t) : t,
						{
							state: r,
							key:
								(t && t.key) ||
								n ||
								Math.random().toString(36).substr(2, 8),
						}
					)
				);
			}
			function l(e) {
				let { pathname: t = '/', search: r = '', hash: n = '' } = e;
				return (
					r && '?' !== r && (t += '?' === r.charAt(0) ? r : '?' + r),
					n && '#' !== n && (t += '#' === n.charAt(0) ? n : '#' + n),
					t
				);
			}
			function u(e) {
				const t = {};
				if (e) {
					const r = e.indexOf('#');
					r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
					const n = e.indexOf('?');
					n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
						e && (t.pathname = e);
				}
				return t;
			}
			!(function (e) {
				(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
			})(t || (t = {})),
				(function (e) {
					(e.data = 'data'),
						(e.deferred = 'deferred'),
						(e.redirect = 'redirect'),
						(e.error = 'error');
				})(r || (r = {}));
			const d = new Set([
				'lazy',
				'caseSensitive',
				'path',
				'id',
				'index',
				'children',
			]);
			function h(e, t, r, n) {
				return (
					void 0 === r && (r = []),
					void 0 === n && (n = {}),
					e.map((e, o) => {
						const i = [...r, String(o)],
							c = 'string' === typeof e.id ? e.id : i.join('-');
						if (
							(s(
								!0 !== e.index || !e.children,
								'Cannot specify children on an index route'
							),
							s(
								!n[c],
								'Found a route id collision on id "' +
									c +
									'".  Route id\'s must be globally unique within Data Router usages'
							),
							(function (e) {
								return !0 === e.index;
							})(e))
						) {
							const r = a({}, e, t(e), { id: c });
							return (n[c] = r), r;
						}
						{
							const r = a({}, e, t(e), {
								id: c,
								children: void 0,
							});
							return (
								(n[c] = r),
								e.children &&
									(r.children = h(e.children, t, i, n)),
								r
							);
						}
					})
				);
			}
			function p(e, t, r) {
				return void 0 === r && (r = '/'), f(e, t, r, !1);
			}
			function f(e, t, r, n) {
				const a = q(
					('string' == typeof t ? u(t) : t).pathname || '/',
					r
				);
				if (null == a) {
					return null;
				}
				const s = m(e);
				!(function (e) {
					e.sort((e, t) =>
						e.score !== t.score
							? t.score - e.score
							: (function (e, t) {
									return e.length === t.length &&
										e
											.slice(0, -1)
											.every((e, r) => e === t[r])
										? e[e.length - 1] - t[t.length - 1]
										: 0;
								})(
									e.routesMeta.map((e) => e.childrenIndex),
									t.routesMeta.map((e) => e.childrenIndex)
								)
					);
				})(s);
				let o = null;
				for (let e = 0; null == o && e < s.length; ++e) {
					const t = C(a);
					o = S(s[e], t, n);
				}
				return o;
			}
			function m(e, t, r, n) {
				void 0 === t && (t = []),
					void 0 === r && (r = []),
					void 0 === n && (n = '');
				const a = (e, a, o) => {
					const i = {
						relativePath: void 0 === o ? e.path || '' : o,
						caseSensitive: !0 === e.caseSensitive,
						childrenIndex: a,
						route: e,
					};
					i.relativePath.startsWith('/') &&
						(s(
							i.relativePath.startsWith(n),
							'Absolute route path "' +
								i.relativePath +
								'" nested under path "' +
								n +
								'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
						),
						(i.relativePath = i.relativePath.slice(n.length)));
					const c = T([n, i.relativePath]),
						l = r.concat(i);
					e.children &&
						e.children.length > 0 &&
						(s(
							!0 !== e.index,
							'Index routes must not have child routes. Please remove all child routes from route path "' +
								c +
								'".'
						),
						m(e.children, t, l, c)),
						(null != e.path || e.index) &&
							t.push({
								path: c,
								score: P(c, e.index),
								routesMeta: l,
							});
				};
				return (
					e.forEach((e, t) => {
						let r;
						if (
							'' !== e.path &&
							null != (r = e.path) &&
							r.includes('?')
						) {
							for (let r of y(e.path)) a(e, t, r);
						} else {
							a(e, t);
						}
					}),
					t
				);
			}
			function y(e) {
				const t = e.split('/');
				if (0 === t.length) {
					return [];
				}
				const [r, ...n] = t,
					a = r.endsWith('?'),
					s = r.replace(/\?$/, '');
				if (0 === n.length) {
					return a ? [s, ''] : [s];
				}
				const o = y(n.join('/')),
					i = [];
				return (
					i.push(...o.map((e) => ('' === e ? s : [s, e].join('/')))),
					a && i.push(...o),
					i.map((t) => (e.startsWith('/') && '' === t ? '/' : t))
				);
			}
			const v = /^:[\w-]+$/,
				g = 3,
				w = 2,
				b = 1,
				j = 10,
				E = -2,
				x = (e) => '*' === e;
			function P(e, t) {
				let r = e.split('/'),
					n = r.length;
				return (
					r.some(x) && (n += E),
					t && (n += w),
					r
						.filter((e) => !x(e))
						.reduce(
							(e, t) => e + (v.test(t) ? g : '' === t ? b : j),
							n
						)
				);
			}
			function S(e, t, r) {
				void 0 === r && (r = !1);
				let { routesMeta: n } = e,
					a = {},
					s = '/',
					o = [];
				for (let e = 0; e < n.length; ++e) {
					let i = n[e],
						c = e === n.length - 1,
						l = '/' === s ? t : t.slice(s.length) || '/',
						u = R(
							{
								path: i.relativePath,
								caseSensitive: i.caseSensitive,
								end: c,
							},
							l
						),
						d = i.route;
					if (
						(!u &&
							c &&
							r &&
							!n[n.length - 1].route.index &&
							(u = R(
								{
									path: i.relativePath,
									caseSensitive: i.caseSensitive,
									end: !1,
								},
								l
							)),
						!u)
					) {
						return null;
					}
					Object.assign(a, u.params),
						o.push({
							params: a,
							pathname: T([s, u.pathname]),
							pathnameBase: N(T([s, u.pathnameBase])),
							route: d,
						}),
						'/' !== u.pathnameBase && (s = T([s, u.pathnameBase]));
				}
				return o;
			}
			function R(e, t) {
				'string' === typeof e &&
					(e = { path: e, caseSensitive: !1, end: !0 });
				const [r, n] = (function (e, t, r) {
						void 0 === t && (t = !1),
							void 0 === r && (r = !0),
							i(
								'*' === e ||
									!e.endsWith('*') ||
									e.endsWith('/*'),
								'Route path "' +
									e +
									'" will be treated as if it were "' +
									e.replace(/\*$/, '/*') +
									'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
									e.replace(/\*$/, '/*') +
									'".'
							);
						let n = [],
							a =
								'^' +
								e
									.replace(/\/*\*?$/, '')
									.replace(/^\/*/, '/')
									.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
									.replace(
										/\/:([\w-]+)(\?)?/g,
										(e, t, r) => (
											n.push({
												paramName: t,
												isOptional: null != r,
											}),
											r ? '/?([^\\/]+)?' : '/([^\\/]+)'
										)
									);
						return (
							e.endsWith('*')
								? (n.push({ paramName: '*' }),
									(a +=
										'*' === e || '/*' === e
											? '(.*)$'
											: '(?:\\/(.+)|\\/*)$'))
								: r
									? (a += '\\/*$')
									: '' !== e &&
										'/' !== e &&
										(a += '(?:(?=\\/|$))'),
							[new RegExp(a, t ? void 0 : 'i'), n]
						);
					})(e.path, e.caseSensitive, e.end),
					a = t.match(r);
				if (!a) {
					return null;
				}
				let s = a[0],
					o = s.replace(/(.)\/+$/, '$1'),
					c = a.slice(1);
				return {
					params: n.reduce((e, t, r) => {
						const { paramName: n, isOptional: a } = t;
						if ('*' === n) {
							const e = c[r] || '';
							o = s
								.slice(0, s.length - e.length)
								.replace(/(.)\/+$/, '$1');
						}
						const i = c[r];
						return (
							(e[n] =
								a && !i
									? void 0
									: (i || '').replace(/%2F/g, '/')),
							e
						);
					}, {}),
					pathname: s,
					pathnameBase: o,
					pattern: e,
				};
			}
			function C(e) {
				try {
					return e
						.split('/')
						.map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
						.join('/');
				} catch (t) {
					return (
						i(
							!1,
							'The URL path "' +
								e +
								'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
								t +
								').'
						),
						e
					);
				}
			}
			function q(e, t) {
				if ('/' === t) {
					return e;
				}
				if (!e.toLowerCase().startsWith(t.toLowerCase())) {
					return null;
				}
				const r = t.endsWith('/') ? t.length - 1 : t.length,
					n = e.charAt(r);
				return n && '/' !== n ? null : e.slice(r) || '/';
			}
			function k(e, t, r, n) {
				return (
					"Cannot include a '" +
					e +
					"' character in a manually specified `to." +
					t +
					'` field [' +
					JSON.stringify(n) +
					'].  Please separate it out to the `to.' +
					r +
					'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
				);
			}
			function O(e) {
				return e.filter(
					(e, t) =>
						0 === t || (e.route.path && e.route.path.length > 0)
				);
			}
			function D(e, t) {
				const r = O(e);
				return t
					? r.map((e, t) =>
							t === r.length - 1 ? e.pathname : e.pathnameBase
						)
					: r.map((e) => e.pathnameBase);
			}
			function I(e, t, r, n) {
				let o;
				void 0 === n && (n = !1),
					'string' === typeof e
						? (o = u(e))
						: ((o = a({}, e)),
							s(
								!o.pathname || !o.pathname.includes('?'),
								k('?', 'pathname', 'search', o)
							),
							s(
								!o.pathname || !o.pathname.includes('#'),
								k('#', 'pathname', 'hash', o)
							),
							s(
								!o.search || !o.search.includes('#'),
								k('#', 'search', 'hash', o)
							));
				let i,
					c = '' === e || '' === o.pathname,
					l = c ? '/' : o.pathname;
				if (null == l) {
					i = r;
				} else {
					let e = t.length - 1;
					if (!n && l.startsWith('..')) {
						const t = l.split('/');
						for (; '..' === t[0]; ) {
							t.shift(), (e -= 1);
						}
						o.pathname = t.join('/');
					}
					i = e >= 0 ? t[e] : '/';
				}
				const d = (function (e, t) {
						void 0 === t && (t = '/');
						const {
								pathname: r,
								search: n = '',
								hash: a = '',
							} = 'string' == typeof e ? u(e) : e,
							s = r
								? r.startsWith('/')
									? r
									: (function (e, t) {
											let r = t
												.replace(/\/+$/, '')
												.split('/');
											return (
												e.split('/').forEach((e) => {
													'..' === e
														? r.length > 1 &&
															r.pop()
														: '.' !== e &&
															r.push(e);
												}),
												r.length > 1 ? r.join('/') : '/'
											);
										})(r, t)
								: t;
						return { pathname: s, search: A(n), hash: M(a) };
					})(o, i),
					h = l && '/' !== l && l.endsWith('/'),
					p = (c || '.' === l) && r.endsWith('/');
				return (
					d.pathname.endsWith('/') ||
						(!h && !p) ||
						(d.pathname += '/'),
					d
				);
			}
			const T = (e) => e.join('/').replace(/\/\/+/g, '/'),
				N = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
				A = (e) =>
					e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : '',
				M = (e) =>
					e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '';
			Error;
			class U {
				constructor(e, t, r, n) {
					void 0 === n && (n = !1),
						(this.status = e),
						(this.statusText = t || ''),
						(this.internal = n),
						r instanceof Error
							? ((this.data = r.toString()), (this.error = r))
							: (this.data = r);
				}
			}
			function L(e) {
				return (
					null != e &&
					'number' === typeof e.status &&
					'string' === typeof e.statusText &&
					'boolean' === typeof e.internal &&
					'data' in e
				);
			}
			const F = ['post', 'put', 'patch', 'delete'],
				_ = new Set(F),
				Q = ['get', ...F],
				B = new Set(Q),
				K = new Set([301, 302, 303, 307, 308]),
				$ = new Set([307, 308]),
				z = {
					state: 'idle',
					location: void 0,
					formMethod: void 0,
					formAction: void 0,
					formEncType: void 0,
					formData: void 0,
					json: void 0,
					text: void 0,
				},
				H = {
					state: 'idle',
					data: void 0,
					formMethod: void 0,
					formAction: void 0,
					formEncType: void 0,
					formData: void 0,
					json: void 0,
					text: void 0,
				},
				W = {
					state: 'unblocked',
					proceed: void 0,
					reset: void 0,
					location: void 0,
				},
				G = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
				V = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }),
				J = 'remix-router-transitions';
			function X(e, t, r, n, a, s, o, i) {
				let c, u;
				if (o) {
					c = [];
					for (const e of t) {
						if ((c.push(e), e.route.id === o)) {
							u = e;
							break;
						}
					}
				} else {
					(c = t), (u = t[t.length - 1]);
				}
				const d = I(
					a || '.',
					D(c, s),
					q(e.pathname, r) || e.pathname,
					'path' === i
				);
				if (
					(null == a && ((d.search = e.search), (d.hash = e.hash)),
					(null == a || '' === a || '.' === a) && u)
				) {
					const e = De(d.search);
					if (u.route.index && !e) {
						d.search = d.search
							? d.search.replace(/^\?/, '?index&')
							: '?index';
					} else if (!u.route.index && e) {
						const e = new URLSearchParams(d.search),
							t = e.getAll('index');
						e.delete('index'),
							t
								.filter((e) => e)
								.forEach((t) => e.append('index', t));
						const r = e.toString();
						d.search = r ? '?' + r : '';
					}
				}
				return (
					n &&
						'/' !== r &&
						(d.pathname =
							'/' === d.pathname ? r : T([r, d.pathname])),
					l(d)
				);
			}
			function Y(e, t, r, n) {
				if (
					!n ||
					!(function (e) {
						return (
							null != e &&
							(('formData' in e && null != e.formData) ||
								('body' in e && void 0 !== e.body))
						);
					})(n)
				) {
					return { path: r };
				}
				if (
					n.formMethod &&
					((a = n.formMethod), !B.has(a.toLowerCase()))
				) {
					return {
						path: r,
						error: ge(405, { method: n.formMethod }),
					};
				}
				let a;
				let o,
					i,
					c = () => ({
						path: r,
						error: ge(400, { type: 'invalid-body' }),
					}),
					d = n.formMethod || 'get',
					h = e ? d.toUpperCase() : d.toLowerCase(),
					p = be(r);
				if (void 0 !== n.body) {
					if ('text/plain' === n.formEncType) {
						if (!Ce(h)) {
							return c();
						}
						const e =
							'string' === typeof n.body
								? n.body
								: n.body instanceof FormData ||
									  n.body instanceof URLSearchParams
									? Array.from(n.body.entries()).reduce(
											(e, t) => {
												const [r, n] = t;
												return (
													'' + e + r + '=' + n + '\n'
												);
											},
											''
										)
									: String(n.body);
						return {
							path: r,
							submission: {
								formMethod: h,
								formAction: p,
								formEncType: n.formEncType,
								formData: void 0,
								json: void 0,
								text: e,
							},
						};
					}
					if ('application/json' === n.formEncType) {
						if (!Ce(h)) {
							return c();
						}
						try {
							const e =
								'string' === typeof n.body
									? JSON.parse(n.body)
									: n.body;
							return {
								path: r,
								submission: {
									formMethod: h,
									formAction: p,
									formEncType: n.formEncType,
									formData: void 0,
									json: e,
									text: void 0,
								},
							};
						} catch (e) {
							return c();
						}
					}
				}
				if (
					(s(
						'function' === typeof FormData,
						'FormData is not available in this environment'
					),
					n.formData)
				) {
					(o = de(n.formData)), (i = n.formData);
				} else if (n.body instanceof FormData) {
					(o = de(n.body)), (i = n.body);
				} else if (n.body instanceof URLSearchParams) {
					(o = n.body), (i = he(o));
				} else if (null == n.body) {
					(o = new URLSearchParams()), (i = new FormData());
				} else {
					try {
						(o = new URLSearchParams(n.body)), (i = he(o));
					} catch (e) {
						return c();
					}
				}
				const f = {
					formMethod: h,
					formAction: p,
					formEncType:
						(n && n.formEncType) ||
						'application/x-www-form-urlencoded',
					formData: i,
					json: void 0,
					text: void 0,
				};
				if (Ce(f.formMethod)) {
					return { path: r, submission: f };
				}
				const m = u(r);
				return (
					t && m.search && De(m.search) && o.append('index', ''),
					(m.search = '?' + o),
					{ path: l(m), submission: f }
				);
			}
			function Z(e, t, r) {
				void 0 === r && (r = !1);
				const n = e.findIndex((e) => e.route.id === t);
				return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
			}
			function ee(e, t, r, n, s, o, i, c, l, u, d, h, f, m, y, v) {
				let g = v ? (xe(v[1]) ? v[1].error : v[1].data) : void 0,
					w = e.createURL(t.location),
					b = e.createURL(s),
					j = r;
				o && t.errors
					? (j = Z(r, Object.keys(t.errors)[0], !0))
					: v && xe(v[1]) && (j = Z(r, v[0]));
				const E = v ? v[1].statusCode : void 0,
					x = i && E && E >= 400,
					P = j.filter((e, r) => {
						const { route: s } = e;
						if (s.lazy) {return !0;}
						if (null == s.loader) {return !1;}
						if (o) {return te(s, t.loaderData, t.errors);}
						if (
							(function (e, t, r) {
								const n = !t || r.route.id !== t.route.id,
									a = void 0 === e[r.route.id];
								return n || a;
							})(t.loaderData, t.matches[r], e) ||
							l.some((t) => t === e.route.id)
						)
							{return !0;}
						const i = t.matches[r],
							u = e;
						return ne(
							e,
							a(
								{
									currentUrl: w,
									currentParams: i.params,
									nextUrl: b,
									nextParams: u.params,
								},
								n,
								{
									actionResult: g,
									actionStatus: E,
									defaultShouldRevalidate:
										!x &&
										(c ||
											w.pathname + w.search ===
												b.pathname + b.search ||
											w.search !== b.search ||
											re(i, u)),
								}
							)
						);
					}),
					S = [];
				return (
					h.forEach((e, s) => {
						if (
							o ||
							!r.some((t) => t.route.id === e.routeId) ||
							d.has(s)
						) {
							return;
						}
						const i = p(m, e.path, y);
						if (!i) {
							return void S.push({
								key: s,
								routeId: e.routeId,
								path: e.path,
								matches: null,
								match: null,
								controller: null,
							});
						}
						let l = t.fetchers.get(s),
							h = Ie(i, e.path),
							v = !1;
						f.has(s)
							? (v = !1)
							: u.has(s)
								? (u.delete(s), (v = !0))
								: (v =
										l &&
										'idle' !== l.state &&
										void 0 === l.data
											? c
											: ne(
													h,
													a(
														{
															currentUrl: w,
															currentParams:
																t.matches[
																	t.matches
																		.length -
																		1
																].params,
															nextUrl: b,
															nextParams:
																r[r.length - 1]
																	.params,
														},
														n,
														{
															actionResult: g,
															actionStatus: E,
															defaultShouldRevalidate:
																!x && c,
														}
													)
												)),
							v &&
								S.push({
									key: s,
									routeId: e.routeId,
									path: e.path,
									matches: i,
									match: h,
									controller: new AbortController(),
								});
					}),
					[P, S]
				);
			}
			function te(e, t, r) {
				if (e.lazy) {
					return !0;
				}
				if (!e.loader) {
					return !1;
				}
				const n = null != t && void 0 !== t[e.id],
					a = null != r && void 0 !== r[e.id];
				return (
					!(!n && a) &&
					(('function' === typeof e.loader &&
						!0 === e.loader.hydrate) ||
						(!n && !a))
				);
			}
			function re(e, t) {
				const r = e.route.path;
				return (
					e.pathname !== t.pathname ||
					(null != r &&
						r.endsWith('*') &&
						e.params['*'] !== t.params['*'])
				);
			}
			function ne(e, t) {
				if (e.route.shouldRevalidate) {
					const r = e.route.shouldRevalidate(t);
					if ('boolean' === typeof r) {
						return r;
					}
				}
				return t.defaultShouldRevalidate;
			}
			function ae(e, t, r, n, a) {
				let o;
				let i;
				if (e) {
					const t = n[e];
					s(
						t,
						'No route found to patch children into: routeId = ' + e
					),
						t.children || (t.children = []),
						(i = t.children);
				} else {
					i = r;
				}
				const c = h(
					t.filter((e) => !i.some((t) => se(e, t))),
					a,
					[
						e || '_',
						'patch',
						String((null == (o = i) ? void 0 : o.length) || '0'),
					],
					n
				);
				i.push(...c);
			}
			function se(e, t) {
				return (
					('id' in e && 'id' in t && e.id === t.id) ||
					(e.index === t.index &&
						e.path === t.path &&
						e.caseSensitive === t.caseSensitive &&
						(!(
							(e.children && 0 !== e.children.length) ||
							(t.children && 0 !== t.children.length)
						) ||
							e.children.every((e, r) => {
								let n;
								return null == (n = t.children)
									? void 0
									: n.some((t) => se(e, t));
							})))
				);
			}
			async function oe(e) {
				let { matches: t } = e,
					r = t.filter((e) => e.shouldLoad),
					n = await Promise.all(r.map((e) => e.resolve()));
				return n.reduce(
					(e, t, n) => Object.assign(e, { [r[n].route.id]: t }),
					{}
				);
			}
			async function ie(e) {
				let { result: t, type: n } = e;
				if (Re(t)) {
					let e;
					try {
						const r = t.headers.get('Content-Type');
						e =
							r && /\bapplication\/json\b/.test(r)
								? null == t.body
									? null
									: await t.json()
								: await t.text();
					} catch (e) {
						return { type: r.error, error: e };
					}
					return n === r.error
						? {
								type: r.error,
								error: new U(t.status, t.statusText, e),
								statusCode: t.status,
								headers: t.headers,
							}
						: {
								type: r.data,
								data: e,
								statusCode: t.status,
								headers: t.headers,
							};
				}
				if (n === r.error) {
					if (Se(t)) {
						let a, s;
						if (t.data instanceof Error) {
							return {
								type: r.error,
								error: t.data,
								statusCode:
									null == (s = t.init) ? void 0 : s.status,
							};
						}
						t = new U(
							(null == (a = t.init) ? void 0 : a.status) || 500,
							void 0,
							t.data
						);
					}
					return {
						type: r.error,
						error: t,
						statusCode: L(t) ? t.status : void 0,
					};
				}
				let o, i, c, l;
				return (function (e) {
					const t = e;
					return (
						t &&
						'object' === typeof t &&
						'object' === typeof t.data &&
						'function' === typeof t.subscribe &&
						'function' === typeof t.cancel &&
						'function' === typeof t.resolveData
					);
				})(t)
					? {
							type: r.deferred,
							deferredData: t,
							statusCode:
								null == (o = t.init) ? void 0 : o.status,
							headers:
								(null == (i = t.init) ? void 0 : i.headers) &&
								new Headers(t.init.headers),
						}
					: Se(t)
						? {
								type: r.data,
								data: t.data,
								statusCode:
									null == (c = t.init) ? void 0 : c.status,
								headers:
									null != (l = t.init) && l.headers
										? new Headers(t.init.headers)
										: void 0,
							}
						: { type: r.data, data: t };
			}
			function ce(e, t, r, n, a, o) {
				let i = e.headers.get('Location');
				if (
					(s(
						i,
						'Redirects returned/thrown from loaders/actions must have a Location header'
					),
					!G.test(i))
				) {
					const s = n.slice(
						0,
						n.findIndex((e) => e.route.id === r) + 1
					);
					(i = X(new URL(t.url), s, a, !0, i, o)),
						e.headers.set('Location', i);
				}
				return e;
			}
			function le(e, t, r) {
				if (G.test(e)) {
					const n = e,
						a = n.startsWith('//')
							? new URL(t.protocol + n)
							: new URL(n),
						s = null != q(a.pathname, r);
					if (a.origin === t.origin && s) {
						return a.pathname + a.search + a.hash;
					}
				}
				return e;
			}
			function ue(e, t, r, n) {
				const a = e.createURL(be(t)).toString(),
					s = { signal: r };
				if (n && Ce(n.formMethod)) {
					const { formMethod: e, formEncType: t } = n;
					(s.method = e.toUpperCase()),
						'application/json' === t
							? ((s.headers = new Headers({ 'Content-Type': t })),
								(s.body = JSON.stringify(n.json)))
							: 'text/plain' === t
								? (s.body = n.text)
								: 'application/x-www-form-urlencoded' === t &&
									  n.formData
									? (s.body = de(n.formData))
									: (s.body = n.formData);
				}
				return new Request(a, s);
			}
			function de(e) {
				const t = new URLSearchParams();
				for (const [r, n] of e.entries()) {
					t.append(r, 'string' == typeof n ? n : n.name);
				}
				return t;
			}
			function he(e) {
				const t = new FormData();
				for (const [r, n] of e.entries()) {
					t.append(r, n);
				}
				return t;
			}
			function pe(e, t, r, n, o, i, c) {
				let { loaderData: l, errors: u } = (function (e, t, r, n, a) {
					let o,
						i = {},
						c = null,
						l = !1,
						u = {},
						d = r && xe(r[1]) ? r[1].error : void 0;
					return (
						e.forEach((r) => {
							if (!(r.route.id in t)) {
								return;
							}
							const h = r.route.id,
								p = t[h];
							if (
								(s(
									!Pe(p),
									'Cannot handle redirect results in processLoaderData'
								),
								xe(p))
							) {
								let t = p.error;
								if (
									(void 0 !== d && ((t = d), (d = void 0)),
									(c = c || {}),
									a)
								) {
									c[h] = t;
								} else {
									const r = ye(e, h);
									null == c[r.route.id] &&
										(c[r.route.id] = t);
								}
								(i[h] = void 0),
									l ||
										((l = !0),
										(o = L(p.error)
											? p.error.status
											: 500)),
									p.headers && (u[h] = p.headers);
							} else {
								Ee(p)
									? (n.set(h, p.deferredData),
										(i[h] = p.deferredData.data),
										null == p.statusCode ||
											200 === p.statusCode ||
											l ||
											(o = p.statusCode),
										p.headers && (u[h] = p.headers))
									: ((i[h] = p.data),
										p.statusCode &&
											200 !== p.statusCode &&
											!l &&
											(o = p.statusCode),
										p.headers && (u[h] = p.headers));
							}
						}),
						void 0 !== d &&
							r &&
							((c = { [r[0]]: d }), (i[r[0]] = void 0)),
						{
							loaderData: i,
							errors: c,
							statusCode: o || 200,
							loaderHeaders: u,
						}
					);
				})(t, r, n, c, !1);
				return (
					o.forEach((t) => {
						let { key: r, match: n, controller: o } = t,
							c = i[r];
						if (
							(s(c, 'Did not find corresponding fetcher result'),
							!o || !o.signal.aborted)
						) {
							if (xe(c)) {
								const t = ye(
									e.matches,
									null == n ? void 0 : n.route.id
								);
								(u && u[t.route.id]) ||
									(u = a({}, u, { [t.route.id]: c.error })),
									e.fetchers.delete(r);
							} else if (Pe(c))
								{s(
									!1,
									'Unhandled fetcher revalidation redirect'
								);}
							else if (Ee(c))
								{s(!1, 'Unhandled fetcher deferred data');}
							else {
								const t = Me(c.data);
								e.fetchers.set(r, t);
							}
						}
					}),
					{ loaderData: l, errors: u }
				);
			}
			function fe(e, t, r, n) {
				const s = a({}, t);
				for (const a of r) {
					const r = a.route.id;
					if (
						(t.hasOwnProperty(r)
							? void 0 !== t[r] && (s[r] = t[r])
							: void 0 !== e[r] &&
								a.route.loader &&
								(s[r] = e[r]),
						n && n.hasOwnProperty(r))
					) {
						break;
					}
				}
				return s;
			}
			function me(e) {
				return e
					? xe(e[1])
						? { actionData: {} }
						: { actionData: { [e[0]]: e[1].data } }
					: {};
			}
			function ye(e, t) {
				const r = t
					? e.slice(0, e.findIndex((e) => e.route.id === t) + 1)
					: [...e];
				return (
					r.reverse().find((e) => !0 === e.route.hasErrorBoundary) ||
					e[0]
				);
			}
			function ve(e) {
				const t =
					1 === e.length
						? e[0]
						: e.find(
								(e) => e.index || !e.path || '/' === e.path
							) || { id: '__shim-error-route__' };
				return {
					matches: [
						{
							params: {},
							pathname: '',
							pathnameBase: '',
							route: t,
						},
					],
					route: t,
				};
			}
			function ge(e, t) {
				let {
						pathname: r,
						routeId: n,
						method: a,
						type: s,
						message: o,
					} = void 0 === t ? {} : t,
					i = 'Unknown Server Error',
					c = 'Unknown @remix-run/router error';
				return (
					400 === e
						? ((i = 'Bad Request'),
							a && r && n
								? (c =
										'You made a ' +
										a +
										' request to "' +
										r +
										'" but did not provide a `loader` for route "' +
										n +
										'", so there is no way to handle the request.')
								: 'defer-action' === s
									? (c =
											'defer() is not supported in actions')
									: 'invalid-body' === s &&
										(c =
											'Unable to encode submission body'))
						: 403 === e
							? ((i = 'Forbidden'),
								(c =
									'Route "' +
									n +
									'" does not match URL "' +
									r +
									'"'))
							: 404 === e
								? ((i = 'Not Found'),
									(c = 'No route matches URL "' + r + '"'))
								: 405 === e &&
									((i = 'Method Not Allowed'),
									a && r && n
										? (c =
												'You made a ' +
												a.toUpperCase() +
												' request to "' +
												r +
												'" but did not provide an `action` for route "' +
												n +
												'", so there is no way to handle the request.')
										: a &&
											(c =
												'Invalid request method "' +
												a.toUpperCase() +
												'"')),
					new U(e || 500, i, new Error(c), !0)
				);
			}
			function we(e) {
				const t = Object.entries(e);
				for (let e = t.length - 1; e >= 0; e--) {
					const [r, n] = t[e];
					if (Pe(n)) {
						return { key: r, result: n };
					}
				}
			}
			function be(e) {
				return l(a({}, 'string' === typeof e ? u(e) : e, { hash: '' }));
			}
			function je(e) {
				return Re(e.result) && K.has(e.result.status);
			}
			function Ee(e) {
				return e.type === r.deferred;
			}
			function xe(e) {
				return e.type === r.error;
			}
			function Pe(e) {
				return (e && e.type) === r.redirect;
			}
			function Se(e) {
				return (
					'object' === typeof e &&
					null != e &&
					'type' in e &&
					'data' in e &&
					'init' in e &&
					'DataWithResponseInit' === e.type
				);
			}
			function Re(e) {
				return (
					null != e &&
					'number' === typeof e.status &&
					'string' === typeof e.statusText &&
					'object' === typeof e.headers &&
					void 0 !== e.body
				);
			}
			function Ce(e) {
				return _.has(e.toLowerCase());
			}
			async function qe(e, t, r, n, a) {
				const s = Object.entries(t);
				for (let o = 0; o < s.length; o++) {
					const [i, c] = s[o],
						l = e.find(
							(e) => (null == e ? void 0 : e.route.id) === i
						);
					if (!l) {
						continue;
					}
					const u = n.find((e) => e.route.id === l.route.id),
						d =
							null != u &&
							!re(u, l) &&
							void 0 !== (a && a[l.route.id]);
					Ee(c) &&
						d &&
						(await Oe(c, r, !1).then((e) => {
							e && (t[i] = e);
						}));
				}
			}
			async function ke(e, t, r) {
				for (let n = 0; n < r.length; n++) {
					const { key: a, routeId: o, controller: i } = r[n],
						c = t[a],
						l = e.find(
							(e) => (null == e ? void 0 : e.route.id) === o
						);
					l &&
						Ee(c) &&
						(s(
							i,
							'Expected an AbortController for revalidating fetcher deferred result'
						),
						await Oe(c, i.signal, !0).then((e) => {
							e && (t[a] = e);
						}));
				}
			}
			async function Oe(e, t, n) {
				if (
					(void 0 === n && (n = !1),
					!(await e.deferredData.resolveData(t)))
				) {
					if (n) {
						try {
							return {
								type: r.data,
								data: e.deferredData.unwrappedData,
							};
						} catch (e) {
							return { type: r.error, error: e };
						}
					}
					return { type: r.data, data: e.deferredData.data };
				}
			}
			function De(e) {
				return new URLSearchParams(e)
					.getAll('index')
					.some((e) => '' === e);
			}
			function Ie(e, t) {
				const r = 'string' === typeof t ? u(t).search : t.search;
				if (e[e.length - 1].route.index && De(r || '')) {
					return e[e.length - 1];
				}
				const n = O(e);
				return n[n.length - 1];
			}
			function Te(e) {
				const {
					formMethod: t,
					formAction: r,
					formEncType: n,
					text: a,
					formData: s,
					json: o,
				} = e;
				if (t && r && n) {
					return null != a
						? {
								formMethod: t,
								formAction: r,
								formEncType: n,
								formData: void 0,
								json: void 0,
								text: a,
							}
						: null != s
							? {
									formMethod: t,
									formAction: r,
									formEncType: n,
									formData: s,
									json: void 0,
									text: void 0,
								}
							: void 0 !== o
								? {
										formMethod: t,
										formAction: r,
										formEncType: n,
										formData: void 0,
										json: o,
										text: void 0,
									}
								: void 0;
				}
			}
			function Ne(e, t) {
				return t
					? {
							state: 'loading',
							location: e,
							formMethod: t.formMethod,
							formAction: t.formAction,
							formEncType: t.formEncType,
							formData: t.formData,
							json: t.json,
							text: t.text,
						}
					: {
							state: 'loading',
							location: e,
							formMethod: void 0,
							formAction: void 0,
							formEncType: void 0,
							formData: void 0,
							json: void 0,
							text: void 0,
						};
			}
			function Ae(e, t) {
				return e
					? {
							state: 'loading',
							formMethod: e.formMethod,
							formAction: e.formAction,
							formEncType: e.formEncType,
							formData: e.formData,
							json: e.json,
							text: e.text,
							data: t,
						}
					: {
							state: 'loading',
							formMethod: void 0,
							formAction: void 0,
							formEncType: void 0,
							formData: void 0,
							json: void 0,
							text: void 0,
							data: t,
						};
			}
			function Me(e) {
				return {
					state: 'idle',
					formMethod: void 0,
					formAction: void 0,
					formEncType: void 0,
					formData: void 0,
					json: void 0,
					text: void 0,
					data: e,
				};
			}
			function Ue() {
				return (
					(Ue = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (let t = 1; t < arguments.length; t++) {
									const r = arguments[t];
									for (const n in r) {
										Object.prototype.hasOwnProperty.call(
											r,
											n
										) && (e[n] = r[n]);
									}
								}
								return e;
							}),
					Ue.apply(this, arguments)
				);
			}
			Symbol('deferred');
			const Le = e.createContext(null),
				Fe = e.createContext(null),
				_e = e.createContext(null),
				Qe = e.createContext(null),
				Be = e.createContext({
					outlet: null,
					matches: [],
					isDataRoute: !1,
				}),
				Ke = e.createContext(null);
			function $e() {
				return null != e.useContext(Qe);
			}
			function ze() {
				return $e() || s(!1), e.useContext(Qe).location;
			}
			function He(t) {
				e.useContext(_e).static || e.useLayoutEffect(t);
			}
			function We() {
				const { isDataRoute: t } = e.useContext(Be);
				return t
					? (function () {
							const { router: t } = (function () {
									const t = e.useContext(Le);
									return t || s(!1), t;
								})(et.UseNavigateStable),
								r = rt(tt.UseNavigateStable),
								n = e.useRef(!1);
							He(() => {
								n.current = !0;
							});
							const a = e.useCallback(
								function (e, a) {
									void 0 === a && (a = {}),
										n.current &&
											('number' === typeof e
												? t.navigate(e)
												: t.navigate(
														e,
														Ue(
															{ fromRouteId: r },
															a
														)
													));
								},
								[t, r]
							);
							return a;
						})()
					: (function () {
							$e() || s(!1);
							const t = e.useContext(Le),
								{
									basename: r,
									future: n,
									navigator: a,
								} = e.useContext(_e),
								{ matches: o } = e.useContext(Be),
								{ pathname: i } = ze(),
								c = JSON.stringify(
									D(o, n.v7_relativeSplatPath)
								),
								l = e.useRef(!1);
							He(() => {
								l.current = !0;
							});
							const u = e.useCallback(
								function (e, n) {
									if ((void 0 === n && (n = {}), !l.current))
										{return;}
									if ('number' === typeof e)
										{return void a.go(e);}
									const s = I(
										e,
										JSON.parse(c),
										i,
										'path' === n.relative
									);
									null == t &&
										'/' !== r &&
										(s.pathname =
											'/' === s.pathname
												? r
												: T([r, s.pathname])),
										(n.replace ? a.replace : a.push)(
											s,
											n.state,
											n
										);
								},
								[r, a, c, i, t]
							);
							return u;
						})();
			}
			const Ge = e.createContext(null);
			function Ve(r, n, a, o) {
				$e() || s(!1);
				const { navigator: i } = e.useContext(_e),
					{ matches: c } = e.useContext(Be),
					l = c[c.length - 1],
					d = l ? l.params : {},
					h = (l && l.pathname, l ? l.pathnameBase : '/');
				l && l.route;
				let f,
					m = ze();
				if (n) {
					let y;
					const e = 'string' === typeof n ? u(n) : n;
					'/' === h ||
						(null == (y = e.pathname) ? void 0 : y.startsWith(h)) ||
						s(!1),
						(f = e);
				} else {
					f = m;
				}
				let v = f.pathname || '/',
					g = v;
				if ('/' !== h) {
					const e = h.replace(/^\//, '').split('/');
					g =
						'/' +
						v
							.replace(/^\//, '')
							.split('/')
							.slice(e.length)
							.join('/');
				}
				const w = p(r, { pathname: g }),
					b = (function (t, r, n, a) {
						let o;
						if (
							(void 0 === r && (r = []),
							void 0 === n && (n = null),
							void 0 === a && (a = null),
							null == t)
						) {
							let i;
							if (!n) {return null;}
							if (n.errors) {t = n.matches;}
							else {
								if (
									!(
										null != (i = a) &&
										i.v7_partialHydration &&
										0 === r.length &&
										!n.initialized &&
										n.matches.length > 0
									)
								)
									{return null;}
								t = n.matches;
							}
						}
						let c = t,
							l = null == (o = n) ? void 0 : o.errors;
						if (null != l) {
							const e = c.findIndex(
								(e) =>
									e.route.id &&
									void 0 !==
										(null == l ? void 0 : l[e.route.id])
							);
							e >= 0 || s(!1),
								(c = c.slice(0, Math.min(c.length, e + 1)));
						}
						let u = !1,
							d = -1;
						if (n && a && a.v7_partialHydration)
							{for (let e = 0; e < c.length; e++) {
								let t = c[e];
								if (
									((t.route.HydrateFallback ||
										t.route.hydrateFallbackElement) &&
										(d = e),
									t.route.id)
								) {
									let { loaderData: e, errors: r } = n,
										a =
											t.route.loader &&
											void 0 === e[t.route.id] &&
											(!r || void 0 === r[t.route.id]);
									if (t.route.lazy || a) {
										(u = !0),
											(c =
												d >= 0
													? c.slice(0, d + 1)
													: [c[0]]);
										break;
									}
								}
							}}
						return c.reduceRight((t, a, s) => {
							let o,
								i = !1,
								h = null,
								p = null;
							let f;
							n &&
								((o = l && a.route.id ? l[a.route.id] : void 0),
								(h = a.route.errorElement || Xe),
								u &&
									(d < 0 && 0 === s
										? (nt[(f = 'route-fallback')] ||
												(nt[f] = !0),
											(i = !0),
											(p = null))
										: d === s &&
											((i = !0),
											(p =
												a.route
													.hydrateFallbackElement ||
												null))));
							const m = r.concat(c.slice(0, s + 1)),
								y = () => {
									let r;
									return (
										(r = o
											? h
											: i
												? p
												: a.route.Component
													? e.createElement(
															a.route.Component,
															null
														)
													: a.route.element
														? a.route.element
														: t),
										e.createElement(Ze, {
											match: a,
											routeContext: {
												outlet: t,
												matches: m,
												isDataRoute: null != n,
											},
											children: r,
										})
									);
								};
							return n &&
								(a.route.ErrorBoundary ||
									a.route.errorElement ||
									0 === s)
								? e.createElement(Ye, {
										location: n.location,
										revalidation: n.revalidation,
										component: h,
										error: o,
										children: y(),
										routeContext: {
											outlet: null,
											matches: m,
											isDataRoute: !0,
										},
									})
								: y();
						}, null);
					})(
						w &&
							w.map((e) =>
								Object.assign({}, e, {
									params: Object.assign({}, d, e.params),
									pathname: T([
										h,
										i.encodeLocation
											? i.encodeLocation(e.pathname)
													.pathname
											: e.pathname,
									]),
									pathnameBase:
										'/' === e.pathnameBase
											? h
											: T([
													h,
													i.encodeLocation
														? i.encodeLocation(
																e.pathnameBase
															).pathname
														: e.pathnameBase,
												]),
								})
							),
						c,
						a,
						o
					);
				return n && b
					? e.createElement(
							Qe.Provider,
							{
								value: {
									location: Ue(
										{
											pathname: '/',
											search: '',
											hash: '',
											state: null,
											key: 'default',
										},
										f
									),
									navigationType: t.Pop,
								},
							},
							b
						)
					: b;
			}
			function Je() {
				const t = (function () {
						let t;
						const r = e.useContext(Ke),
							n = (function () {
								let t = e.useContext(Fe);
								return t || s(!1), t;
							})(tt.UseRouteError),
							a = rt(tt.UseRouteError);
						return void 0 !== r
							? r
							: null == (t = n.errors)
								? void 0
								: t[a];
					})(),
					r = L(t)
						? t.status + ' ' + t.statusText
						: t instanceof Error
							? t.message
							: JSON.stringify(t),
					n = t instanceof Error ? t.stack : null,
					a = {
						padding: '0.5rem',
						backgroundColor: 'rgba(200,200,200, 0.5)',
					};
				return e.createElement(
					e.Fragment,
					null,
					e.createElement(
						'h2',
						null,
						'Unexpected Application Error!'
					),
					e.createElement(
						'h3',
						{ style: { fontStyle: 'italic' } },
						r
					),
					n ? e.createElement('pre', { style: a }, n) : null,
					null
				);
			}
			const Xe = e.createElement(Je, null);
			class Ye extends e.Component {
				constructor(e) {
					super(e),
						(this.state = {
							location: e.location,
							revalidation: e.revalidation,
							error: e.error,
						});
				}
				static getDerivedStateFromError(e) {
					return { error: e };
				}
				static getDerivedStateFromProps(e, t) {
					return t.location !== e.location ||
						('idle' !== t.revalidation && 'idle' === e.revalidation)
						? {
								error: e.error,
								location: e.location,
								revalidation: e.revalidation,
							}
						: {
								error: void 0 !== e.error ? e.error : t.error,
								location: t.location,
								revalidation: e.revalidation || t.revalidation,
							};
				}
				componentDidCatch(e, t) {
					console.error(
						'React Router caught the following error during render',
						e,
						t
					);
				}
				render() {
					return void 0 !== this.state.error
						? e.createElement(
								Be.Provider,
								{ value: this.props.routeContext },
								e.createElement(Ke.Provider, {
									value: this.state.error,
									children: this.props.component,
								})
							)
						: this.props.children;
				}
			}
			function Ze(t) {
				let { routeContext: r, match: n, children: a } = t,
					s = e.useContext(Le);
				return (
					s &&
						s.static &&
						s.staticContext &&
						(n.route.errorElement || n.route.ErrorBoundary) &&
						(s.staticContext._deepestRenderedBoundaryId =
							n.route.id),
					e.createElement(Be.Provider, { value: r }, a)
				);
			}
			var et = (function (e) {
					return (
						(e.UseBlocker = 'useBlocker'),
						(e.UseRevalidator = 'useRevalidator'),
						(e.UseNavigateStable = 'useNavigate'),
						e
					);
				})(et || {}),
				tt = (function (e) {
					return (
						(e.UseBlocker = 'useBlocker'),
						(e.UseLoaderData = 'useLoaderData'),
						(e.UseActionData = 'useActionData'),
						(e.UseRouteError = 'useRouteError'),
						(e.UseNavigation = 'useNavigation'),
						(e.UseRouteLoaderData = 'useRouteLoaderData'),
						(e.UseMatches = 'useMatches'),
						(e.UseRevalidator = 'useRevalidator'),
						(e.UseNavigateStable = 'useNavigate'),
						(e.UseRouteId = 'useRouteId'),
						e
					);
				})(tt || {});
			function rt(t) {
				const r = (function () {
						const t = e.useContext(Be);
						return t || s(!1), t;
					})(),
					n = r.matches[r.matches.length - 1];
				return n.route.id || s(!1), n.route.id;
			}
			const nt = {};
			function at(t) {
				return (function (t) {
					const r = e.useContext(Be).outlet;
					return r
						? e.createElement(Ge.Provider, { value: t }, r)
						: r;
				})(t.context);
			}
			function st(r) {
				let {
					basename: n = '/',
					children: a = null,
					location: o,
					navigationType: i = t.Pop,
					navigator: c,
					static: l = !1,
					future: d,
				} = r;
				$e() && s(!1);
				const h = n.replace(/^\/*/, '/'),
					p = e.useMemo(
						() => ({
							basename: h,
							navigator: c,
							static: l,
							future: Ue({ v7_relativeSplatPath: !1 }, d),
						}),
						[h, d, c, l]
					);
				'string' === typeof o && (o = u(o));
				let {
						pathname: f = '/',
						search: m = '',
						hash: y = '',
						state: v = null,
						key: g = 'default',
					} = o,
					w = e.useMemo(() => {
						const e = q(f, h);
						return null == e
							? null
							: {
									location: {
										pathname: e,
										search: m,
										hash: y,
										state: v,
										key: g,
									},
									navigationType: i,
								};
					}, [h, f, m, y, v, g, i]);
				return null == w
					? null
					: e.createElement(
							_e.Provider,
							{ value: p },
							e.createElement(Qe.Provider, {
								children: a,
								value: w,
							})
						);
			}
			e.startTransition, new Promise(() => {}), e.Component;
			const ot = window.ReactDOM;
			function it(e) {
				return (
					void 0 === e && (e = ''),
					new URLSearchParams(
						'string' === typeof e ||
						Array.isArray(e) ||
						e instanceof URLSearchParams
							? e
							: Object.keys(e).reduce((t, r) => {
									const n = e[r];
									return t.concat(
										Array.isArray(n)
											? n.map((e) => [r, e])
											: [[r, n]]
									);
								}, [])
					)
				);
			}
			new Set([
				'application/x-www-form-urlencoded',
				'multipart/form-data',
				'text/plain',
			]);
			try {
				window.__reactRouterVersion = '6';
			} catch (e) {}
			const ct = e.createContext({ isTransitioning: !1 }),
				lt = e.createContext(new Map()),
				ut = e.startTransition,
				dt = ot.flushSync;
			function ht(e) {
				dt ? dt(e) : e();
			}
			e.useId;
			class pt {
				constructor() {
					(this.status = 'pending'),
						(this.promise = new Promise((e, t) => {
							(this.resolve = (t) => {
								'pending' === this.status &&
									((this.status = 'resolved'), e(t));
							}),
								(this.reject = (e) => {
									'pending' === this.status &&
										((this.status = 'rejected'), t(e));
								});
						}));
				}
			}
			function ft(t) {
				let { fallbackElement: r, router: n, future: a } = t,
					[s, o] = e.useState(n.state),
					[i, c] = e.useState(),
					[l, u] = e.useState({ isTransitioning: !1 }),
					[d, h] = e.useState(),
					[p, f] = e.useState(),
					[m, y] = e.useState(),
					v = e.useRef(new Map()),
					{ v7_startTransition: g } = a || {},
					w = e.useCallback(
						(e) => {
							g
								? (function (e) {
										ut ? ut(e) : e();
									})(e)
								: e();
						},
						[g]
					),
					b = e.useCallback(
						(e, t) => {
							const {
								deletedFetchers: r,
								flushSync: a,
								viewTransitionOpts: s,
							} = t;
							r.forEach((e) => v.current.delete(e)),
								e.fetchers.forEach((e, t) => {
									void 0 !== e.data &&
										v.current.set(t, e.data);
								});
							const i =
								null == n.window ||
								null == n.window.document ||
								'function' !==
									typeof n.window.document
										.startViewTransition;
							if (s && !i) {
								if (a) {
									ht(() => {
										p &&
											(d && d.resolve(),
											p.skipTransition()),
											u({
												isTransitioning: !0,
												flushSync: !0,
												currentLocation:
													s.currentLocation,
												nextLocation: s.nextLocation,
											});
									});
									const t =
										n.window.document.startViewTransition(
											() => {
												ht(() => o(e));
											}
										);
									return (
										t.finished.finally(() => {
											ht(() => {
												h(void 0),
													f(void 0),
													c(void 0),
													u({ isTransitioning: !1 });
											});
										}),
										void ht(() => f(t))
									);
								}
								p
									? (d && d.resolve(),
										p.skipTransition(),
										y({
											state: e,
											currentLocation: s.currentLocation,
											nextLocation: s.nextLocation,
										}))
									: (c(e),
										u({
											isTransitioning: !0,
											flushSync: !1,
											currentLocation: s.currentLocation,
											nextLocation: s.nextLocation,
										}));
							} else {
								a ? ht(() => o(e)) : w(() => o(e));
							}
						},
						[n.window, p, d, v, w]
					);
				e.useLayoutEffect(() => n.subscribe(b), [n, b]),
					e.useEffect(() => {
						l.isTransitioning && !l.flushSync && h(new pt());
					}, [l]),
					e.useEffect(() => {
						if (d && i && n.window) {
							const e = i,
								t = d.promise,
								r = n.window.document.startViewTransition(
									async () => {
										w(() => o(e)), await t;
									}
								);
							r.finished.finally(() => {
								h(void 0),
									f(void 0),
									c(void 0),
									u({ isTransitioning: !1 });
							}),
								f(r);
						}
					}, [w, i, d, n.window]),
					e.useEffect(() => {
						d &&
							i &&
							s.location.key === i.location.key &&
							d.resolve();
					}, [d, p, s.location, i]),
					e.useEffect(() => {
						!l.isTransitioning &&
							m &&
							(c(m.state),
							u({
								isTransitioning: !0,
								flushSync: !1,
								currentLocation: m.currentLocation,
								nextLocation: m.nextLocation,
							}),
							y(void 0));
					}, [l.isTransitioning, m]),
					e.useEffect(() => {}, []);
				const j = e.useMemo(
						() => ({
							createHref: n.createHref,
							encodeLocation: n.encodeLocation,
							go: (e) => n.navigate(e),
							push: (e, t, r) =>
								n.navigate(e, {
									state: t,
									preventScrollReset:
										null == r
											? void 0
											: r.preventScrollReset,
								}),
							replace: (e, t, r) =>
								n.navigate(e, {
									replace: !0,
									state: t,
									preventScrollReset:
										null == r
											? void 0
											: r.preventScrollReset,
								}),
						}),
						[n]
					),
					E = n.basename || '/',
					x = e.useMemo(
						() => ({
							router: n,
							navigator: j,
							static: !1,
							basename: E,
						}),
						[n, j, E]
					),
					P = e.useMemo(
						() => ({
							v7_relativeSplatPath: n.future.v7_relativeSplatPath,
						}),
						[n.future.v7_relativeSplatPath]
					);
				return e.createElement(
					e.Fragment,
					null,
					e.createElement(
						Le.Provider,
						{ value: x },
						e.createElement(
							Fe.Provider,
							{ value: s },
							e.createElement(
								lt.Provider,
								{ value: v.current },
								e.createElement(
									ct.Provider,
									{ value: l },
									e.createElement(
										st,
										{
											basename: E,
											location: s.location,
											navigationType: s.historyAction,
											navigator: j,
											future: P,
										},
										s.initialized ||
											n.future.v7_partialHydration
											? e.createElement(mt, {
													routes: n.routes,
													future: n.future,
													state: s,
												})
											: r
									)
								)
							)
						)
					),
					null
				);
			}
			const mt = e.memo(yt);
			function yt(e) {
				const { routes: t, future: r, state: n } = e;
				return Ve(t, void 0, n, r);
			}
			let vt, gt;
			function wt(t) {
				const r = e.useRef(it(t)),
					n = e.useRef(!1),
					a = ze(),
					s = e.useMemo(
						() =>
							(function (e, t) {
								const r = it(e);
								return (
									t &&
										t.forEach((e, n) => {
											r.has(n) ||
												t.getAll(n).forEach((e) => {
													r.append(n, e);
												});
										}),
									r
								);
							})(a.search, n.current ? null : r.current),
						[a.search]
					),
					o = We(),
					i = e.useCallback(
						(e, t) => {
							const r = it('function' === typeof e ? e(s) : e);
							(n.current = !0), o('?' + r, t);
						},
						[o, s]
					);
				return [s, i];
			}
			'undefined' !== typeof window &&
				void 0 !== window.document &&
				window.document.createElement,
				(function (e) {
					(e.UseScrollRestoration = 'useScrollRestoration'),
						(e.UseSubmit = 'useSubmit'),
						(e.UseSubmitFetcher = 'useSubmitFetcher'),
						(e.UseFetcher = 'useFetcher'),
						(e.useViewTransitionState = 'useViewTransitionState');
				})(vt || (vt = {})),
				(function (e) {
					(e.UseFetcher = 'useFetcher'),
						(e.UseFetchers = 'useFetchers'),
						(e.UseScrollRestoration = 'useScrollRestoration');
				})(gt || (gt = {}));
			const bt = o(6087),
				jt = 0.999,
				Et = /[\\\/_+.#"@\[\(\{&]/,
				xt = /[\\\/_+.#"@\[\(\{&]/g,
				Pt = /[\s-]/,
				St = /[\s-]/g;
			function Rt(e, t, r, n, a, s, o) {
				if (s === t.length) {
					return a === e.length ? 1 : 0.99;
				}
				const i = `${a},${s}`;
				if (void 0 !== o[i]) {
					return o[i];
				}
				for (
					var c, l, u, d, h = n.charAt(s), p = r.indexOf(h, a), f = 0;
					p >= 0;

				) {
					(c = Rt(e, t, r, n, p + 1, s + 1, o)) > f &&
						(p === a
							? (c *= 1)
							: Et.test(e.charAt(p - 1))
								? ((c *= 0.8),
									(u = e.slice(a, p - 1).match(xt)) &&
										a > 0 &&
										(c *= Math.pow(jt, u.length)))
								: Pt.test(e.charAt(p - 1))
									? ((c *= 0.9),
										(d = e.slice(a, p - 1).match(St)) &&
											a > 0 &&
											(c *= Math.pow(jt, d.length)))
									: ((c *= 0.17),
										a > 0 && (c *= Math.pow(jt, p - a))),
						e.charAt(p) !== t.charAt(s) && (c *= 0.9999)),
						((c < 0.1 && r.charAt(p - 1) === n.charAt(s + 1)) ||
							(n.charAt(s + 1) === n.charAt(s) &&
								r.charAt(p - 1) !== n.charAt(s))) &&
							0.1 * (l = Rt(e, t, r, n, p + 1, s + 2, o)) > c &&
							(c = 0.1 * l),
						c > f && (f = c),
						(p = r.indexOf(h, p + 1));
				}
				return (o[i] = f), f;
			}
			function Ct(e) {
				return e.toLowerCase().replace(St, ' ');
			}
			function qt(e, t, r) {
				return Rt(
					(e = r && r.length > 0 ? e + ' ' + r.join(' ') : e),
					t,
					Ct(e),
					Ct(t),
					0,
					0,
					{}
				);
			}
			function kt() {
				return (
					(kt = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (let t = 1; t < arguments.length; t++) {
									const r = arguments[t];
									for (const n in r) {
										({}).hasOwnProperty.call(r, n) &&
											(e[n] = r[n]);
									}
								}
								return e;
							}),
					kt.apply(null, arguments)
				);
			}
			function Ot(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
				return function (n) {
					if ((null == e || e(n), !1 === r || !n.defaultPrevented)) {
						return null == t ? void 0 : t(n);
					}
				};
			}
			function Dt(...e) {
				return (t) =>
					e.forEach((e) =>
						(function (e, t) {
							'function' === typeof e
								? e(t)
								: null != e && (e.current = t);
						})(e, t)
					);
			}
			function It(...t) {
				return (0, e.useCallback)(Dt(...t), t);
			}
			function Tt(...t) {
				const r = t[0];
				if (1 === t.length) {
					return r;
				}
				const n = () => {
					const n = t.map((e) => ({
						useScope: e(),
						scopeName: e.scopeName,
					}));
					return function (t) {
						const a = n.reduce(
							(e, { useScope: r, scopeName: n }) => ({
								...e,
								...r(t)[`__scope${n}`],
							}),
							{}
						);
						return (0, e.useMemo)(
							() => ({ [`__scope${r.scopeName}`]: a }),
							[a]
						);
					};
				};
				return (n.scopeName = r.scopeName), n;
			}
			const Nt = Boolean(
					null === globalThis || void 0 === globalThis
						? void 0
						: globalThis.document
				)
					? e.useLayoutEffect
					: () => {},
				At = n['useId'.toString()] || (() => {});
			let Mt = 0;
			function Ut(t) {
				const [r, n] = e.useState(At());
				return (
					Nt(() => {
						t || n((e) => (null != e ? e : String(Mt++)));
					}, [t]),
					t || (r ? `radix-${r}` : '')
				);
			}
			function Lt(t) {
				const r = (0, e.useRef)(t);
				return (
					(0, e.useEffect)(() => {
						r.current = t;
					}),
					(0, e.useMemo)(
						() =>
							(...e) => {
								let t;
								return null === (t = r.current) || void 0 === t
									? void 0
									: t.call(r, ...e);
							},
						[]
					)
				);
			}
			const Ft = (0, e.forwardRef)((t, r) => {
				const { children: n, ...a } = t,
					s = e.Children.toArray(n),
					o = s.find(Bt);
				if (o) {
					const t = o.props.children,
						n = s.map((r) =>
							r === o
								? e.Children.count(t) > 1
									? e.Children.only(null)
									: (0, e.isValidElement)(t)
										? t.props.children
										: null
								: r
						);
					return (0, e.createElement)(
						_t,
						kt({}, a, { ref: r }),
						(0, e.isValidElement)(t)
							? (0, e.cloneElement)(t, void 0, n)
							: null
					);
				}
				return (0, e.createElement)(_t, kt({}, a, { ref: r }), n);
			});
			Ft.displayName = 'Slot';
			const _t = (0, e.forwardRef)((t, r) => {
				const { children: n, ...a } = t;
				return (0, e.isValidElement)(n)
					? (0, e.cloneElement)(n, {
							...Kt(a, n.props),
							ref: r ? Dt(r, n.ref) : n.ref,
						})
					: e.Children.count(n) > 1
						? e.Children.only(null)
						: null;
			});
			_t.displayName = 'SlotClone';
			const Qt = ({ children: t }) =>
				(0, e.createElement)(e.Fragment, null, t);
			function Bt(t) {
				return (0, e.isValidElement)(t) && t.type === Qt;
			}
			function Kt(e, t) {
				const r = { ...t };
				for (const n in t) {
					const a = e[n],
						s = t[n];
					/^on[A-Z]/.test(n)
						? a && s
							? (r[n] = (...e) => {
									s(...e), a(...e);
								})
							: a && (r[n] = a)
						: 'style' === n
							? (r[n] = { ...a, ...s })
							: 'className' === n &&
								(r[n] = [a, s].filter(Boolean).join(' '));
				}
				return { ...e, ...r };
			}
			const $t = [
					'a',
					'button',
					'div',
					'form',
					'h2',
					'h3',
					'img',
					'input',
					'label',
					'li',
					'nav',
					'ol',
					'p',
					'span',
					'svg',
					'ul',
				].reduce((t, r) => {
					const n = (0, e.forwardRef)((t, n) => {
						const { asChild: a, ...s } = t,
							o = a ? Ft : r;
						return (
							(0, e.useEffect)(() => {
								window[Symbol.for('radix-ui')] = !0;
							}, []),
							(0, e.createElement)(o, kt({}, s, { ref: n }))
						);
					});
					return (n.displayName = `Primitive.${r}`), { ...t, [r]: n };
				}, {}),
				zt = 'dismissableLayer.update';
			let Ht;
			const Wt = (0, e.createContext)({
					layers: new Set(),
					layersWithOutsidePointerEventsDisabled: new Set(),
					branches: new Set(),
				}),
				Gt = (0, e.forwardRef)((t, r) => {
					let n;
					const {
							disableOutsidePointerEvents: a = !1,
							onEscapeKeyDown: s,
							onPointerDownOutside: o,
							onFocusOutside: i,
							onInteractOutside: c,
							onDismiss: l,
							...u
						} = t,
						d = (0, e.useContext)(Wt),
						[h, p] = (0, e.useState)(null),
						f =
							null !==
								(n = null == h ? void 0 : h.ownerDocument) &&
							void 0 !== n
								? n
								: null === globalThis || void 0 === globalThis
									? void 0
									: globalThis.document,
						[, m] = (0, e.useState)({}),
						y = It(r, (e) => p(e)),
						v = Array.from(d.layers),
						[g] = [
							...d.layersWithOutsidePointerEventsDisabled,
						].slice(-1),
						w = v.indexOf(g),
						b = h ? v.indexOf(h) : -1,
						j = d.layersWithOutsidePointerEventsDisabled.size > 0,
						E = b >= w,
						x = (function (
							t,
							r = null === globalThis || void 0 === globalThis
								? void 0
								: globalThis.document
						) {
							const n = Lt(t),
								a = (0, e.useRef)(!1),
								s = (0, e.useRef)(() => {});
							return (
								(0, e.useEffect)(() => {
									const e = (e) => {
											if (e.target && !a.current) {
												const t = { originalEvent: e };
												function o() {
													Jt(
														'dismissableLayer.pointerDownOutside',
														n,
														t,
														{ discrete: !0 }
													);
												}
												'touch' === e.pointerType
													? (r.removeEventListener(
															'click',
															s.current
														),
														(s.current = o),
														r.addEventListener(
															'click',
															s.current,
															{ once: !0 }
														))
													: o();
											} else {
												r.removeEventListener(
													'click',
													s.current
												);
											}
											a.current = !1;
										},
										t = window.setTimeout(() => {
											r.addEventListener(
												'pointerdown',
												e
											);
										}, 0);
									return () => {
										window.clearTimeout(t),
											r.removeEventListener(
												'pointerdown',
												e
											),
											r.removeEventListener(
												'click',
												s.current
											);
									};
								}, [r, n]),
								{ onPointerDownCapture: () => (a.current = !0) }
							);
						})((e) => {
							const t = e.target,
								r = [...d.branches].some((e) => e.contains(t));
							E &&
								!r &&
								(null == o || o(e),
								null == c || c(e),
								e.defaultPrevented || null == l || l());
						}, f),
						P = (function (
							t,
							r = null === globalThis || void 0 === globalThis
								? void 0
								: globalThis.document
						) {
							const n = Lt(t),
								a = (0, e.useRef)(!1);
							return (
								(0, e.useEffect)(() => {
									const e = (e) => {
										e.target &&
											!a.current &&
											Jt(
												'dismissableLayer.focusOutside',
												n,
												{ originalEvent: e },
												{ discrete: !1 }
											);
									};
									return (
										r.addEventListener('focusin', e),
										() =>
											r.removeEventListener('focusin', e)
									);
								}, [r, n]),
								{
									onFocusCapture: () => (a.current = !0),
									onBlurCapture: () => (a.current = !1),
								}
							);
						})((e) => {
							const t = e.target;
							[...d.branches].some((e) => e.contains(t)) ||
								(null == i || i(e),
								null == c || c(e),
								e.defaultPrevented || null == l || l());
						}, f);
					return (
						(function (
							t,
							r = null === globalThis || void 0 === globalThis
								? void 0
								: globalThis.document
						) {
							const n = Lt(t);
							(0, e.useEffect)(() => {
								const e = (e) => {
									'Escape' === e.key && n(e);
								};
								return (
									r.addEventListener('keydown', e),
									() => r.removeEventListener('keydown', e)
								);
							}, [n, r]);
						})((e) => {
							b === d.layers.size - 1 &&
								(null == s || s(e),
								!e.defaultPrevented &&
									l &&
									(e.preventDefault(), l()));
						}, f),
						(0, e.useEffect)(() => {
							if (h) {
								return (
									a &&
										(0 ===
											d
												.layersWithOutsidePointerEventsDisabled
												.size &&
											((Ht = f.body.style.pointerEvents),
											(f.body.style.pointerEvents =
												'none')),
										d.layersWithOutsidePointerEventsDisabled.add(
											h
										)),
									d.layers.add(h),
									Vt(),
									() => {
										a &&
											1 ===
												d
													.layersWithOutsidePointerEventsDisabled
													.size &&
											(f.body.style.pointerEvents = Ht);
									}
								);
							}
						}, [h, f, a, d]),
						(0, e.useEffect)(
							() => () => {
								h &&
									(d.layers.delete(h),
									d.layersWithOutsidePointerEventsDisabled.delete(
										h
									),
									Vt());
							},
							[h, d]
						),
						(0, e.useEffect)(() => {
							const e = () => m({});
							return (
								document.addEventListener(zt, e),
								() => document.removeEventListener(zt, e)
							);
						}, []),
						(0, e.createElement)(
							$t.div,
							kt({}, u, {
								ref: y,
								style: {
									pointerEvents: j
										? E
											? 'auto'
											: 'none'
										: void 0,
									...t.style,
								},
								onFocusCapture: Ot(
									t.onFocusCapture,
									P.onFocusCapture
								),
								onBlurCapture: Ot(
									t.onBlurCapture,
									P.onBlurCapture
								),
								onPointerDownCapture: Ot(
									t.onPointerDownCapture,
									x.onPointerDownCapture
								),
							})
						)
					);
				});
			function Vt() {
				const e = new CustomEvent(zt);
				document.dispatchEvent(e);
			}
			function Jt(e, t, r, { discrete: n }) {
				const a = r.originalEvent.target,
					s = new CustomEvent(e, {
						bubbles: !1,
						cancelable: !0,
						detail: r,
					});
				t && a.addEventListener(e, t, { once: !0 }),
					n
						? (function (e, t) {
								e &&
									(0, ot.flushSync)(() => e.dispatchEvent(t));
							})(a, s)
						: a.dispatchEvent(s);
			}
			const Xt = 'focusScope.autoFocusOnMount',
				Yt = 'focusScope.autoFocusOnUnmount',
				Zt = { bubbles: !1, cancelable: !0 },
				er = (0, e.forwardRef)((t, r) => {
					const {
							loop: n = !1,
							trapped: a = !1,
							onMountAutoFocus: s,
							onUnmountAutoFocus: o,
							...i
						} = t,
						[c, l] = (0, e.useState)(null),
						u = Lt(s),
						d = Lt(o),
						h = (0, e.useRef)(null),
						p = It(r, (e) => l(e)),
						f = (0, e.useRef)({
							paused: !1,
							pause() {
								this.paused = !0;
							},
							resume() {
								this.paused = !1;
							},
						}).current;
					(0, e.useEffect)(() => {
						if (a) {
							function e(e) {
								if (f.paused || !c) {
									return;
								}
								const t = e.target;
								c.contains(t)
									? (h.current = t)
									: ar(h.current, { select: !0 });
							}
							function t(e) {
								if (f.paused || !c) {
									return;
								}
								const t = e.relatedTarget;
								null !== t &&
									(c.contains(t) ||
										ar(h.current, { select: !0 }));
							}
							function r(e) {
								if (document.activeElement === document.body) {
									for (const t of e)
										{t.removedNodes.length > 0 && ar(c);}}
							}
							document.addEventListener('focusin', e),
								document.addEventListener('focusout', t);
							const n = new MutationObserver(r);
							return (
								c &&
									n.observe(c, {
										childList: !0,
										subtree: !0,
									}),
								() => {
									document.removeEventListener('focusin', e),
										document.removeEventListener(
											'focusout',
											t
										),
										n.disconnect();
								}
							);
						}
					}, [a, c, f.paused]),
						(0, e.useEffect)(() => {
							if (c) {
								sr.add(f);
								const e = document.activeElement;
								if (!c.contains(e)) {
									const t = new CustomEvent(Xt, Zt);
									c.addEventListener(Xt, u),
										c.dispatchEvent(t),
										t.defaultPrevented ||
											((function (
												e,
												{ select: t = !1 } = {}
											) {
												const r =
													document.activeElement;
												for (const n of e) {
													if (
														(ar(n, { select: t }),
														document.activeElement !==
															r)
													)
														{return;}}
											})(
												tr(c).filter(
													(e) => 'A' !== e.tagName
												),
												{ select: !0 }
											),
											document.activeElement === e &&
												ar(c));
								}
								return () => {
									c.removeEventListener(Xt, u),
										setTimeout(() => {
											const t = new CustomEvent(Yt, Zt);
											c.addEventListener(Yt, d),
												c.dispatchEvent(t),
												t.defaultPrevented ||
													ar(
														null != e
															? e
															: document.body,
														{ select: !0 }
													),
												c.removeEventListener(Yt, d),
												sr.remove(f);
										}, 0);
								};
							}
						}, [c, u, d, f]);
					const m = (0, e.useCallback)(
						(e) => {
							if (!n && !a) {
								return;
							}
							if (f.paused) {
								return;
							}
							const t =
									'Tab' === e.key &&
									!e.altKey &&
									!e.ctrlKey &&
									!e.metaKey,
								r = document.activeElement;
							if (t && r) {
								const t = e.currentTarget,
									[a, s] = (function (e) {
										const t = tr(e);
										return [rr(t, e), rr(t.reverse(), e)];
									})(t);
								a && s
									? e.shiftKey || r !== s
										? e.shiftKey &&
											r === a &&
											(e.preventDefault(),
											n && ar(s, { select: !0 }))
										: (e.preventDefault(),
											n && ar(a, { select: !0 }))
									: r === t && e.preventDefault();
							}
						},
						[n, a, f.paused]
					);
					return (0, e.createElement)(
						$t.div,
						kt({ tabIndex: -1 }, i, { ref: p, onKeyDown: m })
					);
				});
			function tr(e) {
				const t = [],
					r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
						acceptNode: (e) => {
							const t =
								'INPUT' === e.tagName && 'hidden' === e.type;
							return e.disabled || e.hidden || t
								? NodeFilter.FILTER_SKIP
								: e.tabIndex >= 0
									? NodeFilter.FILTER_ACCEPT
									: NodeFilter.FILTER_SKIP;
						},
					});
				for (; r.nextNode(); ) {
					t.push(r.currentNode);
				}
				return t;
			}
			function rr(e, t) {
				for (const r of e) {
					if (!nr(r, { upTo: t })) return r;
				}
			}
			function nr(e, { upTo: t }) {
				if ('hidden' === getComputedStyle(e).visibility) {
					return !0;
				}
				for (; e; ) {
					if (void 0 !== t && e === t) {
						return !1;
					}
					if ('none' === getComputedStyle(e).display) {
						return !0;
					}
					e = e.parentElement;
				}
				return !1;
			}
			function ar(e, { select: t = !1 } = {}) {
				if (e && e.focus) {
					const r = document.activeElement;
					e.focus({ preventScroll: !0 }),
						e !== r &&
							(function (e) {
								return (
									e instanceof HTMLInputElement &&
									'select' in e
								);
							})(e) &&
							t &&
							e.select();
				}
			}
			const sr = (function () {
				let e = [];
				return {
					add(t) {
						const r = e[0];
						t !== r && (null == r || r.pause()),
							(e = or(e, t)),
							e.unshift(t);
					},
					remove(t) {
						let r;
						(e = or(e, t)),
							null === (r = e[0]) || void 0 === r || r.resume();
					},
				};
			})();
			function or(e, t) {
				const r = [...e],
					n = r.indexOf(t);
				return -1 !== n && r.splice(n, 1), r;
			}
			const ir = (0, e.forwardRef)((t, r) => {
					let n;
					const {
						container: a = null === globalThis ||
						void 0 === globalThis ||
						null === (n = globalThis.document) ||
						void 0 === n
							? void 0
							: n.body,
						...s
					} = t;
					return a
						? ot.createPortal(
								(0, e.createElement)(
									$t.div,
									kt({}, s, { ref: r })
								),
								a
							)
						: null;
				}),
				cr = (t) => {
					const { present: r, children: n } = t,
						a = (function (t) {
							const [r, n] = (0, e.useState)(),
								a = (0, e.useRef)({}),
								s = (0, e.useRef)(t),
								o = (0, e.useRef)('none'),
								i = t ? 'mounted' : 'unmounted',
								[c, l] = (function (t, r) {
									return (0, e.useReducer)((e, t) => {
										const n = r[e][t];
										return null != n ? n : e;
									}, t);
								})(i, {
									mounted: {
										UNMOUNT: 'unmounted',
										ANIMATION_OUT: 'unmountSuspended',
									},
									unmountSuspended: {
										MOUNT: 'mounted',
										ANIMATION_END: 'unmounted',
									},
									unmounted: { MOUNT: 'mounted' },
								});
							return (
								(0, e.useEffect)(() => {
									const e = lr(a.current);
									o.current = 'mounted' === c ? e : 'none';
								}, [c]),
								Nt(() => {
									const e = a.current,
										r = s.current;
									if (r !== t) {
										const n = o.current,
											a = lr(e);
										t
											? l('MOUNT')
											: 'none' === a ||
												  'none' ===
														(null == e
															? void 0
															: e.display)
												? l('UNMOUNT')
												: l(
														r && n !== a
															? 'ANIMATION_OUT'
															: 'UNMOUNT'
													),
											(s.current = t);
									}
								}, [t, l]),
								Nt(() => {
									if (r) {
										const e = (e) => {
												const t = lr(
													a.current
												).includes(e.animationName);
												e.target === r &&
													t &&
													(0, ot.flushSync)(() =>
														l('ANIMATION_END')
													);
											},
											t = (e) => {
												e.target === r &&
													(o.current = lr(a.current));
											};
										return (
											r.addEventListener(
												'animationstart',
												t
											),
											r.addEventListener(
												'animationcancel',
												e
											),
											r.addEventListener(
												'animationend',
												e
											),
											() => {
												r.removeEventListener(
													'animationstart',
													t
												),
													r.removeEventListener(
														'animationcancel',
														e
													),
													r.removeEventListener(
														'animationend',
														e
													);
											}
										);
									}
									l('ANIMATION_END');
								}, [r, l]),
								{
									isPresent: [
										'mounted',
										'unmountSuspended',
									].includes(c),
									ref: (0, e.useCallback)((e) => {
										e && (a.current = getComputedStyle(e)),
											n(e);
									}, []),
								}
							);
						})(r),
						s =
							'function' === typeof n
								? n({ present: a.isPresent })
								: e.Children.only(n),
						o = It(a.ref, s.ref);
					return 'function' === typeof n || a.isPresent
						? (0, e.cloneElement)(s, { ref: o })
						: null;
				};
			function lr(e) {
				return (null == e ? void 0 : e.animationName) || 'none';
			}
			cr.displayName = 'Presence';
			let ur = 0;
			function dr() {
				const e = document.createElement('span');
				return (
					e.setAttribute('data-radix-focus-guard', ''),
					(e.tabIndex = 0),
					(e.style.cssText =
						'outline: none; opacity: 0; position: fixed; pointer-events: none'),
					e
				);
			}
			let hr = function () {
				return (
					(hr =
						Object.assign ||
						function (e) {
							for (
								var t, r = 1, n = arguments.length;
								r < n;
								r++
							) {
								for (let a in (t = arguments[r]))
									{Object.prototype.hasOwnProperty.call(
										t,
										a
									) && (e[a] = t[a]);}}
							return e;
						}),
					hr.apply(this, arguments)
				);
			};
			function pr(e, t) {
				const r = {};
				for (var n in e) {
					Object.prototype.hasOwnProperty.call(e, n) &&
						t.indexOf(n) < 0 &&
						(r[n] = e[n]);
				}
				if (
					null != e &&
					'function' === typeof Object.getOwnPropertySymbols
				) {
					let a = 0;
					for (
						n = Object.getOwnPropertySymbols(e);
						a < n.length;
						a++
					) {
						t.indexOf(n[a]) < 0 &&
							Object.prototype.propertyIsEnumerable.call(
								e,
								n[a]
							) &&
							(r[n[a]] = e[n[a]]);
					}
				}
				return r;
			}
			Object.create,
				Object.create,
				'function' === typeof SuppressedError && SuppressedError;
			const fr = 'right-scroll-bar-position',
				mr = 'width-before-scroll-bar';
			function yr(e, t) {
				return 'function' === typeof e ? e(t) : e && (e.current = t), e;
			}
			const vr =
					'undefined' !== typeof window
						? e.useLayoutEffect
						: e.useEffect,
				gr = new WeakMap();
			function wr(e) {
				return e;
			}
			const br = (function (e) {
					void 0 === e && (e = {});
					let t = (function (e, t) {
						void 0 === t && (t = wr);
						let r = [],
							n = !1;
						return {
							read () {
								if (n)
									throw new Error(
										'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
									);
								return r.length ? r[r.length - 1] : e;
							},
							useMedium (e) {
								var a = t(e, n);
								return (
									r.push(a),
									function () {
										r = r.filter(function (e) {
											return e !== a;
										});
									}
								);
							},
							assignSyncMedium (e) {
								for (n = !0; r.length; ) {
									var t = r;
									(r = []), t.forEach(e);
								}
								r = {
									push: function (t) {
										return e(t);
									},
									filter: function () {
										return r;
									},
								};
							},
							assignMedium (e) {
								n = !0;
								var t = [];
								if (r.length) {
									var a = r;
									(r = []), a.forEach(e), (t = r);
								}
								var s = function () {
										var r = t;
										(t = []), r.forEach(e);
									},
									o = function () {
										return Promise.resolve().then(s);
									};
								o(),
									(r = {
										push: function (e) {
											t.push(e), o();
										},
										filter: function (e) {
											return (t = t.filter(e)), r;
										},
									});
							},
						};
					})(null);
					return (t.options = hr({ async: !0, ssr: !1 }, e)), t;
				})(),
				jr = function () {},
				Er = e.forwardRef(function (t, r) {
					let n = e.useRef(null),
						a = e.useState({
							onScrollCapture: jr,
							onWheelCapture: jr,
							onTouchMoveCapture: jr,
						}),
						s = a[0],
						o = a[1],
						i = t.forwardProps,
						c = t.children,
						l = t.className,
						u = t.removeScrollBar,
						d = t.enabled,
						h = t.shards,
						p = t.sideCar,
						f = t.noIsolation,
						m = t.inert,
						y = t.allowPinchZoom,
						v = t.as,
						g = void 0 === v ? 'div' : v,
						w = pr(t, [
							'forwardProps',
							'children',
							'className',
							'removeScrollBar',
							'enabled',
							'shards',
							'sideCar',
							'noIsolation',
							'inert',
							'allowPinchZoom',
							'as',
						]),
						b = p,
						j = (function (t, r) {
							let n,
								a,
								s,
								o =
									((n = r || null),
									(a = function (e) {
										return t.forEach(function (t) {
											return yr(t, e);
										});
									}),
									((s = (0, e.useState)(function () {
										return {
											value: n,
											callback: a,
											facade: {
												get current() {
													return s.value;
												},
												set current(e) {
													let t = s.value;
													t !== e &&
														((s.value = e),
														s.callback(e, t));
												},
											},
										};
									})[0]).callback = a),
									s.facade);
							return (
								vr(
									function () {
										let e = gr.get(o);
										if (e) {
											let r = new Set(e),
												n = new Set(t),
												a = o.current;
											r.forEach(function (e) {
												n.has(e) || yr(e, null);
											}),
												n.forEach(function (e) {
													r.has(e) || yr(e, a);
												});
										}
										gr.set(o, t);
									},
									[t]
								),
								o
							);
						})([n, r]),
						E = hr(hr({}, w), s);
					return e.createElement(
						e.Fragment,
						null,
						d &&
							e.createElement(b, {
								sideCar: br,
								removeScrollBar: u,
								shards: h,
								noIsolation: f,
								inert: m,
								setCallbacks: o,
								allowPinchZoom: !!y,
								lockRef: n,
							}),
						i
							? e.cloneElement(
									e.Children.only(c),
									hr(hr({}, E), { ref: j })
								)
							: e.createElement(
									g,
									hr({}, E, { className: l, ref: j }),
									c
								)
					);
				});
			(Er.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
				(Er.classNames = { fullWidth: mr, zeroRight: fr });
			const xr = function (t) {
				let r = t.sideCar,
					n = pr(t, ['sideCar']);
				if (!r)
					{throw new Error(
						'Sidecar: please provide `sideCar` property to import the right car'
					);}
				let a = r.read();
				if (!a) {throw new Error('Sidecar medium not found');}
				return e.createElement(a, hr({}, n));
			};
			xr.isSideCarExport = !0;
			let Pr = function () {
					let e = 0,
						t = null;
					return {
						add(r) {
							let n, a;
							0 == e &&
								(t = (function () {
									if (!document) {return null;}
									let e = document.createElement('style');
									e.type = 'text/css';
									let t = o.nc;
									return t && e.setAttribute('nonce', t), e;
								})()) &&
								((a = r),
								(n = t).styleSheet
									? (n.styleSheet.cssText = a)
									: n.appendChild(document.createTextNode(a)),
								(function (e) {
									(
										document.head ||
										document.getElementsByTagName('head')[0]
									).appendChild(e);
								})(t)),
								e++;
						},
						remove() {
							!--e &&
								t &&
								(t.parentNode && t.parentNode.removeChild(t),
								(t = null));
						},
					};
				},
				Sr = function () {
					let t,
						r =
							((t = Pr()),
							function (r, n) {
								e.useEffect(
									function () {
										return (
											t.add(r),
											function () {
												t.remove();
											}
										);
									},
									[r && n]
								);
							});
					return function (e) {
						const t = e.styles,
							n = e.dynamic;
						return r(t, n), null;
					};
				},
				Rr = { left: 0, top: 0, right: 0, gap: 0 },
				Cr = function (e) {
					return parseInt(e || '', 10) || 0;
				},
				qr = Sr(),
				kr = 'data-scroll-locked',
				Or = function (e, t, r, n) {
					const a = e.left,
						s = e.top,
						o = e.right,
						i = e.gap;
					return (
						void 0 === r && (r = 'margin'),
						'\n  .'
							.concat(
								'with-scroll-bars-hidden',
								' {\n   overflow: hidden '
							)
							.concat(n, ';\n   padding-right: ')
							.concat(i, 'px ')
							.concat(n, ';\n  }\n  body[')
							.concat(kr, '] {\n    overflow: hidden ')
							.concat(
								n,
								';\n    overscroll-behavior: contain;\n    '
							)
							.concat(
								[
									t && 'position: relative '.concat(n, ';'),
									'margin' === r &&
										'\n    padding-left: '
											.concat(a, 'px;\n    padding-top: ')
											.concat(
												s,
												'px;\n    padding-right: '
											)
											.concat(
												o,
												'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
											)
											.concat(i, 'px ')
											.concat(n, ';\n    '),
									'padding' === r &&
										'padding-right: '
											.concat(i, 'px ')
											.concat(n, ';'),
								]
									.filter(Boolean)
									.join(''),
								'\n  }\n  \n  .'
							)
							.concat(fr, ' {\n    right: ')
							.concat(i, 'px ')
							.concat(n, ';\n  }\n  \n  .')
							.concat(mr, ' {\n    margin-right: ')
							.concat(i, 'px ')
							.concat(n, ';\n  }\n  \n  .')
							.concat(fr, ' .')
							.concat(fr, ' {\n    right: 0 ')
							.concat(n, ';\n  }\n  \n  .')
							.concat(mr, ' .')
							.concat(mr, ' {\n    margin-right: 0 ')
							.concat(n, ';\n  }\n  \n  body[')
							.concat(kr, '] {\n    ')
							.concat('--removed-body-scroll-bar-size', ': ')
							.concat(i, 'px;\n  }\n')
					);
				},
				Dr = function () {
					const e = parseInt(document.body.getAttribute(kr) || '0', 10);
					return isFinite(e) ? e : 0;
				},
				Ir = function (t) {
					const r = t.noRelative,
						n = t.noImportant,
						a = t.gapMode,
						s = void 0 === a ? 'margin' : a;
					e.useEffect(function () {
						return (
							document.body.setAttribute(
								kr,
								(Dr() + 1).toString()
							),
							function () {
								const e = Dr() - 1;
								e <= 0
									? document.body.removeAttribute(kr)
									: document.body.setAttribute(
											kr,
											e.toString()
										);
							}
						);
					}, []);
					const o = e.useMemo(
						function () {
							return (function (e) {
								if (
									(void 0 === e && (e = 'margin'),
									'undefined' === typeof window)
								)
									{return Rr;}
								let t = (function (e) {
										let t = window.getComputedStyle(
												document.body
											),
											r =
												t[
													'padding' === e
														? 'paddingLeft'
														: 'marginLeft'
												],
											n =
												t[
													'padding' === e
														? 'paddingTop'
														: 'marginTop'
												],
											a =
												t[
													'padding' === e
														? 'paddingRight'
														: 'marginRight'
												];
										return [Cr(r), Cr(n), Cr(a)];
									})(e),
									r = document.documentElement.clientWidth,
									n = window.innerWidth;
								return {
									left: t[0],
									top: t[1],
									right: t[2],
									gap: Math.max(0, n - r + t[2] - t[0]),
								};
							})(s);
						},
						[s]
					);
					return e.createElement(qr, {
						styles: Or(o, !r, s, n ? '' : '!important'),
					});
				},
				Tr = !1;
			if ('undefined' !== typeof window) {
				try {
					let Nr = Object.defineProperty({}, 'passive', {
						get () {
							return (Tr = !0), !0;
						},
					});
					window.addEventListener('test', Nr, Nr),
						window.removeEventListener('test', Nr, Nr);
				} catch (e) {
					Tr = !1;
				}
			}
			var Ar = !!Tr && { passive: !1 },
				Mr = function (e, t) {
					const r = window.getComputedStyle(e);
					return (
						'hidden' !== r[t] &&
						!(
							r.overflowY === r.overflowX &&
							!(function (e) {
								return 'TEXTAREA' === e.tagName;
							})(e) &&
							'visible' === r[t]
						)
					);
				},
				Ur = function (e, t) {
					let r = t;
					do {
						if (
							('undefined' !== typeof ShadowRoot &&
								r instanceof ShadowRoot &&
								(r = r.host),
							Lr(e, r))
						) {
							const n = Fr(e, r);
							if (n[1] > n[2]) {
								return !0;
							}
						}
						r = r.parentNode;
					} while (r && r !== document.body);
					return !1;
				},
				Lr = function (e, t) {
					return 'v' === e
						? (function (e) {
								return Mr(e, 'overflowY');
							})(t)
						: (function (e) {
								return Mr(e, 'overflowX');
							})(t);
				},
				Fr = function (e, t) {
					return 'v' === e
						? [(r = t).scrollTop, r.scrollHeight, r.clientHeight]
						: (function (e) {
								return [
									e.scrollLeft,
									e.scrollWidth,
									e.clientWidth,
								];
							})(t);
					let r;
				},
				_r = function (e) {
					return 'changedTouches' in e
						? [
								e.changedTouches[0].clientX,
								e.changedTouches[0].clientY,
							]
						: [0, 0];
				},
				Qr = function (e) {
					return [e.deltaX, e.deltaY];
				},
				Br = function (e) {
					return e && 'current' in e ? e.current : e;
				},
				Kr = function (e) {
					return '\n  .block-interactivity-'
						.concat(
							e,
							' {pointer-events: none;}\n  .allow-interactivity-'
						)
						.concat(e, ' {pointer-events: all;}\n');
				},
				$r = 0,
				zr = [];
			const Hr =
				((Wr = function (t) {
					const r = e.useRef([]),
						n = e.useRef([0, 0]),
						a = e.useRef(),
						s = e.useState($r++)[0],
						o = e.useState(function () {
							return Sr();
						})[0],
						i = e.useRef(t);
					e.useEffect(
						function () {
							i.current = t;
						},
						[t]
					),
						e.useEffect(
							function () {
								if (t.inert) {
									document.body.classList.add(
										'block-interactivity-'.concat(s)
									);
									const e = (function (e, t, r) {
										if (r || 2 === arguments.length)
											{for (
												var n, a = 0, s = t.length;
												a < s;
												a++
											)
												(!n && a in t) ||
													(n ||
														(n =
															Array.prototype.slice.call(
																t,
																0,
																a
															)),
													(n[a] = t[a]));}
										return e.concat(
											n || Array.prototype.slice.call(t)
										);
									})(
										[t.lockRef.current],
										(t.shards || []).map(Br),
										!0
									).filter(Boolean);
									return (
										e.forEach(function (e) {
											return e.classList.add(
												'allow-interactivity-'.concat(s)
											);
										}),
										function () {
											document.body.classList.remove(
												'block-interactivity-'.concat(s)
											),
												e.forEach(function (e) {
													return e.classList.remove(
														'allow-interactivity-'.concat(
															s
														)
													);
												});
										}
									);
								}
							},
							[t.inert, t.lockRef.current, t.shards]
						);
					const c = e.useCallback(function (e, t) {
							if ('touches' in e && 2 === e.touches.length)
								{return !i.current.allowPinchZoom;}
							let r,
								s = _r(e),
								o = n.current,
								c = 'deltaX' in e ? e.deltaX : o[0] - s[0],
								l = 'deltaY' in e ? e.deltaY : o[1] - s[1],
								u = e.target,
								d = Math.abs(c) > Math.abs(l) ? 'h' : 'v';
							if (
								'touches' in e &&
								'h' === d &&
								'range' === u.type
							)
								{return !1;}
							let h = Ur(d, u);
							if (!h) {return !0;}
							if (
								(h
									? (r = d)
									: ((r = 'v' === d ? 'h' : 'v'),
										(h = Ur(d, u))),
								!h)
							)
								{return !1;}
							if (
								(!a.current &&
									'changedTouches' in e &&
									(c || l) &&
									(a.current = r),
								!r)
							)
								{return !0;}
							let p = a.current || r;
							return (function (e, t, r, n) {
								let a = (function (e, t) {
										return 'h' === e && 'rtl' === t
											? -1
											: 1;
									})(e, window.getComputedStyle(t).direction),
									s = a * n,
									o = r.target,
									i = t.contains(o),
									c = !1,
									l = s > 0,
									u = 0,
									d = 0;
								do {
									let h = Fr(e, o),
										p = h[0],
										f = h[1] - h[2] - a * p;
									(p || f) &&
										Lr(e, o) &&
										((u += f), (d += p)),
										(o = o.parentNode);
								} while (
									(!i && o !== document.body) ||
									(i && (t.contains(o) || t === o))
								);
								return (
									((l && (0 === u || !1)) ||
										(!l && (0 === d || !1))) &&
										(c = !0),
									c
								);
							})(p, t, e, 'h' === p ? c : l);
						}, []),
						l = e.useCallback(function (e) {
							let t = e;
							if (zr.length && zr[zr.length - 1] === o) {
								let n = 'deltaY' in t ? Qr(t) : _r(t),
									a = r.current.filter(function (e) {
										return (
											e.name === t.type &&
											e.target === t.target &&
											((r = e.delta),
											(a = n),
											r[0] === a[0] && r[1] === a[1])
										);
										let r, a;
									})[0];
								if (a && a.should)
									{t.cancelable && t.preventDefault();}
								else if (!a) {
									let s = (i.current.shards || [])
										.map(Br)
										.filter(Boolean)
										.filter(function (e) {
											return e.contains(t.target);
										});
									(s.length > 0
										? c(t, s[0])
										: !i.current.noIsolation) &&
										t.cancelable &&
										t.preventDefault();
								}
							}
						}, []),
						u = e.useCallback(function (e, t, n, a) {
							let s = { name: e, delta: t, target: n, should: a };
							r.current.push(s),
								setTimeout(function () {
									r.current = r.current.filter(function (e) {
										return e !== s;
									});
								}, 1);
						}, []),
						d = e.useCallback(function (e) {
							(n.current = _r(e)), (a.current = void 0);
						}, []),
						h = e.useCallback(function (e) {
							u(e.type, Qr(e), e.target, c(e, t.lockRef.current));
						}, []),
						p = e.useCallback(function (e) {
							u(e.type, _r(e), e.target, c(e, t.lockRef.current));
						}, []);
					e.useEffect(function () {
						return (
							zr.push(o),
							t.setCallbacks({
								onScrollCapture: h,
								onWheelCapture: h,
								onTouchMoveCapture: p,
							}),
							document.addEventListener('wheel', l, Ar),
							document.addEventListener('touchmove', l, Ar),
							document.addEventListener('touchstart', d, Ar),
							function () {
								(zr = zr.filter(function (e) {
									return e !== o;
								})),
									document.removeEventListener(
										'wheel',
										l,
										Ar
									),
									document.removeEventListener(
										'touchmove',
										l,
										Ar
									),
									document.removeEventListener(
										'touchstart',
										d,
										Ar
									);
							}
						);
					}, []);
					const f = t.removeScrollBar,
						m = t.inert;
					return e.createElement(
						e.Fragment,
						null,
						m ? e.createElement(o, { styles: Kr(s) }) : null,
						f ? e.createElement(Ir, { gapMode: 'margin' }) : null
					);
				}),
				br.useMedium(Wr),
				xr);
			let Wr,
				Gr = e.forwardRef(function (t, r) {
					return e.createElement(
						Er,
						hr({}, t, { ref: r, sideCar: Hr })
					);
				});
			Gr.classNames = Er.classNames;
			const Vr = Gr;
			let Jr = new WeakMap(),
				Xr = new WeakMap(),
				Yr = {},
				Zr = 0,
				en = function (e) {
					return e && (e.host || en(e.parentNode));
				},
				tn = function (e, t, r) {
					void 0 === r && (r = 'data-aria-hidden');
					const n = Array.from(Array.isArray(e) ? e : [e]),
						a =
							t ||
							(function (e) {
								return 'undefined' === typeof document
									? null
									: (Array.isArray(e) ? e[0] : e)
											.ownerDocument.body;
							})(e);
					return a
						? (n.push.apply(
								n,
								Array.from(a.querySelectorAll('[aria-live]'))
							),
							(function (e, t, r, n) {
								const a = (function (e, t) {
									return t
										.map(function (t) {
											if (e.contains(t)) {return t;}
											let r = en(t);
											return r && e.contains(r)
												? r
												: (console.error(
														'aria-hidden',
														t,
														'in not contained inside',
														e,
														'. Doing nothing'
													),
													null);
										})
										.filter(function (e) {
											return Boolean(e);
										});
								})(t, Array.isArray(e) ? e : [e]);
								Yr[r] || (Yr[r] = new WeakMap());
								const s = Yr[r],
									o = [],
									i = new Set(),
									c = new Set(a),
									l = function (e) {
										e &&
											!i.has(e) &&
											(i.add(e), l(e.parentNode));
									};
								a.forEach(l);
								const u = function (e) {
									e &&
										!c.has(e) &&
										Array.prototype.forEach.call(
											e.children,
											function (e) {
												if (i.has(e)) {u(e);}
												else
													{try {
														var t =
																e.getAttribute(
																	n
																),
															a =
																null !== t &&
																'false' !== t,
															c =
																(Jr.get(e) ||
																	0) + 1,
															l =
																(s.get(e) ||
																	0) + 1;
														Jr.set(e, c),
															s.set(e, l),
															o.push(e),
															1 === c &&
																a &&
																Xr.set(e, !0),
															1 === l &&
																e.setAttribute(
																	r,
																	'true'
																),
															a ||
																e.setAttribute(
																	n,
																	'true'
																);
													} catch (t) {
														console.error(
															'aria-hidden: cannot operate on ',
															e,
															t
														);
													}}
											}
										);
								};
								return (
									u(t),
									i.clear(),
									Zr++,
									function () {
										o.forEach(function (e) {
											const t = Jr.get(e) - 1,
												a = s.get(e) - 1;
											Jr.set(e, t),
												s.set(e, a),
												t ||
													(Xr.has(e) ||
														e.removeAttribute(n),
													Xr.delete(e)),
												a || e.removeAttribute(r);
										}),
											--Zr ||
												((Jr = new WeakMap()),
												(Jr = new WeakMap()),
												(Xr = new WeakMap()),
												(Yr = {}));
									}
								);
							})(n, a, r, 'aria-hidden'))
						: function () {
								return null;
							};
				};
			const rn = 'Dialog',
				[nn, an] = (function (t, r = []) {
					let n = [];
					const a = () => {
						const r = n.map((t) => (0, e.createContext)(t));
						return function (n) {
							const a = (null == n ? void 0 : n[t]) || r;
							return (0, e.useMemo)(
								() => ({ [`__scope${t}`]: { ...n, [t]: a } }),
								[n, a]
							);
						};
					};
					return (
						(a.scopeName = t),
						[
							function (r, a) {
								const s = (0, e.createContext)(a),
									o = n.length;
								function i(r) {
									const { scope: n, children: a, ...i } = r,
										c = (null == n ? void 0 : n[t][o]) || s,
										l = (0, e.useMemo)(
											() => i,
											Object.values(i)
										);
									return (0, e.createElement)(
										c.Provider,
										{ value: l },
										a
									);
								}
								return (
									(n = [...n, a]),
									(i.displayName = r + 'Provider'),
									[
										i,
										function (n, i) {
											const c =
													(null == i
														? void 0
														: i[t][o]) || s,
												l = (0, e.useContext)(c);
											if (l) {
												return l;
											}
											if (void 0 !== a) {
												return a;
											}
											throw new Error(
												`\`${n}\` must be used within \`${r}\``
											);
										},
									]
								);
							},
							Tt(a, ...r),
						]
					);
				})(rn),
				[sn, on] = nn(rn),
				cn = 'DialogPortal',
				[ln, un] = nn(cn, { forceMount: void 0 }),
				dn = 'DialogOverlay',
				hn = (0, e.forwardRef)((t, r) => {
					const n = un(dn, t.__scopeDialog),
						{ forceMount: a = n.forceMount, ...s } = t,
						o = on(dn, t.__scopeDialog);
					return o.modal
						? (0, e.createElement)(
								cr,
								{ present: a || o.open },
								(0, e.createElement)(pn, kt({}, s, { ref: r }))
							)
						: null;
				}),
				pn = (0, e.forwardRef)((t, r) => {
					const { __scopeDialog: n, ...a } = t,
						s = on(dn, n);
					return (0, e.createElement)(
						Vr,
						{ as: Ft, allowPinchZoom: !0, shards: [s.contentRef] },
						(0, e.createElement)(
							$t.div,
							kt({ 'data-state': wn(s.open) }, a, {
								ref: r,
								style: { pointerEvents: 'auto', ...a.style },
							})
						)
					);
				}),
				fn = 'DialogContent',
				mn = (0, e.forwardRef)((t, r) => {
					const n = un(fn, t.__scopeDialog),
						{ forceMount: a = n.forceMount, ...s } = t,
						o = on(fn, t.__scopeDialog);
					return (0, e.createElement)(
						cr,
						{ present: a || o.open },
						o.modal
							? (0, e.createElement)(yn, kt({}, s, { ref: r }))
							: (0, e.createElement)(vn, kt({}, s, { ref: r }))
					);
				}),
				yn = (0, e.forwardRef)((t, r) => {
					const n = on(fn, t.__scopeDialog),
						a = (0, e.useRef)(null),
						s = It(r, n.contentRef, a);
					return (
						(0, e.useEffect)(() => {
							const e = a.current;
							if (e) {
								return tn(e);
							}
						}, []),
						(0, e.createElement)(
							gn,
							kt({}, t, {
								ref: s,
								trapFocus: n.open,
								disableOutsidePointerEvents: !0,
								onCloseAutoFocus: Ot(
									t.onCloseAutoFocus,
									(e) => {
										let t;
										e.preventDefault(),
											null ===
												(t = n.triggerRef.current) ||
												void 0 === t ||
												t.focus();
									}
								),
								onPointerDownOutside: Ot(
									t.onPointerDownOutside,
									(e) => {
										const t = e.detail.originalEvent,
											r =
												0 === t.button &&
												!0 === t.ctrlKey;
										(2 === t.button || r) &&
											e.preventDefault();
									}
								),
								onFocusOutside: Ot(t.onFocusOutside, (e) =>
									e.preventDefault()
								),
							})
						)
					);
				}),
				vn = (0, e.forwardRef)((t, r) => {
					const n = on(fn, t.__scopeDialog),
						a = (0, e.useRef)(!1),
						s = (0, e.useRef)(!1);
					return (0, e.createElement)(
						gn,
						kt({}, t, {
							ref: r,
							trapFocus: !1,
							disableOutsidePointerEvents: !1,
							onCloseAutoFocus: (e) => {
								let r, o;
								null === (r = t.onCloseAutoFocus) ||
									void 0 === r ||
									r.call(t, e),
									e.defaultPrevented ||
										(a.current ||
											null ===
												(o = n.triggerRef.current) ||
											void 0 === o ||
											o.focus(),
										e.preventDefault()),
									(a.current = !1),
									(s.current = !1);
							},
							onInteractOutside: (e) => {
								let r, o;
								null === (r = t.onInteractOutside) ||
									void 0 === r ||
									r.call(t, e),
									e.defaultPrevented ||
										((a.current = !0),
										'pointerdown' ===
											e.detail.originalEvent.type &&
											(s.current = !0));
								const i = e.target;
								(null === (o = n.triggerRef.current) ||
								void 0 === o
									? void 0
									: o.contains(i)) && e.preventDefault(),
									'focusin' === e.detail.originalEvent.type &&
										s.current &&
										e.preventDefault();
							},
						})
					);
				}),
				gn = (0, e.forwardRef)((t, r) => {
					const {
							__scopeDialog: n,
							trapFocus: a,
							onOpenAutoFocus: s,
							onCloseAutoFocus: o,
							...i
						} = t,
						c = on(fn, n),
						l = It(r, (0, e.useRef)(null));
					return (
						(0, e.useEffect)(() => {
							let e, t;
							const r = document.querySelectorAll(
								'[data-radix-focus-guard]'
							);
							return (
								document.body.insertAdjacentElement(
									'afterbegin',
									null !== (e = r[0]) && void 0 !== e
										? e
										: dr()
								),
								document.body.insertAdjacentElement(
									'beforeend',
									null !== (t = r[1]) && void 0 !== t
										? t
										: dr()
								),
								ur++,
								() => {
									1 === ur &&
										document
											.querySelectorAll(
												'[data-radix-focus-guard]'
											)
											.forEach((e) => e.remove()),
										ur--;
								}
							);
						}, []),
						(0, e.createElement)(
							e.Fragment,
							null,
							(0, e.createElement)(
								er,
								{
									asChild: !0,
									loop: !0,
									trapped: a,
									onMountAutoFocus: s,
									onUnmountAutoFocus: o,
								},
								(0, e.createElement)(
									Gt,
									kt(
										{
											role: 'dialog',
											id: c.contentId,
											'aria-describedby': c.descriptionId,
											'aria-labelledby': c.titleId,
											'data-state': wn(c.open),
										},
										i,
										{
											ref: l,
											onDismiss: () => c.onOpenChange(!1),
										}
									)
								)
							),
							!1
						)
					);
				});
			function wn(e) {
				return e ? 'open' : 'closed';
			}
			const [bn, jn] = (function (t, r) {
					const n = (0, e.createContext)(r);
					function a(t) {
						const { children: r, ...a } = t,
							s = (0, e.useMemo)(() => a, Object.values(a));
						return (0, e.createElement)(
							n.Provider,
							{ value: s },
							r
						);
					}
					return (
						(a.displayName = t + 'Provider'),
						[
							a,
							function (a) {
								const s = (0, e.useContext)(n);
								if (s) {
									return s;
								}
								if (void 0 !== r) {
									return r;
								}
								throw new Error(
									`\`${a}\` must be used within \`${t}\``
								);
							},
						]
					);
				})('DialogTitleWarning', {
					contentName: fn,
					titleName: 'DialogTitle',
					docsSlug: 'dialog',
				}),
				En = (t) => {
					const {
							__scopeDialog: r,
							children: n,
							open: a,
							defaultOpen: s,
							onOpenChange: o,
							modal: i = !0,
						} = t,
						c = (0, e.useRef)(null),
						l = (0, e.useRef)(null),
						[u = !1, d] = (function ({
							prop: t,
							defaultProp: r,
							onChange: n = () => {},
						}) {
							const [a, s] = (function ({
									defaultProp: t,
									onChange: r,
								}) {
									const n = (0, e.useState)(t),
										[a] = n,
										s = (0, e.useRef)(a),
										o = Lt(r);
									return (
										(0, e.useEffect)(() => {
											s.current !== a &&
												(o(a), (s.current = a));
										}, [a, s, o]),
										n
									);
								})({ defaultProp: r, onChange: n }),
								o = void 0 !== t,
								i = o ? t : a,
								c = Lt(n);
							return [
								i,
								(0, e.useCallback)(
									(e) => {
										if (o) {
											const r =
												'function' === typeof e
													? e(t)
													: e;
											r !== t && c(r);
										} else {
											s(e);
										}
									},
									[o, t, s, c]
								),
							];
						})({ prop: a, defaultProp: s, onChange: o });
					return (0, e.createElement)(
						sn,
						{
							scope: r,
							triggerRef: c,
							contentRef: l,
							contentId: Ut(),
							titleId: Ut(),
							descriptionId: Ut(),
							open: u,
							onOpenChange: d,
							onOpenToggle: (0, e.useCallback)(
								() => d((e) => !e),
								[d]
							),
							modal: i,
						},
						n
					);
				},
				xn = (t) => {
					const {
							__scopeDialog: r,
							forceMount: n,
							children: a,
							container: s,
						} = t,
						o = on(cn, r);
					return (0, e.createElement)(
						ln,
						{ scope: r, forceMount: n },
						e.Children.map(a, (t) =>
							(0, e.createElement)(
								cr,
								{ present: n || o.open },
								(0, e.createElement)(
									ir,
									{ asChild: !0, container: s },
									t
								)
							)
						)
					);
				},
				Pn = hn,
				Sn = mn;
			const Rn = '[cmdk-group=""]',
				Cn = '[cmdk-group-items=""]',
				qn = '[cmdk-item=""]',
				kn = `${qn}:not([aria-disabled="true"])`,
				On = 'cmdk-item-select',
				Dn = 'data-value',
				In = (e, t, r) => qt(e, t, r),
				Tn = e.createContext(void 0),
				Nn = () => e.useContext(Tn),
				An = e.createContext(void 0),
				Mn = () => e.useContext(An),
				Un = e.createContext(void 0),
				Ln = e.forwardRef((t, r) => {
					const n = Zn(() => {
							var e, r;
							return {
								search: '',
								value:
									null !=
									(r =
										null != (e = t.value)
											? e
											: t.defaultValue)
										? r
										: '',
								filtered: {
									count: 0,
									items: new Map(),
									groups: new Set(),
								},
							};
						}),
						a = Zn(() => new Set()),
						s = Zn(() => new Map()),
						o = Zn(() => new Map()),
						i = Zn(() => new Set()),
						c = Xn(t),
						{
							label: l,
							children: u,
							value: d,
							onValueChange: h,
							filter: p,
							shouldFilter: f,
							loop: m,
							disablePointerSelection: y = !1,
							vimBindings: v = !0,
							...g
						} = t,
						w = e.useId(),
						b = e.useId(),
						j = e.useId(),
						E = e.useRef(null),
						x = na();
					Yn(() => {
						if (void 0 !== d) {
							const e = d.trim();
							(n.current.value = e), P.emit();
						}
					}, [d]),
						Yn(() => {
							x(6, O);
						}, []);
					const P = e.useMemo(
							() => ({
								subscribe: (e) => (
									i.current.add(e), () => i.current.delete(e)
								),
								snapshot: () => n.current,
								setState: (e, t, r) => {
									var a, s, o;
									if (!Object.is(n.current[e], t)) {
										if (
											((n.current[e] = t), 'search' === e)
										)
											k(), C(), x(1, q);
										else if (
											'value' === e &&
											(r || x(5, O),
											void 0 !==
												(null == (a = c.current)
													? void 0
													: a.value))
										) {
											let e = null != t ? t : '';
											return void (
												null ==
													(o = (s = c.current)
														.onValueChange) ||
												o.call(s, e)
											);
										}
										P.emit();
									}
								},
								emit: () => {
									i.current.forEach((e) => e());
								},
							}),
							[]
						),
						S = e.useMemo(
							() => ({
								value: (e, t, r) => {
									var a;
									t !==
										(null == (a = o.current.get(e))
											? void 0
											: a.value) &&
										(o.current.set(e, {
											value: t,
											keywords: r,
										}),
										n.current.filtered.items.set(
											e,
											R(t, r)
										),
										x(2, () => {
											C(), P.emit();
										}));
								},
								item: (e, t) => (
									a.current.add(e),
									t &&
										(s.current.has(t)
											? s.current.get(t).add(e)
											: s.current.set(t, new Set([e]))),
									x(3, () => {
										k(),
											C(),
											n.current.value || q(),
											P.emit();
									}),
									() => {
										o.current.delete(e),
											a.current.delete(e),
											n.current.filtered.items.delete(e);
										let t = D();
										x(4, () => {
											k(),
												(null == t
													? void 0
													: t.getAttribute('id')) ===
													e && q(),
												P.emit();
										});
									}
								),
								group: (e) => (
									s.current.has(e) ||
										s.current.set(e, new Set()),
									() => {
										o.current.delete(e),
											s.current.delete(e);
									}
								),
								filter: () => c.current.shouldFilter,
								label: l || t['aria-label'],
								disablePointerSelection: y,
								listId: w,
								inputId: j,
								labelId: b,
								listInnerRef: E,
							}),
							[]
						);
					function R(e, t) {
						let r, a;
						const s =
							null !=
							(a = null == (r = c.current) ? void 0 : r.filter)
								? a
								: In;
						return e ? s(e, n.current.search, t) : 0;
					}
					function C() {
						if (!n.current.search || !1 === c.current.shouldFilter)
							{return;}
						const e = n.current.filtered.items,
							t = [];
						n.current.filtered.groups.forEach((r) => {
							let n = s.current.get(r),
								a = 0;
							n.forEach((t) => {
								const r = e.get(t);
								a = Math.max(r, a);
							}),
								t.push([r, a]);
						});
						const r = E.current;
						I()
							.sort((t, r) => {
								let n, a;
								const s = t.getAttribute('id'),
									o = r.getAttribute('id');
								return (
									(null != (n = e.get(o)) ? n : 0) -
									(null != (a = e.get(s)) ? a : 0)
								);
							})
							.forEach((e) => {
								const t = e.closest(Cn);
								t
									? t.appendChild(
											e.parentElement === t
												? e
												: e.closest(`${Cn} > *`)
										)
									: r.appendChild(
											e.parentElement === r
												? e
												: e.closest(`${Cn} > *`)
										);
							}),
							t
								.sort((e, t) => t[1] - e[1])
								.forEach((e) => {
									const t = E.current.querySelector(
										`${Rn}[${Dn}="${encodeURIComponent(e[0])}"]`
									);
									null == t || t.parentElement.appendChild(t);
								});
					}
					function q() {
						const e = I().find(
								(e) =>
									'true' !== e.getAttribute('aria-disabled')
							),
							t = null == e ? void 0 : e.getAttribute(Dn);
						P.setState('value', t || void 0);
					}
					function k() {
						let e, t, r, i;
						if (!n.current.search || !1 === c.current.shouldFilter)
							{return void (n.current.filtered.count =
								a.current.size);}
						n.current.filtered.groups = new Set();
						let l = 0;
						for (const s of a.current) {
							const a = R(
								null !=
									(t =
										null == (e = o.current.get(s))
											? void 0
											: e.value)
									? t
									: '',
								null !=
									(i =
										null == (r = o.current.get(s))
											? void 0
											: r.keywords)
									? i
									: []
							);
							n.current.filtered.items.set(s, a), a > 0 && l++;
						}
						for (const [e, t] of s.current)
							{for (let r of t)
								if (n.current.filtered.items.get(r) > 0) {
									n.current.filtered.groups.add(e);
									break;
								}}
						n.current.filtered.count = l;
					}
					function O() {
						let e, t, r;
						const n = D();
						n &&
							((null == (e = n.parentElement)
								? void 0
								: e.firstChild) === n &&
								(null ==
									(r =
										null == (t = n.closest(Rn))
											? void 0
											: t.querySelector(
													'[cmdk-group-heading=""]'
												)) ||
									r.scrollIntoView({ block: 'nearest' })),
							n.scrollIntoView({ block: 'nearest' }));
					}
					function D() {
						let e;
						return null == (e = E.current)
							? void 0
							: e.querySelector(`${qn}[aria-selected="true"]`);
					}
					function I() {
						let e;
						return Array.from(
							null == (e = E.current)
								? void 0
								: e.querySelectorAll(kn)
						);
					}
					function T(e) {
						const t = I()[e];
						t && P.setState('value', t.getAttribute(Dn));
					}
					function N(e) {
						let t;
						let r = D(),
							n = I(),
							a = n.findIndex((e) => e === r),
							s = n[a + e];
						null != (t = c.current) &&
							t.loop &&
							(s =
								a + e < 0
									? n[n.length - 1]
									: a + e === n.length
										? n[0]
										: n[a + e]),
							s && P.setState('value', s.getAttribute(Dn));
					}
					function A(e) {
						let t,
							r = D(),
							n = null == r ? void 0 : r.closest(Rn);
						for (; n && !t; )
							{(n = e > 0 ? Vn(n, Rn) : Jn(n, Rn)),
								(t = null == n ? void 0 : n.querySelector(kn));}
						t ? P.setState('value', t.getAttribute(Dn)) : N(e);
					}
					const M = () => T(I().length - 1),
						U = (e) => {
							e.preventDefault(),
								e.metaKey ? M() : e.altKey ? A(1) : N(1);
						},
						L = (e) => {
							e.preventDefault(),
								e.metaKey ? T(0) : e.altKey ? A(-1) : N(-1);
						};
					return e.createElement(
						$t.div,
						{
							ref: r,
							tabIndex: -1,
							...g,
							'cmdk-root': '',
							onKeyDown: (e) => {
								let t;
								if (
									(null == (t = g.onKeyDown) || t.call(g, e),
									!e.defaultPrevented)
								)
									{switch (e.key) {
										case 'n':
										case 'j':
											v && e.ctrlKey && U(e);
											break;
										case 'ArrowDown':
											U(e);
											break;
										case 'p':
										case 'k':
											v && e.ctrlKey && L(e);
											break;
										case 'ArrowUp':
											L(e);
											break;
										case 'Home':
											e.preventDefault(), T(0);
											break;
										case 'End':
											e.preventDefault(), M();
											break;
										case 'Enter':
											if (
												!e.nativeEvent.isComposing &&
												229 !== e.keyCode
											) {
												e.preventDefault();
												let t = D();
												if (t) {
													let e = new Event(On);
													t.dispatchEvent(e);
												}
											}
									}}
							},
						},
						e.createElement(
							'label',
							{
								'cmdk-label': '',
								htmlFor: S.inputId,
								id: S.labelId,
								style: sa,
							},
							l
						),
						aa(t, (t) =>
							e.createElement(
								An.Provider,
								{ value: P },
								e.createElement(Tn.Provider, { value: S }, t)
							)
						)
					);
				}),
				Fn = e.forwardRef((t, r) => {
					let n, a;
					const s = e.useId(),
						o = e.useRef(null),
						i = e.useContext(Un),
						c = Nn(),
						l = Xn(t),
						u =
							null !=
							(a =
								null == (n = l.current) ? void 0 : n.forceMount)
								? a
								: null == i
									? void 0
									: i.forceMount;
					Yn(() => {
						if (!u) {return c.item(s, null == i ? void 0 : i.id);}
					}, [u]);
					const d = ra(s, o, [t.value, t.children, o], t.keywords),
						h = Mn(),
						p = ta((e) => e.value && e.value === d.current),
						f = ta(
							(e) =>
								!(!u && !1 !== c.filter()) ||
								!e.search ||
								e.filtered.items.get(s) > 0
						);
					function m() {
						let e, t;
						y(),
							null == (t = (e = l.current).onSelect) ||
								t.call(e, d.current);
					}
					function y() {
						h.setState('value', d.current, !0);
					}
					if (
						(e.useEffect(() => {
							const e = o.current;
							if (e && !t.disabled)
								{return (
									e.addEventListener(On, m),
									() => e.removeEventListener(On, m)
								);}
						}, [f, t.onSelect, t.disabled]),
						!f)
					)
						{return null;}
					const {
						disabled: v,
						value: g,
						onSelect: w,
						forceMount: b,
						keywords: j,
						...E
					} = t;
					return e.createElement(
						$t.div,
						{
							ref: ea([o, r]),
							...E,
							id: s,
							'cmdk-item': '',
							role: 'option',
							'aria-disabled': !!v,
							'aria-selected': !!p,
							'data-disabled': !!v,
							'data-selected': !!p,
							onPointerMove:
								v || c.disablePointerSelection ? void 0 : y,
							onClick: v ? void 0 : m,
						},
						t.children
					);
				}),
				Qn = e.forwardRef((t, r) => {
					let { heading: n, children: a, forceMount: s, ...o } = t,
						i = e.useId(),
						c = e.useRef(null),
						l = e.useRef(null),
						u = e.useId(),
						d = Nn(),
						h = ta(
							(e) =>
								!(!s && !1 !== d.filter()) ||
								!e.search ||
								e.filtered.groups.has(i)
						);
					Yn(() => d.group(i), []), ra(i, c, [t.value, t.heading, l]);
					const p = e.useMemo(() => ({ id: i, forceMount: s }), [s]);
					return e.createElement(
						$t.div,
						{
							ref: ea([c, r]),
							...o,
							'cmdk-group': '',
							role: 'presentation',
							hidden: !h || void 0,
						},
						n &&
							e.createElement(
								'div',
								{
									ref: l,
									'cmdk-group-heading': '',
									'aria-hidden': !0,
									id: u,
								},
								n
							),
						aa(t, (t) =>
							e.createElement(
								'div',
								{
									'cmdk-group-items': '',
									role: 'group',
									'aria-labelledby': n ? u : void 0,
								},
								e.createElement(Un.Provider, { value: p }, t)
							)
						)
					);
				}),
				Bn = e.forwardRef((t, r) => {
					let { alwaysRender: n, ...a } = t,
						s = e.useRef(null),
						o = ta((e) => !e.search);
					return n || o
						? e.createElement($t.div, {
								ref: ea([s, r]),
								...a,
								'cmdk-separator': '',
								role: 'separator',
							})
						: null;
				}),
				Kn = e.forwardRef((t, r) => {
					let { onValueChange: n, ...a } = t,
						s = null != t.value,
						o = Mn(),
						i = ta((e) => e.search),
						c = ta((e) => e.value),
						l = Nn(),
						u = e.useMemo(() => {
							let e;
							const t =
								null == (e = l.listInnerRef.current)
									? void 0
									: e.querySelector(
											`${qn}[${Dn}="${encodeURIComponent(c)}"]`
										);
							return null == t ? void 0 : t.getAttribute('id');
						}, []);
					return (
						e.useEffect(() => {
							null != t.value && o.setState('search', t.value);
						}, [t.value]),
						e.createElement($t.input, {
							ref: r,
							...a,
							'cmdk-input': '',
							autoComplete: 'off',
							autoCorrect: 'off',
							spellCheck: !1,
							'aria-autocomplete': 'list',
							role: 'combobox',
							'aria-expanded': !0,
							'aria-controls': l.listId,
							'aria-labelledby': l.labelId,
							'aria-activedescendant': u,
							id: l.inputId,
							type: 'text',
							value: s ? t.value : i,
							onChange: (e) => {
								s || o.setState('search', e.target.value),
									null == n || n(e.target.value);
							},
						})
					);
				}),
				$n = e.forwardRef((t, r) => {
					let { children: n, label: a = 'Suggestions', ...s } = t,
						o = e.useRef(null),
						i = e.useRef(null),
						c = Nn();
					return (
						e.useEffect(() => {
							if (i.current && o.current) {
								let e,
									t = i.current,
									r = o.current,
									n = new ResizeObserver(() => {
										e = requestAnimationFrame(() => {
											const e = t.offsetHeight;
											r.style.setProperty(
												'--cmdk-list-height',
												e.toFixed(1) + 'px'
											);
										});
									});
								return (
									n.observe(t),
									() => {
										cancelAnimationFrame(e), n.unobserve(t);
									}
								);
							}
						}, []),
						e.createElement(
							$t.div,
							{
								ref: ea([o, r]),
								...s,
								'cmdk-list': '',
								role: 'listbox',
								'aria-label': a,
								id: c.listId,
							},
							aa(t, (t) =>
								e.createElement(
									'div',
									{
										ref: ea([i, c.listInnerRef]),
										'cmdk-list-sizer': '',
									},
									t
								)
							)
						)
					);
				}),
				zn = e.forwardRef((t, r) => {
					const {
						open: n,
						onOpenChange: a,
						overlayClassName: s,
						contentClassName: o,
						container: i,
						...c
					} = t;
					return e.createElement(
						En,
						{ open: n, onOpenChange: a },
						e.createElement(
							xn,
							{ container: i },
							e.createElement(Pn, {
								'cmdk-overlay': '',
								className: s,
							}),
							e.createElement(
								Sn,
								{
									'aria-label': t.label,
									'cmdk-dialog': '',
									className: o,
								},
								e.createElement(Ln, { ref: r, ...c })
							)
						)
					);
				}),
				Hn = e.forwardRef((t, r) =>
					ta((e) => 0 === e.filtered.count)
						? e.createElement($t.div, {
								ref: r,
								...t,
								'cmdk-empty': '',
								role: 'presentation',
							})
						: null
				),
				Wn = e.forwardRef((t, r) => {
					const {
						progress: n,
						children: a,
						label: s = 'Loading...',
						...o
					} = t;
					return e.createElement(
						$t.div,
						{
							ref: r,
							...o,
							'cmdk-loading': '',
							role: 'progressbar',
							'aria-valuenow': n,
							'aria-valuemin': 0,
							'aria-valuemax': 100,
							'aria-label': s,
						},
						aa(t, (t) =>
							e.createElement('div', { 'aria-hidden': !0 }, t)
						)
					);
				}),
				Gn = Object.assign(Ln, {
					List: $n,
					Item: Fn,
					Input: Kn,
					Group: Qn,
					Separator: Bn,
					Dialog: zn,
					Empty: Hn,
					Loading: Wn,
				});
			function Vn(e, t) {
				let r = e.nextElementSibling;
				for (; r; ) {
					if (r.matches(t)) {
						return r;
					}
					r = r.nextElementSibling;
				}
			}
			function Jn(e, t) {
				let r = e.previousElementSibling;
				for (; r; ) {
					if (r.matches(t)) {
						return r;
					}
					r = r.previousElementSibling;
				}
			}
			function Xn(t) {
				const r = e.useRef(t);
				return (
					Yn(() => {
						r.current = t;
					}),
					r
				);
			}
			var Yn =
				'undefined' === typeof window ? e.useEffect : e.useLayoutEffect;
			function Zn(t) {
				const r = e.useRef();
				return void 0 === r.current && (r.current = t()), r;
			}
			function ea(e) {
				return (t) => {
					e.forEach((e) => {
						'function' === typeof e
							? e(t)
							: null != e && (e.current = t);
					});
				};
			}
			function ta(t) {
				const r = Mn(),
					n = () => t(r.snapshot());
				return e.useSyncExternalStore(r.subscribe, n, n);
			}
			function ra(t, r, n, a = []) {
				const s = e.useRef(),
					o = Nn();
				return (
					Yn(() => {
						let e;
						const i = (() => {
								let e;
								for (const t of n) {
									if ('string' === typeof t) {return t.trim();}
									if ('object' === typeof t && 'current' in t)
										{return t.current
											? null ==
												(e = t.current.textContent)
												? void 0
												: e.trim()
											: s.current;}
								}
							})(),
							c = a.map((e) => e.trim());
						o.value(t, i, c),
							null == (e = r.current) || e.setAttribute(Dn, i),
							(s.current = i);
					}),
					s
				);
			}
			var na = () => {
				const [t, r] = e.useState(),
					n = Zn(() => new Map());
				return (
					Yn(() => {
						n.current.forEach((e) => e()), (n.current = new Map());
					}, [t]),
					(e, t) => {
						n.current.set(e, t), r({});
					}
				);
			};
			function aa({ asChild: t, children: r }, n) {
				return t && e.isValidElement(r)
					? e.cloneElement(
							(function (e) {
								const t = e.type;
								return 'function' === typeof t
									? t(e.props)
									: 'render' in t
										? t.render(e.props)
										: e;
							})(r),
							{ ref: r.ref },
							n(r.props.children)
						)
					: n(r);
			}
			var sa = {
					position: 'absolute',
					width: '1px',
					height: '1px',
					padding: '0',
					margin: '-1px',
					overflow: 'hidden',
					clip: 'rect(0, 0, 0, 0)',
					whiteSpace: 'nowrap',
					borderWidth: '0',
				},
				oa = o(7365);
			function ia(e) {
				let t;
				const r = `algolia-client-js-${e.key}`;
				function n() {
					return (
						void 0 === t &&
							(t = e.localStorage || window.localStorage),
						t
					);
				}
				function a() {
					return JSON.parse(n().getItem(r) || '{}');
				}
				function s(e) {
					n().setItem(r, JSON.stringify(e));
				}
				return {
					get: (t, r, n = { miss: () => Promise.resolve() }) =>
						Promise.resolve()
							.then(
								() => (
									(function () {
										const t = e.timeToLive
												? 1e3 * e.timeToLive
												: null,
											r = a(),
											n = Object.fromEntries(
												Object.entries(r).filter(
													([, e]) =>
														void 0 !== e.timestamp
												)
											);
										s(n),
											t &&
												s(
													Object.fromEntries(
														Object.entries(
															n
														).filter(([, e]) => {
															const r =
																new Date().getTime();
															return !(
																e.timestamp +
																	t <
																r
															);
														})
													)
												);
									})(),
									a()[JSON.stringify(t)]
								)
							)
							.then((e) =>
								Promise.all([e ? e.value : r(), void 0 !== e])
							)
							.then(([e, t]) => Promise.all([e, t || n.miss(e)]))
							.then(([e]) => e),
					set: (e, t) =>
						Promise.resolve().then(() => {
							const s = a();
							return (
								(s[JSON.stringify(e)] = {
									timestamp: new Date().getTime(),
									value: t,
								}),
								n().setItem(r, JSON.stringify(s)),
								t
							);
						}),
					delete: (e) =>
						Promise.resolve().then(() => {
							const t = a();
							delete t[JSON.stringify(e)],
								n().setItem(r, JSON.stringify(t));
						}),
					clear: () =>
						Promise.resolve().then(() => {
							n().removeItem(r);
						}),
				};
			}
			function ca(e) {
				const t = [...e.caches],
					r = t.shift();
				return void 0 === r
					? {
							get: (
								e,
								t,
								r = { miss: () => Promise.resolve() }
							) =>
								t()
									.then((e) => Promise.all([e, r.miss(e)]))
									.then(([e]) => e),
							set: (e, t) => Promise.resolve(t),
							delete: (e) => Promise.resolve(),
							clear: () => Promise.resolve(),
						}
					: {
							get: (
								e,
								n,
								a = { miss: () => Promise.resolve() }
							) =>
								r
									.get(e, n, a)
									.catch(() =>
										ca({ caches: t }).get(e, n, a)
									),
							set: (e, n) =>
								r
									.set(e, n)
									.catch(() => ca({ caches: t }).set(e, n)),
							delete: (e) =>
								r
									.delete(e)
									.catch(() => ca({ caches: t }).delete(e)),
							clear: () =>
								r
									.clear()
									.catch(() => ca({ caches: t }).clear()),
						};
			}
			function la(e = { serializable: !0 }) {
				let t = {};
				return {
					get(r, n, a = { miss: () => Promise.resolve() }) {
						const s = JSON.stringify(r);
						if (s in t) {
							return Promise.resolve(
								e.serializable ? JSON.parse(t[s]) : t[s]
							);
						}
						const o = n();
						return o.then((e) => a.miss(e)).then(() => o);
					},
					set: (r, n) => (
						(t[JSON.stringify(r)] = e.serializable
							? JSON.stringify(n)
							: n),
						Promise.resolve(n)
					),
					delete: (e) => (
						delete t[JSON.stringify(e)], Promise.resolve()
					),
					clear: () => ((t = {}), Promise.resolve()),
				};
			}
			function ua({
				func: e,
				validate: t,
				aggregator: r,
				error: n,
				timeout: a = () => 0,
			}) {
				const s = (o) =>
					new Promise((i, c) => {
						e(o)
							.then(
								(e) => (
									r && r(e),
									t(e)
										? i(e)
										: n && n.validate(e)
											? c(new Error(n.message(e)))
											: setTimeout(() => {
													s(e).then(i).catch(c);
												}, a())
								)
							)
							.catch((e) => {
								c(e);
							});
					});
				return s();
			}
			function da({ algoliaAgents: e, client: t, version: r }) {
				const n = (function (e) {
					const t = {
						value: `Algolia for JavaScript (${e})`,
						add(e) {
							const r = `; ${e.segment}${void 0 !== e.version ? ` (${e.version})` : ''}`;
							return (
								-1 === t.value.indexOf(r) &&
									(t.value = `${t.value}${r}`),
								t
							);
						},
					};
					return t;
				})(r).add({ segment: t, version: r });
				return e.forEach((e) => n.add(e)), n;
			}
			const ha = 12e4;
			function pa(e, t = 'up') {
				const r = Date.now();
				return {
					...e,
					status: t,
					lastUpdate: r,
					isUp() {
						return 'up' === t || Date.now() - r > ha;
					},
					isTimedOut() {
						return 'timed out' === t && Date.now() - r <= ha;
					},
				};
			}
			const fa = class extends Error {
					name = 'AlgoliaError';
					constructor(e, t) {
						super(e), t && (this.name = t);
					}
				},
				ma = class extends fa {
					stackTrace;
					constructor(e, t, r) {
						super(e, r), (this.stackTrace = t);
					}
				},
				ya = class extends ma {
					constructor(e) {
						super(
							'Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.',
							e,
							'RetryError'
						);
					}
				},
				va = class extends ma {
					status;
					constructor(e, t, r, n = 'ApiError') {
						super(e, r, n), (this.status = t);
					}
				},
				ga = class extends fa {
					response;
					constructor(e, t) {
						super(e, 'DeserializationError'), (this.response = t);
					}
				},
				wa = class extends va {
					error;
					constructor(e, t, r, n) {
						super(e, t, n, 'DetailedApiError'), (this.error = r);
					}
				};
			function ba(e, t, r) {
				const n =
					((a = r),
					Object.keys(a)
						.filter((e) => void 0 !== a[e])
						.sort()
						.map(
							(e) =>
								`${e}=${encodeURIComponent('[object Array]' === Object.prototype.toString.call(a[e]) ? a[e].join(',') : a[e]).replace(/\+/g, '%20')}`
						)
						.join('&'));
				let a;
				let s = `${e.protocol}://${e.url}${e.port ? `:${e.port}` : ''}/${'/' === t.charAt(0) ? t.substring(1) : t}`;
				return n.length && (s += `?${n}`), s;
			}
			function ja(e) {
				const t = e.request.headers['x-algolia-api-key']
					? { 'x-algolia-api-key': '*****' }
					: {};
				return {
					...e,
					request: {
						...e.request,
						headers: { ...e.request.headers, ...t },
					},
				};
			}
			const Ea = '5.10.2';
			function xa(e) {
				return [
					{
						url: `${e}-dsn.algolia.net`,
						accept: 'read',
						protocol: 'https',
					},
					{
						url: `${e}.algolia.net`,
						accept: 'write',
						protocol: 'https',
					},
				].concat(
					(function (e) {
						const t = e;
						for (let r = e.length - 1; r > 0; r--) {
							const n = Math.floor(Math.random() * (r + 1)),
								a = e[r];
							(t[r] = e[n]), (t[n] = a);
						}
						return t;
					})([
						{
							url: `${e}-1.algolianet.com`,
							accept: 'readWrite',
							protocol: 'https',
						},
						{
							url: `${e}-2.algolianet.com`,
							accept: 'readWrite',
							protocol: 'https',
						},
						{
							url: `${e}-3.algolianet.com`,
							accept: 'readWrite',
							protocol: 'https',
						},
					])
				);
			}
			function Pa(e, t, r) {
				if (!e || 'string' !== typeof e) {
					throw new Error('`appId` is missing.');
				}
				if (!t || 'string' !== typeof t) {
					throw new Error('`apiKey` is missing.');
				}
				return (function ({
					appId: e,
					apiKey: t,
					authMode: r,
					algoliaAgents: n,
					...a
				}) {
					const s = (function (e, t, r = 'WithinHeaders') {
							const n = {
								'x-algolia-api-key': t,
								'x-algolia-application-id': e,
							};
							return {
								headers: () => ('WithinHeaders' === r ? n : {}),
								queryParameters: () =>
									'WithinQueryParameters' === r ? n : {},
							};
						})(e, t, r),
						o = (function ({
							hosts: e,
							hostsCache: t,
							baseHeaders: r,
							logger: n,
							baseQueryParameters: a,
							algoliaAgent: s,
							timeouts: o,
							requester: i,
							requestsCache: c,
							responsesCache: l,
						}) {
							async function u(c, l, u = !0) {
								const d = [],
									h = (function (e, t) {
										if (
											'GET' === e.method ||
											(void 0 === e.data &&
												void 0 === t.data)
										) {
											return;
										}
										const r = Array.isArray(e.data)
											? e.data
											: { ...e.data, ...t.data };
										return JSON.stringify(r);
									})(c, l),
									p = (function (e, t, r) {
										const n = {
												Accept: 'application/json',
												...e,
												...t,
												...r,
											},
											a = {};
										return (
											Object.keys(n).forEach((e) => {
												const t = n[e];
												a[e.toLowerCase()] = t;
											}),
											a
										);
									})(r, c.headers, l.headers),
									f =
										'GET' === c.method
											? { ...c.data, ...l.data }
											: {},
									m = { ...a, ...c.queryParameters, ...f };
								if (
									(s.value &&
										(m['x-algolia-agent'] = s.value),
									l && l.queryParameters)
								) {
									for (const e of Object.keys(
										l.queryParameters
									))
										{l.queryParameters[e] &&
										'[object Object]' !==
											Object.prototype.toString.call(
												l.queryParameters[e]
											)
											? (m[e] =
													l.queryParameters[
														e
													].toString())
											: (m[e] = l.queryParameters[e]);}}
								let y = 0;
								const v = async (e, r) => {
										const a = e.pop();
										if (void 0 === a) {
											throw new ya(
												(function (e) {
													return e.map((e) => ja(e));
												})(d)
											);
										}
										const s = { ...o, ...l.timeouts },
											f = {
												data: h,
												headers: p,
												method: c.method,
												url: ba(a, c.path, m),
												connectTimeout: r(y, s.connect),
												responseTimeout: r(
													y,
													u ? s.read : s.write
												),
											},
											g = (t) => {
												const r = {
													request: f,
													response: t,
													host: a,
													triesLeft: e.length,
												};
												return d.push(r), r;
											},
											w = await i.send(f);
										if (
											(function ({
												isTimedOut: e,
												status: t,
											}) {
												return (
													e ||
													(function ({
														isTimedOut: e,
														status: t,
													}) {
														return !e && !~~t;
													})({
														isTimedOut: e,
														status: t,
													}) ||
													(2 != ~~(t / 100) &&
														4 != ~~(t / 100))
												);
											})(w)
										) {
											const s = g(w);
											return (
												w.isTimedOut && y++,
												n.info(
													'Retryable failure',
													ja(s)
												),
												await t.set(
													a,
													pa(
														a,
														w.isTimedOut
															? 'timed out'
															: 'down'
													)
												),
												v(e, r)
											);
										}
										if (
											(function ({ status: e }) {
												return 2 == ~~(e / 100);
											})(w)
										) {
											return (function (e) {
												try {
													return JSON.parse(
														e.content
													);
												} catch (t) {
													throw new ga(t.message, e);
												}
											})(w);
										}
										throw (
											(g(w),
											(function (
												{ content: e, status: t },
												r
											) {
												try {
													const n = JSON.parse(e);
													return 'error' in n
														? new wa(
																n.message,
																t,
																n.error,
																r
															)
														: new va(
																n.message,
																t,
																r
															);
												} catch {}
												return new va(e, t, r);
											})(w, d))
										);
									},
									g = e.filter(
										(e) =>
											'readWrite' === e.accept ||
											(u
												? 'read' === e.accept
												: 'write' === e.accept)
									),
									w = await (async function (e) {
										const r = await Promise.all(
												e.map((e) =>
													t.get(e, () =>
														Promise.resolve(pa(e))
													)
												)
											),
											n = r.filter((e) => e.isUp()),
											a = r.filter((e) => e.isTimedOut()),
											s = [...n, ...a];
										return {
											hosts: s.length > 0 ? s : e,
											getTimeout: (e, t) =>
												(0 === a.length && 0 === e
													? 1
													: a.length + 3 + e) * t,
										};
									})(g);
								return v([...w.hosts].reverse(), w.getTimeout);
							}
							return {
								hostsCache: t,
								requester: i,
								timeouts: o,
								logger: n,
								algoliaAgent: s,
								baseHeaders: r,
								baseQueryParameters: a,
								hosts: e,
								request(e, t = {}) {
									const n =
										e.useReadTransporter ||
										'GET' === e.method;
									if (!n) {return u(e, t, n);}
									const s = () => u(e, t);
									if (!0 !== (t.cacheable || e.cacheable))
										{return s();}
									const o = {
										request: e,
										requestOptions: t,
										transporter: {
											queryParameters: a,
											headers: r,
										},
									};
									return l.get(
										o,
										() =>
											c.get(o, () =>
												c
													.set(o, s())
													.then(
														(e) =>
															Promise.all([
																c.delete(o),
																e,
															]),
														(e) =>
															Promise.all([
																c.delete(o),
																Promise.reject(
																	e
																),
															])
													)
													.then(([e, t]) => t)
											),
										{ miss: (e) => l.set(o, e) }
									);
								},
								requestsCache: c,
								responsesCache: l,
							};
						})({
							hosts: xa(e),
							...a,
							algoliaAgent: da({
								algoliaAgents: n,
								client: 'Search',
								version: Ea,
							}),
							baseHeaders: {
								'content-type': 'text/plain',
								...s.headers(),
								...a.baseHeaders,
							},
							baseQueryParameters: {
								...s.queryParameters(),
								...a.baseQueryParameters,
							},
						});
					return {
						transporter: o,
						appId: e,
						clearCache: () =>
							Promise.all([
								o.requestsCache.clear(),
								o.responsesCache.clear(),
							]).then(() => {}),
						get _ua() {
							return o.algoliaAgent.value;
						},
						addAlgoliaAgent(e, t) {
							o.algoliaAgent.add({ segment: e, version: t });
						},
						setClientApiKey({ apiKey: e }) {
							r && 'WithinHeaders' !== r
								? (o.baseQueryParameters['x-algolia-api-key'] =
										e)
								: (o.baseHeaders['x-algolia-api-key'] = e);
						},
						waitForTask(
							{
								indexName: e,
								taskID: t,
								maxRetries: r = 50,
								timeout: n = (e) => Math.min(200 * e, 5e3),
							},
							a
						) {
							let s = 0;
							return ua({
								func: () =>
									this.getTask(
										{ indexName: e, taskID: t },
										a
									),
								validate: (e) => 'published' === e.status,
								aggregator: () => (s += 1),
								error: {
									validate: () => s >= r,
									message: () =>
										`The maximum number of retries exceeded. (${s}/${r})`,
								},
								timeout: () => n(s),
							});
						},
						waitForAppTask(
							{
								taskID: e,
								maxRetries: t = 50,
								timeout: r = (e) => Math.min(200 * e, 5e3),
							},
							n
						) {
							let a = 0;
							return ua({
								func: () => this.getAppTask({ taskID: e }, n),
								validate: (e) => 'published' === e.status,
								aggregator: () => (a += 1),
								error: {
									validate: () => a >= t,
									message: () =>
										`The maximum number of retries exceeded. (${a}/${t})`,
								},
								timeout: () => r(a),
							});
						},
						waitForApiKey(
							{
								operation: e,
								key: t,
								apiKey: r,
								maxRetries: n = 50,
								timeout: a = (e) => Math.min(200 * e, 5e3),
							},
							s
						) {
							let o = 0;
							const i = {
								aggregator: () => (o += 1),
								error: {
									validate: () => o >= n,
									message: () =>
										`The maximum number of retries exceeded. (${o}/${n})`,
								},
								timeout: () => a(o),
							};
							if ('update' === e) {
								if (!r) {
									throw new Error(
										'`apiKey` is required when waiting for an `update` operation.'
									);
								}
								return ua({
									...i,
									func: () => this.getApiKey({ key: t }, s),
									validate: (e) => {
										for (const t of Object.keys(r)) {
											const n = r[t],
												a = e[t];
											if (
												Array.isArray(n) &&
												Array.isArray(a)
											) {
												if (
													n.length !== a.length ||
													n.some((e, t) => e !== a[t])
												) {
													return !1;
												}
											} else if (n !== a) {
												return !1;
											}
										}
										return !0;
									},
								});
							}
							return ua({
								...i,
								func: () =>
									this.getApiKey({ key: t }, s).catch((e) => {
										if (404 !== e.status) {
											throw e;
										}
									}),
								validate: (t) =>
									'add' === e ? void 0 !== t : void 0 === t,
							});
						},
						browseObjects(
							{ indexName: e, browseParams: t, ...r },
							n
						) {
							return ua({
								func: (r) =>
									this.browse(
										{
											indexName: e,
											browseParams: {
												cursor: r ? r.cursor : void 0,
												...t,
											},
										},
										n
									),
								validate: (e) => void 0 === e.cursor,
								...r,
							});
						},
						browseRules(
							{ indexName: e, searchRulesParams: t, ...r },
							n
						) {
							const a = { hitsPerPage: 1e3, ...t };
							return ua({
								func: (t) =>
									this.searchRules(
										{
											indexName: e,
											searchRulesParams: {
												...a,
												page: t
													? t.page + 1
													: a.page || 0,
											},
										},
										n
									),
								validate: (e) => e.nbHits < a.hitsPerPage,
								...r,
							});
						},
						browseSynonyms(
							{ indexName: e, searchSynonymsParams: t, ...r },
							n
						) {
							const a = { page: 0, ...t, hitsPerPage: 1e3 };
							return ua({
								func: (t) => {
									const r = this.searchSynonyms(
										{
											indexName: e,
											searchSynonymsParams: {
												...a,
												page: a.page,
											},
										},
										n
									);
									return (a.page += 1), r;
								},
								validate: (e) => e.nbHits < a.hitsPerPage,
								...r,
							});
						},
						async chunkedBatch(
							{
								indexName: e,
								objects: t,
								action: r = 'addObject',
								waitForTasks: n,
								batchSize: a = 1e3,
							},
							s
						) {
							let o = [];
							const i = [],
								c = t.entries();
							for (const [n, l] of c) {
								o.push({ action: r, body: l }),
									(o.length !== a && n !== t.length - 1) ||
										(i.push(
											await this.batch(
												{
													indexName: e,
													batchWriteParams: {
														requests: o,
													},
												},
												s
											)
										),
										(o = []));
							}
							if (n) {
								for (const t of i)
									{await this.waitForTask({
										indexName: e,
										taskID: t.taskID,
									});}}
							return i;
						},
						async saveObjects({ indexName: e, objects: t }, r) {
							return await this.chunkedBatch(
								{
									indexName: e,
									objects: t,
									action: 'addObject',
								},
								r
							);
						},
						async deleteObjects({ indexName: e, objectIDs: t }, r) {
							return await this.chunkedBatch(
								{
									indexName: e,
									objects: t.map((e) => ({ objectID: e })),
									action: 'deleteObject',
								},
								r
							);
						},
						async partialUpdateObjects(
							{ indexName: e, objects: t, createIfNotExists: r },
							n
						) {
							return await this.chunkedBatch(
								{
									indexName: e,
									objects: t,
									action: r
										? 'partialUpdateObject'
										: 'partialUpdateObjectNoCreate',
								},
								n
							);
						},
						async replaceAllObjects(
							{ indexName: e, objects: t, batchSize: r },
							n
						) {
							const a = `${e}_tmp_${Math.floor(1e6 * Math.random()) + 1e5}`;
							let s = await this.operationIndex(
								{
									indexName: e,
									operationIndexParams: {
										operation: 'copy',
										destination: a,
										scope: [
											'settings',
											'rules',
											'synonyms',
										],
									},
								},
								n
							);
							const o = await this.chunkedBatch(
								{
									indexName: a,
									objects: t,
									waitForTasks: !0,
									batchSize: r,
								},
								n
							);
							await this.waitForTask({
								indexName: a,
								taskID: s.taskID,
							}),
								(s = await this.operationIndex(
									{
										indexName: e,
										operationIndexParams: {
											operation: 'copy',
											destination: a,
											scope: [
												'settings',
												'rules',
												'synonyms',
											],
										},
									},
									n
								)),
								await this.waitForTask({
									indexName: a,
									taskID: s.taskID,
								});
							const i = await this.operationIndex(
								{
									indexName: a,
									operationIndexParams: {
										operation: 'move',
										destination: e,
									},
								},
								n
							);
							return (
								await this.waitForTask({
									indexName: a,
									taskID: i.taskID,
								}),
								{
									copyOperationResponse: s,
									batchResponses: o,
									moveOperationResponse: i,
								}
							);
						},
						async indexExists({ indexName: e }) {
							try {
								await this.getSettings({ indexName: e });
							} catch (e) {
								if (e instanceof va && 404 === e.status) {
									return !1;
								}
								throw e;
							}
							return !0;
						},
						searchForHits(e, t) {
							return this.search(e, t);
						},
						searchForFacets(e, t) {
							return this.search(e, t);
						},
						addApiKey(e, t) {
							if (!e) {
								throw new Error(
									'Parameter `apiKey` is required when calling `addApiKey`.'
								);
							}
							if (!e.acl) {
								throw new Error(
									'Parameter `apiKey.acl` is required when calling `addApiKey`.'
								);
							}
							const r = {
								method: 'POST',
								path: '/1/keys',
								queryParameters: {},
								headers: {},
								data: e,
							};
							return o.request(r, t);
						},
						addOrUpdateObject(
							{ indexName: e, objectID: t, body: r },
							n
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `addOrUpdateObject`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `addOrUpdateObject`.'
								);
							}
							if (!r) {
								throw new Error(
									'Parameter `body` is required when calling `addOrUpdateObject`.'
								);
							}
							const a = {
								method: 'PUT',
								path: '/1/indexes/{indexName}/{objectID}'
									.replace(
										'{indexName}',
										encodeURIComponent(e)
									)
									.replace(
										'{objectID}',
										encodeURIComponent(t)
									),
								queryParameters: {},
								headers: {},
								data: r,
							};
							return o.request(a, n);
						},
						appendSource(e, t) {
							if (!e) {
								throw new Error(
									'Parameter `source` is required when calling `appendSource`.'
								);
							}
							if (!e.source) {
								throw new Error(
									'Parameter `source.source` is required when calling `appendSource`.'
								);
							}
							const r = {
								method: 'POST',
								path: '/1/security/sources/append',
								queryParameters: {},
								headers: {},
								data: e,
							};
							return o.request(r, t);
						},
						assignUserId(
							{ xAlgoliaUserID: e, assignUserIdParams: t },
							r
						) {
							if (!e) {
								throw new Error(
									'Parameter `xAlgoliaUserID` is required when calling `assignUserId`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `assignUserIdParams` is required when calling `assignUserId`.'
								);
							}
							if (!t.cluster) {
								throw new Error(
									'Parameter `assignUserIdParams.cluster` is required when calling `assignUserId`.'
								);
							}
							const n = {};
							void 0 !== e &&
								(n['X-Algolia-User-ID'] = e.toString());
							const a = {
								method: 'POST',
								path: '/1/clusters/mapping',
								queryParameters: {},
								headers: n,
								data: t,
							};
							return o.request(a, r);
						},
						batch({ indexName: e, batchWriteParams: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `batch`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `batchWriteParams` is required when calling `batch`.'
								);
							}
							if (!t.requests) {
								throw new Error(
									'Parameter `batchWriteParams.requests` is required when calling `batch`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/indexes/{indexName}/batch'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t,
							};
							return o.request(n, r);
						},
						batchAssignUserIds(
							{ xAlgoliaUserID: e, batchAssignUserIdsParams: t },
							r
						) {
							if (!e) {
								throw new Error(
									'Parameter `xAlgoliaUserID` is required when calling `batchAssignUserIds`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `batchAssignUserIdsParams` is required when calling `batchAssignUserIds`.'
								);
							}
							if (!t.cluster) {
								throw new Error(
									'Parameter `batchAssignUserIdsParams.cluster` is required when calling `batchAssignUserIds`.'
								);
							}
							if (!t.users) {
								throw new Error(
									'Parameter `batchAssignUserIdsParams.users` is required when calling `batchAssignUserIds`.'
								);
							}
							const n = {};
							void 0 !== e &&
								(n['X-Algolia-User-ID'] = e.toString());
							const a = {
								method: 'POST',
								path: '/1/clusters/mapping/batch',
								queryParameters: {},
								headers: n,
								data: t,
							};
							return o.request(a, r);
						},
						batchDictionaryEntries(
							{
								dictionaryName: e,
								batchDictionaryEntriesParams: t,
							},
							r
						) {
							if (!e) {
								throw new Error(
									'Parameter `dictionaryName` is required when calling `batchDictionaryEntries`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `batchDictionaryEntriesParams` is required when calling `batchDictionaryEntries`.'
								);
							}
							if (!t.requests) {
								throw new Error(
									'Parameter `batchDictionaryEntriesParams.requests` is required when calling `batchDictionaryEntries`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/dictionaries/{dictionaryName}/batch'.replace(
									'{dictionaryName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t,
							};
							return o.request(n, r);
						},
						browse({ indexName: e, browseParams: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `browse`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/indexes/{indexName}/browse'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t || {},
								useReadTransporter: !0,
							};
							return o.request(n, r);
						},
						clearObjects({ indexName: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `clearObjects`.'
								);
							}
							const r = {
								method: 'POST',
								path: '/1/indexes/{indexName}/clear'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						clearRules({ indexName: e, forwardToReplicas: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `clearRules`.'
								);
							}
							const n =
									'/1/indexes/{indexName}/rules/clear'.replace(
										'{indexName}',
										encodeURIComponent(e)
									),
								a = {};
							void 0 !== t &&
								(a.forwardToReplicas = t.toString());
							const s = {
								method: 'POST',
								path: n,
								queryParameters: a,
								headers: {},
							};
							return o.request(s, r);
						},
						clearSynonyms(
							{ indexName: e, forwardToReplicas: t },
							r
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `clearSynonyms`.'
								);
							}
							const n =
									'/1/indexes/{indexName}/synonyms/clear'.replace(
										'{indexName}',
										encodeURIComponent(e)
									),
								a = {};
							void 0 !== t &&
								(a.forwardToReplicas = t.toString());
							const s = {
								method: 'POST',
								path: n,
								queryParameters: a,
								headers: {},
							};
							return o.request(s, r);
						},
						customDelete({ path: e, parameters: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `path` is required when calling `customDelete`.'
								);
							}
							const n = {
								method: 'DELETE',
								path: '/{path}'.replace('{path}', e),
								queryParameters: t || {},
								headers: {},
							};
							return o.request(n, r);
						},
						customGet({ path: e, parameters: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `path` is required when calling `customGet`.'
								);
							}
							const n = {
								method: 'GET',
								path: '/{path}'.replace('{path}', e),
								queryParameters: t || {},
								headers: {},
							};
							return o.request(n, r);
						},
						customPost({ path: e, parameters: t, body: r }, n) {
							if (!e) {
								throw new Error(
									'Parameter `path` is required when calling `customPost`.'
								);
							}
							const a = {
								method: 'POST',
								path: '/{path}'.replace('{path}', e),
								queryParameters: t || {},
								headers: {},
								data: r || {},
							};
							return o.request(a, n);
						},
						customPut({ path: e, parameters: t, body: r }, n) {
							if (!e) {
								throw new Error(
									'Parameter `path` is required when calling `customPut`.'
								);
							}
							const a = {
								method: 'PUT',
								path: '/{path}'.replace('{path}', e),
								queryParameters: t || {},
								headers: {},
								data: r || {},
							};
							return o.request(a, n);
						},
						deleteApiKey({ key: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `key` is required when calling `deleteApiKey`.'
								);
							}
							const r = {
								method: 'DELETE',
								path: '/1/keys/{key}'.replace(
									'{key}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						deleteBy({ indexName: e, deleteByParams: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `deleteBy`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `deleteByParams` is required when calling `deleteBy`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/indexes/{indexName}/deleteByQuery'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t,
							};
							return o.request(n, r);
						},
						deleteIndex({ indexName: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `deleteIndex`.'
								);
							}
							const r = {
								method: 'DELETE',
								path: '/1/indexes/{indexName}'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						deleteObject({ indexName: e, objectID: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `deleteObject`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `deleteObject`.'
								);
							}
							const n = {
								method: 'DELETE',
								path: '/1/indexes/{indexName}/{objectID}'
									.replace(
										'{indexName}',
										encodeURIComponent(e)
									)
									.replace(
										'{objectID}',
										encodeURIComponent(t)
									),
								queryParameters: {},
								headers: {},
							};
							return o.request(n, r);
						},
						deleteRule(
							{ indexName: e, objectID: t, forwardToReplicas: r },
							n
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `deleteRule`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `deleteRule`.'
								);
							}
							const a = '/1/indexes/{indexName}/rules/{objectID}'
									.replace(
										'{indexName}',
										encodeURIComponent(e)
									)
									.replace(
										'{objectID}',
										encodeURIComponent(t)
									),
								s = {};
							void 0 !== r &&
								(s.forwardToReplicas = r.toString());
							const i = {
								method: 'DELETE',
								path: a,
								queryParameters: s,
								headers: {},
							};
							return o.request(i, n);
						},
						deleteSource({ source: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `source` is required when calling `deleteSource`.'
								);
							}
							const r = {
								method: 'DELETE',
								path: '/1/security/sources/{source}'.replace(
									'{source}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						deleteSynonym(
							{ indexName: e, objectID: t, forwardToReplicas: r },
							n
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `deleteSynonym`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `deleteSynonym`.'
								);
							}
							const a =
									'/1/indexes/{indexName}/synonyms/{objectID}'
										.replace(
											'{indexName}',
											encodeURIComponent(e)
										)
										.replace(
											'{objectID}',
											encodeURIComponent(t)
										),
								s = {};
							void 0 !== r &&
								(s.forwardToReplicas = r.toString());
							const i = {
								method: 'DELETE',
								path: a,
								queryParameters: s,
								headers: {},
							};
							return o.request(i, n);
						},
						getApiKey({ key: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `key` is required when calling `getApiKey`.'
								);
							}
							const r = {
								method: 'GET',
								path: '/1/keys/{key}'.replace(
									'{key}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						getAppTask({ taskID: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `taskID` is required when calling `getAppTask`.'
								);
							}
							const r = {
								method: 'GET',
								path: '/1/task/{taskID}'.replace(
									'{taskID}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						getDictionaryLanguages: (e) =>
							o.request(
								{
									method: 'GET',
									path: '/1/dictionaries/*/languages',
									queryParameters: {},
									headers: {},
								},
								e
							),
						getDictionarySettings: (e) =>
							o.request(
								{
									method: 'GET',
									path: '/1/dictionaries/*/settings',
									queryParameters: {},
									headers: {},
								},
								e
							),
						getLogs(
							{
								offset: e,
								length: t,
								indexName: r,
								type: n,
							} = {},
							a = void 0
						) {
							const s = {};
							void 0 !== e && (s.offset = e.toString()),
								void 0 !== t && (s.length = t.toString()),
								void 0 !== r && (s.indexName = r.toString()),
								void 0 !== n && (s.type = n.toString());
							const i = {
								method: 'GET',
								path: '/1/logs',
								queryParameters: s,
								headers: {},
							};
							return o.request(i, a);
						},
						getObject(
							{
								indexName: e,
								objectID: t,
								attributesToRetrieve: r,
							},
							n
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `getObject`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `getObject`.'
								);
							}
							const a = '/1/indexes/{indexName}/{objectID}'
									.replace(
										'{indexName}',
										encodeURIComponent(e)
									)
									.replace(
										'{objectID}',
										encodeURIComponent(t)
									),
								s = {};
							void 0 !== r &&
								(s.attributesToRetrieve = r.toString());
							const i = {
								method: 'GET',
								path: a,
								queryParameters: s,
								headers: {},
							};
							return o.request(i, n);
						},
						getObjects(e, t) {
							if (!e) {
								throw new Error(
									'Parameter `getObjectsParams` is required when calling `getObjects`.'
								);
							}
							if (!e.requests) {
								throw new Error(
									'Parameter `getObjectsParams.requests` is required when calling `getObjects`.'
								);
							}
							const r = {
								method: 'POST',
								path: '/1/indexes/*/objects',
								queryParameters: {},
								headers: {},
								data: e,
								useReadTransporter: !0,
								cacheable: !0,
							};
							return o.request(r, t);
						},
						getRule({ indexName: e, objectID: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `getRule`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `getRule`.'
								);
							}
							const n = {
								method: 'GET',
								path: '/1/indexes/{indexName}/rules/{objectID}'
									.replace(
										'{indexName}',
										encodeURIComponent(e)
									)
									.replace(
										'{objectID}',
										encodeURIComponent(t)
									),
								queryParameters: {},
								headers: {},
							};
							return o.request(n, r);
						},
						getSettings({ indexName: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `getSettings`.'
								);
							}
							const r = {
								method: 'GET',
								path: '/1/indexes/{indexName}/settings'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						getSources: (e) =>
							o.request(
								{
									method: 'GET',
									path: '/1/security/sources',
									queryParameters: {},
									headers: {},
								},
								e
							),
						getSynonym({ indexName: e, objectID: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `getSynonym`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `getSynonym`.'
								);
							}
							const n = {
								method: 'GET',
								path: '/1/indexes/{indexName}/synonyms/{objectID}'
									.replace(
										'{indexName}',
										encodeURIComponent(e)
									)
									.replace(
										'{objectID}',
										encodeURIComponent(t)
									),
								queryParameters: {},
								headers: {},
							};
							return o.request(n, r);
						},
						getTask({ indexName: e, taskID: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `getTask`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `taskID` is required when calling `getTask`.'
								);
							}
							const n = {
								method: 'GET',
								path: '/1/indexes/{indexName}/task/{taskID}'
									.replace(
										'{indexName}',
										encodeURIComponent(e)
									)
									.replace('{taskID}', encodeURIComponent(t)),
								queryParameters: {},
								headers: {},
							};
							return o.request(n, r);
						},
						getTopUserIds: (e) =>
							o.request(
								{
									method: 'GET',
									path: '/1/clusters/mapping/top',
									queryParameters: {},
									headers: {},
								},
								e
							),
						getUserId({ userID: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `userID` is required when calling `getUserId`.'
								);
							}
							const r = {
								method: 'GET',
								path: '/1/clusters/mapping/{userID}'.replace(
									'{userID}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						hasPendingMappings(
							{ getClusters: e } = {},
							t = void 0
						) {
							const r = {};
							void 0 !== e && (r.getClusters = e.toString());
							const n = {
								method: 'GET',
								path: '/1/clusters/mapping/pending',
								queryParameters: r,
								headers: {},
							};
							return o.request(n, t);
						},
						listApiKeys: (e) =>
							o.request(
								{
									method: 'GET',
									path: '/1/keys',
									queryParameters: {},
									headers: {},
								},
								e
							),
						listClusters: (e) =>
							o.request(
								{
									method: 'GET',
									path: '/1/clusters',
									queryParameters: {},
									headers: {},
								},
								e
							),
						listIndices(
							{ page: e, hitsPerPage: t } = {},
							r = void 0
						) {
							const n = {};
							void 0 !== e && (n.page = e.toString()),
								void 0 !== t && (n.hitsPerPage = t.toString());
							const a = {
								method: 'GET',
								path: '/1/indexes',
								queryParameters: n,
								headers: {},
							};
							return o.request(a, r);
						},
						listUserIds(
							{ page: e, hitsPerPage: t } = {},
							r = void 0
						) {
							const n = {};
							void 0 !== e && (n.page = e.toString()),
								void 0 !== t && (n.hitsPerPage = t.toString());
							const a = {
								method: 'GET',
								path: '/1/clusters/mapping',
								queryParameters: n,
								headers: {},
							};
							return o.request(a, r);
						},
						multipleBatch(e, t) {
							if (!e) {
								throw new Error(
									'Parameter `batchParams` is required when calling `multipleBatch`.'
								);
							}
							if (!e.requests) {
								throw new Error(
									'Parameter `batchParams.requests` is required when calling `multipleBatch`.'
								);
							}
							const r = {
								method: 'POST',
								path: '/1/indexes/*/batch',
								queryParameters: {},
								headers: {},
								data: e,
							};
							return o.request(r, t);
						},
						operationIndex(
							{ indexName: e, operationIndexParams: t },
							r
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `operationIndex`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `operationIndexParams` is required when calling `operationIndex`.'
								);
							}
							if (!t.operation) {
								throw new Error(
									'Parameter `operationIndexParams.operation` is required when calling `operationIndex`.'
								);
							}
							if (!t.destination) {
								throw new Error(
									'Parameter `operationIndexParams.destination` is required when calling `operationIndex`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/indexes/{indexName}/operation'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t,
							};
							return o.request(n, r);
						},
						partialUpdateObject(
							{
								indexName: e,
								objectID: t,
								attributesToUpdate: r,
								createIfNotExists: n,
							},
							a
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `partialUpdateObject`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `partialUpdateObject`.'
								);
							}
							if (!r) {
								throw new Error(
									'Parameter `attributesToUpdate` is required when calling `partialUpdateObject`.'
								);
							}
							const s =
									'/1/indexes/{indexName}/{objectID}/partial'
										.replace(
											'{indexName}',
											encodeURIComponent(e)
										)
										.replace(
											'{objectID}',
											encodeURIComponent(t)
										),
								i = {};
							void 0 !== n &&
								(i.createIfNotExists = n.toString());
							const c = {
								method: 'POST',
								path: s,
								queryParameters: i,
								headers: {},
								data: r,
							};
							return o.request(c, a);
						},
						removeUserId({ userID: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `userID` is required when calling `removeUserId`.'
								);
							}
							const r = {
								method: 'DELETE',
								path: '/1/clusters/mapping/{userID}'.replace(
									'{userID}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						replaceSources({ source: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `source` is required when calling `replaceSources`.'
								);
							}
							const r = {
								method: 'PUT',
								path: '/1/security/sources',
								queryParameters: {},
								headers: {},
								data: e,
							};
							return o.request(r, t);
						},
						restoreApiKey({ key: e }, t) {
							if (!e) {
								throw new Error(
									'Parameter `key` is required when calling `restoreApiKey`.'
								);
							}
							const r = {
								method: 'POST',
								path: '/1/keys/{key}/restore'.replace(
									'{key}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
							};
							return o.request(r, t);
						},
						saveObject({ indexName: e, body: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `saveObject`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `body` is required when calling `saveObject`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/indexes/{indexName}'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t,
							};
							return o.request(n, r);
						},
						saveRule(
							{
								indexName: e,
								objectID: t,
								rule: r,
								forwardToReplicas: n,
							},
							a
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `saveRule`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `saveRule`.'
								);
							}
							if (!r) {
								throw new Error(
									'Parameter `rule` is required when calling `saveRule`.'
								);
							}
							if (!r.objectID) {
								throw new Error(
									'Parameter `rule.objectID` is required when calling `saveRule`.'
								);
							}
							const s = '/1/indexes/{indexName}/rules/{objectID}'
									.replace(
										'{indexName}',
										encodeURIComponent(e)
									)
									.replace(
										'{objectID}',
										encodeURIComponent(t)
									),
								i = {};
							void 0 !== n &&
								(i.forwardToReplicas = n.toString());
							const c = {
								method: 'PUT',
								path: s,
								queryParameters: i,
								headers: {},
								data: r,
							};
							return o.request(c, a);
						},
						saveRules(
							{
								indexName: e,
								rules: t,
								forwardToReplicas: r,
								clearExistingRules: n,
							},
							a
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `saveRules`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `rules` is required when calling `saveRules`.'
								);
							}
							const s =
									'/1/indexes/{indexName}/rules/batch'.replace(
										'{indexName}',
										encodeURIComponent(e)
									),
								i = {};
							void 0 !== r &&
								(i.forwardToReplicas = r.toString()),
								void 0 !== n &&
									(i.clearExistingRules = n.toString());
							const c = {
								method: 'POST',
								path: s,
								queryParameters: i,
								headers: {},
								data: t,
							};
							return o.request(c, a);
						},
						saveSynonym(
							{
								indexName: e,
								objectID: t,
								synonymHit: r,
								forwardToReplicas: n,
							},
							a
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `saveSynonym`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `objectID` is required when calling `saveSynonym`.'
								);
							}
							if (!r) {
								throw new Error(
									'Parameter `synonymHit` is required when calling `saveSynonym`.'
								);
							}
							if (!r.objectID) {
								throw new Error(
									'Parameter `synonymHit.objectID` is required when calling `saveSynonym`.'
								);
							}
							if (!r.type) {
								throw new Error(
									'Parameter `synonymHit.type` is required when calling `saveSynonym`.'
								);
							}
							const s =
									'/1/indexes/{indexName}/synonyms/{objectID}'
										.replace(
											'{indexName}',
											encodeURIComponent(e)
										)
										.replace(
											'{objectID}',
											encodeURIComponent(t)
										),
								i = {};
							void 0 !== n &&
								(i.forwardToReplicas = n.toString());
							const c = {
								method: 'PUT',
								path: s,
								queryParameters: i,
								headers: {},
								data: r,
							};
							return o.request(c, a);
						},
						saveSynonyms(
							{
								indexName: e,
								synonymHit: t,
								forwardToReplicas: r,
								replaceExistingSynonyms: n,
							},
							a
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `saveSynonyms`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `synonymHit` is required when calling `saveSynonyms`.'
								);
							}
							const s =
									'/1/indexes/{indexName}/synonyms/batch'.replace(
										'{indexName}',
										encodeURIComponent(e)
									),
								i = {};
							void 0 !== r &&
								(i.forwardToReplicas = r.toString()),
								void 0 !== n &&
									(i.replaceExistingSynonyms = n.toString());
							const c = {
								method: 'POST',
								path: s,
								queryParameters: i,
								headers: {},
								data: t,
							};
							return o.request(c, a);
						},
						search(e, t) {
							if (e && Array.isArray(e)) {
								const t = {
									requests: e.map(({ params: e, ...t }) =>
										'facet' === t.type
											? { ...t, ...e, type: 'facet' }
											: {
													...t,
													...e,
													facet: void 0,
													maxFacetHits: void 0,
													facetQuery: void 0,
												}
									),
								};
								e = t;
							}
							if (!e) {
								throw new Error(
									'Parameter `searchMethodParams` is required when calling `search`.'
								);
							}
							if (!e.requests) {
								throw new Error(
									'Parameter `searchMethodParams.requests` is required when calling `search`.'
								);
							}
							const r = {
								method: 'POST',
								path: '/1/indexes/*/queries',
								queryParameters: {},
								headers: {},
								data: e,
								useReadTransporter: !0,
								cacheable: !0,
							};
							return o.request(r, t);
						},
						searchDictionaryEntries(
							{
								dictionaryName: e,
								searchDictionaryEntriesParams: t,
							},
							r
						) {
							if (!e) {
								throw new Error(
									'Parameter `dictionaryName` is required when calling `searchDictionaryEntries`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `searchDictionaryEntriesParams` is required when calling `searchDictionaryEntries`.'
								);
							}
							if (!t.query) {
								throw new Error(
									'Parameter `searchDictionaryEntriesParams.query` is required when calling `searchDictionaryEntries`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/dictionaries/{dictionaryName}/search'.replace(
									'{dictionaryName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t,
								useReadTransporter: !0,
								cacheable: !0,
							};
							return o.request(n, r);
						},
						searchForFacetValues(
							{
								indexName: e,
								facetName: t,
								searchForFacetValuesRequest: r,
							},
							n
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `searchForFacetValues`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `facetName` is required when calling `searchForFacetValues`.'
								);
							}
							const a = {
								method: 'POST',
								path: '/1/indexes/{indexName}/facets/{facetName}/query'
									.replace(
										'{indexName}',
										encodeURIComponent(e)
									)
									.replace(
										'{facetName}',
										encodeURIComponent(t)
									),
								queryParameters: {},
								headers: {},
								data: r || {},
								useReadTransporter: !0,
								cacheable: !0,
							};
							return o.request(a, n);
						},
						searchRules({ indexName: e, searchRulesParams: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `searchRules`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/indexes/{indexName}/rules/search'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t || {},
								useReadTransporter: !0,
								cacheable: !0,
							};
							return o.request(n, r);
						},
						searchSingleIndex(
							{ indexName: e, searchParams: t },
							r
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `searchSingleIndex`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/indexes/{indexName}/query'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t || {},
								useReadTransporter: !0,
								cacheable: !0,
							};
							return o.request(n, r);
						},
						searchSynonyms(
							{ indexName: e, searchSynonymsParams: t },
							r
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `searchSynonyms`.'
								);
							}
							const n = {
								method: 'POST',
								path: '/1/indexes/{indexName}/synonyms/search'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t || {},
								useReadTransporter: !0,
								cacheable: !0,
							};
							return o.request(n, r);
						},
						searchUserIds(e, t) {
							if (!e) {
								throw new Error(
									'Parameter `searchUserIdsParams` is required when calling `searchUserIds`.'
								);
							}
							if (!e.query) {
								throw new Error(
									'Parameter `searchUserIdsParams.query` is required when calling `searchUserIds`.'
								);
							}
							const r = {
								method: 'POST',
								path: '/1/clusters/mapping/search',
								queryParameters: {},
								headers: {},
								data: e,
								useReadTransporter: !0,
								cacheable: !0,
							};
							return o.request(r, t);
						},
						setDictionarySettings(e, t) {
							if (!e) {
								throw new Error(
									'Parameter `dictionarySettingsParams` is required when calling `setDictionarySettings`.'
								);
							}
							if (!e.disableStandardEntries) {
								throw new Error(
									'Parameter `dictionarySettingsParams.disableStandardEntries` is required when calling `setDictionarySettings`.'
								);
							}
							const r = {
								method: 'PUT',
								path: '/1/dictionaries/*/settings',
								queryParameters: {},
								headers: {},
								data: e,
							};
							return o.request(r, t);
						},
						setSettings(
							{
								indexName: e,
								indexSettings: t,
								forwardToReplicas: r,
							},
							n
						) {
							if (!e) {
								throw new Error(
									'Parameter `indexName` is required when calling `setSettings`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `indexSettings` is required when calling `setSettings`.'
								);
							}
							const a = '/1/indexes/{indexName}/settings'.replace(
									'{indexName}',
									encodeURIComponent(e)
								),
								s = {};
							void 0 !== r &&
								(s.forwardToReplicas = r.toString());
							const i = {
								method: 'PUT',
								path: a,
								queryParameters: s,
								headers: {},
								data: t,
							};
							return o.request(i, n);
						},
						updateApiKey({ key: e, apiKey: t }, r) {
							if (!e) {
								throw new Error(
									'Parameter `key` is required when calling `updateApiKey`.'
								);
							}
							if (!t) {
								throw new Error(
									'Parameter `apiKey` is required when calling `updateApiKey`.'
								);
							}
							if (!t.acl) {
								throw new Error(
									'Parameter `apiKey.acl` is required when calling `updateApiKey`.'
								);
							}
							const n = {
								method: 'PUT',
								path: '/1/keys/{key}'.replace(
									'{key}',
									encodeURIComponent(e)
								),
								queryParameters: {},
								headers: {},
								data: t,
							};
							return o.request(n, r);
						},
					};
				})({
					appId: e,
					apiKey: t,
					timeouts: { connect: 1e3, read: 2e3, write: 3e4 },
					logger: {
						debug: (e, t) => Promise.resolve(),
						info: (e, t) => Promise.resolve(),
						error: (e, t) => Promise.resolve(),
					},
					requester: {
						send(e) {
							return new Promise((t) => {
								const r = new XMLHttpRequest();
								r.open(e.method, e.url, !0),
									Object.keys(e.headers).forEach((t) =>
										r.setRequestHeader(t, e.headers[t])
									);
								let n,
									a = (e, n) =>
										setTimeout(() => {
											r.abort(),
												t({
													status: 0,
													content: n,
													isTimedOut: !0,
												});
										}, e),
									s = a(
										e.connectTimeout,
										'Connection timeout'
									);
								(r.onreadystatechange = () => {
									r.readyState > r.OPENED &&
										void 0 === n &&
										(clearTimeout(s),
										(n = a(
											e.responseTimeout,
											'Socket timeout'
										)));
								}),
									(r.onerror = () => {
										0 === r.status &&
											(clearTimeout(s),
											clearTimeout(n),
											t({
												content:
													r.responseText ||
													'Network request failed',
												status: r.status,
												isTimedOut: !1,
											}));
									}),
									(r.onload = () => {
										clearTimeout(s),
											clearTimeout(n),
											t({
												content: r.responseText,
												status: r.status,
												isTimedOut: !1,
											});
									}),
									r.send(e.data);
							});
						},
					},
					algoliaAgents: [{ segment: 'Browser' }],
					authMode: 'WithinQueryParameters',
					responsesCache: la(),
					requestsCache: la({ serializable: !1 }),
					hostsCache: ca({
						caches: [ia({ key: `${Ea}-${e}` }), la()],
					}),
					...r,
				});
			}
			const Sa = window.searchBuddy?.algolia?.application_id || '',
				Ra = window.searchBuddy?.algolia?.search_api_key || '';
			function Ca(e) {
				const t = e.match(/[+][^\s]+/g) || [];
				return {
					cleanQuery: e.replace(/[+][^\s]+/g, '').trim(),
					facetFilters: t,
				};
			}
			const qa = {
					client: () => Pa(Sa, Ra),
					id: 'algolia',
					async search(e, t) {
						const { cleanQuery: r, facetFilters: n } = Ca(e),
							a = {
								indexName: t,
								searchParams: {
									query: r,
									hitsPerPage: 5,
									...(n.length > 0 && { facetFilters: n }),
								},
							},
							s = this.client();
						return (await s.searchSingleIndex(a)).hits.map((e) => ({
							id: parseInt(e.objectID, 10),
							...e,
						}));
					},
					async searchAll(e, t) {
						const { cleanQuery: r, facetFilters: n } = Ca(e),
							a = this.client();
						return (
							await a.search({
								requests: [
									{
										indexName: 'products',
										query: r,
										params:
											n.length > 0 ? n.join(',') : void 0,
									},
									{
										indexName: 'orders',
										query: r,
										params:
											n.length > 0 ? n.join(',') : void 0,
									},
									{
										indexName: 'customers',
										query: r,
										params:
											n.length > 0 ? n.join(',') : void 0,
									},
								],
							})
						).results.reduce(
							(e, t, r) => (
								(e[['products', 'orders', 'customers'][r]] =
									t.hits.map((e) => ({
										id: parseInt(e.objectID, 10),
										...e,
									}))),
								e
							),
							{}
						);
					},
				},
				ka = qa;
			const Oa =
				'algolia' === window.searchBuddy?.main?.provider ? ka : oa.A;
			const Da = class {
					constructor() {
						(this.listeners = new Set()),
							(this.subscribe = this.subscribe.bind(this));
					}
					subscribe(e) {
						return (
							this.listeners.add(e),
							this.onSubscribe(),
							() => {
								this.listeners.delete(e), this.onUnsubscribe();
							}
						);
					}
					hasListeners() {
						return this.listeners.size > 0;
					}
					onSubscribe() {}
					onUnsubscribe() {}
				},
				Ia = 'undefined' === typeof window || 'Deno' in globalThis;
			function Ta() {}
			function Na(e) {
				return 'number' === typeof e && e >= 0 && e !== 1 / 0;
			}
			function Aa(e, t) {
				return Math.max(e + (t || 0) - Date.now(), 0);
			}
			function Ma(e, t) {
				return 'function' === typeof e ? e(t) : e;
			}
			function Ua(e, t) {
				return 'function' === typeof e ? e(t) : e;
			}
			function La(e, t) {
				const {
					type: r = 'all',
					exact: n,
					fetchStatus: a,
					predicate: s,
					queryKey: o,
					stale: i,
				} = e;
				if (o) {
					if (n) {
						if (t.queryHash !== _a(o, t.options)) {return !1;}
					} else if (!Ba(t.queryKey, o)) {return !1;}}
				if ('all' !== r) {
					const e = t.isActive();
					if ('active' === r && !e) {
						return !1;
					}
					if ('inactive' === r && e) {
						return !1;
					}
				}
				return !(
					('boolean' === typeof i && t.isStale() !== i) ||
					(a && a !== t.state.fetchStatus) ||
					(s && !s(t))
				);
			}
			function Fa(e, t) {
				const { exact: r, status: n, predicate: a, mutationKey: s } = e;
				if (s) {
					if (!t.options.mutationKey) {
						return !1;
					}
					if (r) {
						if (Qa(t.options.mutationKey) !== Qa(s)) {
							return !1;
						}
					} else if (!Ba(t.options.mutationKey, s)) {
						return !1;
					}
				}
				return !((n && t.state.status !== n) || (a && !a(t)));
			}
			function _a(e, t) {
				return (t?.queryKeyHashFn || Qa)(e);
			}
			function Qa(e) {
				return JSON.stringify(e, (e, t) =>
					Ha(t)
						? Object.keys(t)
								.sort()
								.reduce((e, r) => ((e[r] = t[r]), e), {})
						: t
				);
			}
			function Ba(e, t) {
				return (
					e === t ||
					(typeof e === typeof t &&
						!(
							!e ||
							!t ||
							'object' !== typeof e ||
							'object' !== typeof t
						) &&
						!Object.keys(t).some((r) => !Ba(e[r], t[r])))
				);
			}
			function Ka(e, t) {
				if (e === t) {
					return e;
				}
				const r = za(e) && za(t);
				if (r || (Ha(e) && Ha(t))) {
					const n = r ? e : Object.keys(e),
						a = n.length,
						s = r ? t : Object.keys(t),
						o = s.length,
						i = r ? [] : {};
					let c = 0;
					for (let a = 0; a < o; a++) {
						const o = r ? a : s[a];
						((!r && n.includes(o)) || r) &&
						void 0 === e[o] &&
						void 0 === t[o]
							? ((i[o] = void 0), c++)
							: ((i[o] = Ka(e[o], t[o])),
								i[o] === e[o] && void 0 !== e[o] && c++);
					}
					return a === o && c === a ? e : i;
				}
				return t;
			}
			function $a(e, t) {
				if (!t || Object.keys(e).length !== Object.keys(t).length) {
					return !1;
				}
				for (const r in e) {
					if (e[r] !== t[r]) return !1;
				}
				return !0;
			}
			function za(e) {
				return Array.isArray(e) && e.length === Object.keys(e).length;
			}
			function Ha(e) {
				if (!Wa(e)) {
					return !1;
				}
				const t = e.constructor;
				if (void 0 === t) {
					return !0;
				}
				const r = t.prototype;
				return (
					!!Wa(r) &&
					!!r.hasOwnProperty('isPrototypeOf') &&
					Object.getPrototypeOf(e) === Object.prototype
				);
			}
			function Wa(e) {
				return '[object Object]' === Object.prototype.toString.call(e);
			}
			function Ga(e, t, r) {
				return 'function' === typeof r.structuralSharing
					? r.structuralSharing(e, t)
					: !1 !== r.structuralSharing
						? Ka(e, t)
						: t;
			}
			function Va(e, t, r = 0) {
				const n = [...e, t];
				return r && n.length > r ? n.slice(1) : n;
			}
			function Ja(e, t, r = 0) {
				const n = [t, ...e];
				return r && n.length > r ? n.slice(0, -1) : n;
			}
			const Xa = Symbol();
			function Ya(e, t) {
				return !e.queryFn && t?.initialPromise
					? () => t.initialPromise
					: e.queryFn && e.queryFn !== Xa
						? e.queryFn
						: () =>
								Promise.reject(
									new Error(
										`Missing queryFn: '${e.queryHash}'`
									)
								);
			}
			const Za = new (class extends Da {
					#e;
					#t;
					#r;
					constructor() {
						super(),
							(this.#r = (e) => {
								if (!Ia && window.addEventListener) {
									const t = () => e();
									return (
										window.addEventListener(
											'visibilitychange',
											t,
											!1
										),
										() => {
											window.removeEventListener(
												'visibilitychange',
												t
											);
										}
									);
								}
							});
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#r);
					}
					onUnsubscribe() {
						this.hasListeners() ||
							(this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#r = e),
							this.#t?.(),
							(this.#t = e((e) => {
								'boolean' === typeof e
									? this.setFocused(e)
									: this.onFocus();
							}));
					}
					setFocused(e) {
						this.#e !== e && ((this.#e = e), this.onFocus());
					}
					onFocus() {
						const e = this.isFocused();
						this.listeners.forEach((t) => {
							t(e);
						});
					}
					isFocused() {
						return 'boolean' === typeof this.#e
							? this.#e
							: 'hidden' !== globalThis.document?.visibilityState;
					}
				})(),
				es = (function () {
					let e = [],
						t = 0,
						r = (e) => {
							e();
						},
						n = (e) => {
							e();
						},
						a = (e) => setTimeout(e, 0);
					const s = (n) => {
						t
							? e.push(n)
							: a(() => {
									r(n);
								});
					};
					return {
						batch: (s) => {
							let o;
							t++;
							try {
								o = s();
							} finally {
								t--,
									t ||
										(() => {
											const t = e;
											(e = []),
												t.length &&
													a(() => {
														n(() => {
															t.forEach((e) => {
																r(e);
															});
														});
													});
										})();
							}
							return o;
						},
						batchCalls:
							(e) =>
							(...t) => {
								s(() => {
									e(...t);
								});
							},
						schedule: s,
						setNotifyFunction: (e) => {
							r = e;
						},
						setBatchNotifyFunction: (e) => {
							n = e;
						},
						setScheduler: (e) => {
							a = e;
						},
					};
				})(),
				ts = new (class extends Da {
					#n = !0;
					#t;
					#r;
					constructor() {
						super(),
							(this.#r = (e) => {
								if (!Ia && window.addEventListener) {
									const t = () => e(!0),
										r = () => e(!1);
									return (
										window.addEventListener(
											'online',
											t,
											!1
										),
										window.addEventListener(
											'offline',
											r,
											!1
										),
										() => {
											window.removeEventListener(
												'online',
												t
											),
												window.removeEventListener(
													'offline',
													r
												);
										}
									);
								}
							});
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#r);
					}
					onUnsubscribe() {
						this.hasListeners() ||
							(this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#r = e),
							this.#t?.(),
							(this.#t = e(this.setOnline.bind(this)));
					}
					setOnline(e) {
						this.#n !== e &&
							((this.#n = e),
							this.listeners.forEach((t) => {
								t(e);
							}));
					}
					isOnline() {
						return this.#n;
					}
				})();
			function rs() {
				let e, t;
				const r = new Promise((r, n) => {
					(e = r), (t = n);
				});
				function n(e) {
					Object.assign(r, e), delete r.resolve, delete r.reject;
				}
				return (
					(r.status = 'pending'),
					r.catch(() => {}),
					(r.resolve = (t) => {
						n({ status: 'fulfilled', value: t }), e(t);
					}),
					(r.reject = (e) => {
						n({ status: 'rejected', reason: e }), t(e);
					}),
					r
				);
			}
			function ns(e) {
				return Math.min(1e3 * 2 ** e, 3e4);
			}
			function as(e) {
				return 'online' !== (e ?? 'online') || ts.isOnline();
			}
			const ss = class extends Error {
				constructor(e) {
					super('CancelledError'),
						(this.revert = e?.revert),
						(this.silent = e?.silent);
				}
			};
			function os(e) {
				return e instanceof ss;
			}
			function is(e) {
				let t,
					r = !1,
					n = 0,
					a = !1;
				const s = rs(),
					o = () =>
						Za.isFocused() &&
						('always' === e.networkMode || ts.isOnline()) &&
						e.canRun(),
					i = () => as(e.networkMode) && e.canRun(),
					c = (r) => {
						a || ((a = !0), e.onSuccess?.(r), t?.(), s.resolve(r));
					},
					l = (r) => {
						a || ((a = !0), e.onError?.(r), t?.(), s.reject(r));
					},
					u = () =>
						new Promise((r) => {
							(t = (e) => {
								(a || o()) && r(e);
							}),
								e.onPause?.();
						}).then(() => {
							(t = void 0), a || e.onContinue?.();
						}),
					d = () => {
						if (a) {
							return;
						}
						let t;
						const s = 0 === n ? e.initialPromise : void 0;
						try {
							t = s ?? e.fn();
						} catch (e) {
							t = Promise.reject(e);
						}
						Promise.resolve(t)
							.then(c)
							.catch((t) => {
								if (a) {
									return;
								}
								const s = e.retry ?? (Ia ? 0 : 3),
									i = e.retryDelay ?? ns,
									c = 'function' === typeof i ? i(n, t) : i,
									h =
										!0 === s ||
										('number' === typeof s && n < s) ||
										('function' === typeof s && s(n, t));
								let p;
								!r && h
									? (n++,
										e.onFail?.(n, t),
										((p = c),
										new Promise((e) => {
											setTimeout(e, p);
										}))
											.then(() => (o() ? void 0 : u()))
											.then(() => {
												r ? l(t) : d();
											}))
									: l(t);
							});
					};
				return {
					promise: s,
					cancel: (t) => {
						a || (l(new ss(t)), e.abort?.());
					},
					continue: () => (t?.(), s),
					cancelRetry: () => {
						r = !0;
					},
					continueRetry: () => {
						r = !1;
					},
					canStart: i,
					start: () => (i() ? d() : u().then(d), s),
				};
			}
			const cs = class {
					#a;
					destroy() {
						this.clearGcTimeout();
					}
					scheduleGc() {
						this.clearGcTimeout(),
							Na(this.gcTime) &&
								(this.#a = setTimeout(() => {
									this.optionalRemove();
								}, this.gcTime));
					}
					updateGcTime(e) {
						this.gcTime = Math.max(
							this.gcTime || 0,
							e ?? (Ia ? 1 / 0 : 3e5)
						);
					}
					clearGcTimeout() {
						this.#a && (clearTimeout(this.#a), (this.#a = void 0));
					}
				},
				ls = class extends cs {
					#s;
					#o;
					#i;
					#c;
					#l;
					#u;
					constructor(e) {
						super(),
							(this.#u = !1),
							(this.#l = e.defaultOptions),
							this.setOptions(e.options),
							(this.observers = []),
							(this.#i = e.cache),
							(this.queryKey = e.queryKey),
							(this.queryHash = e.queryHash),
							(this.#s = (function (e) {
								const t =
										'function' === typeof e.initialData
											? e.initialData()
											: e.initialData,
									r = void 0 !== t,
									n = r
										? 'function' ===
											typeof e.initialDataUpdatedAt
											? e.initialDataUpdatedAt()
											: e.initialDataUpdatedAt
										: 0;
								return {
									data: t,
									dataUpdateCount: 0,
									dataUpdatedAt: r ? (n ?? Date.now()) : 0,
									error: null,
									errorUpdateCount: 0,
									errorUpdatedAt: 0,
									fetchFailureCount: 0,
									fetchFailureReason: null,
									fetchMeta: null,
									isInvalidated: !1,
									status: r ? 'success' : 'pending',
									fetchStatus: 'idle',
								};
							})(this.options)),
							(this.state = e.state ?? this.#s),
							this.scheduleGc();
					}
					get meta() {
						return this.options.meta;
					}
					get promise() {
						return this.#c?.promise;
					}
					setOptions(e) {
						(this.options = { ...this.#l, ...e }),
							this.updateGcTime(this.options.gcTime);
					}
					optionalRemove() {
						this.observers.length ||
							'idle' !== this.state.fetchStatus ||
							this.#i.remove(this);
					}
					setData(e, t) {
						const r = Ga(this.state.data, e, this.options);
						return (
							this.#d({
								data: r,
								type: 'success',
								dataUpdatedAt: t?.updatedAt,
								manual: t?.manual,
							}),
							r
						);
					}
					setState(e, t) {
						this.#d({
							type: 'setState',
							state: e,
							setStateOptions: t,
						});
					}
					cancel(e) {
						const t = this.#c?.promise;
						return (
							this.#c?.cancel(e),
							t ? t.then(Ta).catch(Ta) : Promise.resolve()
						);
					}
					destroy() {
						super.destroy(), this.cancel({ silent: !0 });
					}
					reset() {
						this.destroy(), this.setState(this.#s);
					}
					isActive() {
						return this.observers.some(
							(e) => !1 !== Ua(e.options.enabled, this)
						);
					}
					isDisabled() {
						return this.getObserversCount() > 0
							? !this.isActive()
							: this.options.queryFn === Xa ||
									this.state.dataUpdateCount +
										this.state.errorUpdateCount ===
										0;
					}
					isStale() {
						return (
							!!this.state.isInvalidated ||
							(this.getObserversCount() > 0
								? this.observers.some(
										(e) => e.getCurrentResult().isStale
									)
								: void 0 === this.state.data)
						);
					}
					isStaleByTime(e = 0) {
						return (
							this.state.isInvalidated ||
							void 0 === this.state.data ||
							!Aa(this.state.dataUpdatedAt, e)
						);
					}
					onFocus() {
						const e = this.observers.find((e) =>
							e.shouldFetchOnWindowFocus()
						);
						e?.refetch({ cancelRefetch: !1 }), this.#c?.continue();
					}
					onOnline() {
						const e = this.observers.find((e) =>
							e.shouldFetchOnReconnect()
						);
						e?.refetch({ cancelRefetch: !1 }), this.#c?.continue();
					}
					addObserver(e) {
						this.observers.includes(e) ||
							(this.observers.push(e),
							this.clearGcTimeout(),
							this.#i.notify({
								type: 'observerAdded',
								query: this,
								observer: e,
							}));
					}
					removeObserver(e) {
						this.observers.includes(e) &&
							((this.observers = this.observers.filter(
								(t) => t !== e
							)),
							this.observers.length ||
								(this.#c &&
									(this.#u
										? this.#c.cancel({ revert: !0 })
										: this.#c.cancelRetry()),
								this.scheduleGc()),
							this.#i.notify({
								type: 'observerRemoved',
								query: this,
								observer: e,
							}));
					}
					getObserversCount() {
						return this.observers.length;
					}
					invalidate() {
						this.state.isInvalidated ||
							this.#d({ type: 'invalidate' });
					}
					fetch(e, t) {
						if ('idle' !== this.state.fetchStatus)
							{if (void 0 !== this.state.data && t?.cancelRefetch)
								this.cancel({ silent: !0 });
							else if (this.#c)
								return this.#c.continueRetry(), this.#c.promise;}
						if ((e && this.setOptions(e), !this.options.queryFn)) {
							const e = this.observers.find(
								(e) => e.options.queryFn
							);
							e && this.setOptions(e.options);
						}
						const r = new AbortController(),
							n = (e) => {
								Object.defineProperty(e, 'signal', {
									enumerable: !0,
									get: () => ((this.#u = !0), r.signal),
								});
							},
							a = {
								fetchOptions: t,
								options: this.options,
								queryKey: this.queryKey,
								state: this.state,
								fetchFn: () => {
									const e = Ya(this.options, t),
										r = {
											queryKey: this.queryKey,
											meta: this.meta,
										};
									return (
										n(r),
										(this.#u = !1),
										this.options.persister
											? this.options.persister(e, r, this)
											: e(r)
									);
								},
							};
						n(a),
							this.options.behavior?.onFetch(a, this),
							(this.#o = this.state),
							('idle' !== this.state.fetchStatus &&
								this.state.fetchMeta ===
									a.fetchOptions?.meta) ||
								this.#d({
									type: 'fetch',
									meta: a.fetchOptions?.meta,
								});
						const s = (e) => {
							(os(e) && e.silent) ||
								this.#d({ type: 'error', error: e }),
								os(e) ||
									(this.#i.config.onError?.(e, this),
									this.#i.config.onSettled?.(
										this.state.data,
										e,
										this
									)),
								this.scheduleGc();
						};
						return (
							(this.#c = is({
								initialPromise: t?.initialPromise,
								fn: a.fetchFn,
								abort: r.abort.bind(r),
								onSuccess: (e) => {
									if (void 0 !== e) {
										try {
											this.setData(e);
										} catch (e) {
											return void s(e);
										}
										this.#i.config.onSuccess?.(e, this),
											this.#i.config.onSettled?.(
												e,
												this.state.error,
												this
											),
											this.scheduleGc();
									} else
										{s(
											new Error(
												`${this.queryHash} data is undefined`
											)
										);}
								},
								onError: s,
								onFail: (e, t) => {
									this.#d({
										type: 'failed',
										failureCount: e,
										error: t,
									});
								},
								onPause: () => {
									this.#d({ type: 'pause' });
								},
								onContinue: () => {
									this.#d({ type: 'continue' });
								},
								retry: a.options.retry,
								retryDelay: a.options.retryDelay,
								networkMode: a.options.networkMode,
								canRun: () => !0,
							})),
							this.#c.start()
						);
					}
					#d(e) {
						(this.state = ((t) => {
							switch (e.type) {
								case 'failed':
									return {
										...t,
										fetchFailureCount: e.failureCount,
										fetchFailureReason: e.error,
									};
								case 'pause':
									return { ...t, fetchStatus: 'paused' };
								case 'continue':
									return { ...t, fetchStatus: 'fetching' };
								case 'fetch':
									return {
										...t,
										...us(t.data, this.options),
										fetchMeta: e.meta ?? null,
									};
								case 'success':
									return {
										...t,
										data: e.data,
										dataUpdateCount: t.dataUpdateCount + 1,
										dataUpdatedAt:
											e.dataUpdatedAt ?? Date.now(),
										error: null,
										isInvalidated: !1,
										status: 'success',
										...(!e.manual && {
											fetchStatus: 'idle',
											fetchFailureCount: 0,
											fetchFailureReason: null,
										}),
									};
								case 'error':
									const r = e.error;
									return os(r) && r.revert && this.#o
										? { ...this.#o, fetchStatus: 'idle' }
										: {
												...t,
												error: r,
												errorUpdateCount:
													t.errorUpdateCount + 1,
												errorUpdatedAt: Date.now(),
												fetchFailureCount:
													t.fetchFailureCount + 1,
												fetchFailureReason: r,
												fetchStatus: 'idle',
												status: 'error',
											};
								case 'invalidate':
									return { ...t, isInvalidated: !0 };
								case 'setState':
									return { ...t, ...e.state };
							}
						})(this.state)),
							es.batch(() => {
								this.observers.forEach((e) => {
									e.onQueryUpdate();
								}),
									this.#i.notify({
										query: this,
										type: 'updated',
										action: e,
									});
							});
					}
				};
			function us(e, t) {
				return {
					fetchFailureCount: 0,
					fetchFailureReason: null,
					fetchStatus: as(t.networkMode) ? 'fetching' : 'paused',
					...(void 0 === e && { error: null, status: 'pending' }),
				};
			}
			const ds = class extends Da {
				constructor(e, t) {
					super(),
						(this.options = t),
						(this.#h = e),
						(this.#p = null),
						(this.#f = rs()),
						this.options.experimental_prefetchInRender ||
							this.#f.reject(
								new Error(
									'experimental_prefetchInRender feature flag is not enabled'
								)
							),
						this.bindMethods(),
						this.setOptions(t);
				}
				#h;
				#m = void 0;
				#y = void 0;
				#v = void 0;
				#g;
				#w;
				#f;
				#p;
				#b;
				#j;
				#E;
				#x;
				#P;
				#S;
				#R = new Set();
				bindMethods() {
					this.refetch = this.refetch.bind(this);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#m.addObserver(this),
						hs(this.#m, this.options)
							? this.#C()
							: this.updateResult(),
						this.#q());
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy();
				}
				shouldFetchOnReconnect() {
					return ps(
						this.#m,
						this.options,
						this.options.refetchOnReconnect
					);
				}
				shouldFetchOnWindowFocus() {
					return ps(
						this.#m,
						this.options,
						this.options.refetchOnWindowFocus
					);
				}
				destroy() {
					(this.listeners = new Set()),
						this.#k(),
						this.#O(),
						this.#m.removeObserver(this);
				}
				setOptions(e, t) {
					const r = this.options,
						n = this.#m;
					if (
						((this.options = this.#h.defaultQueryOptions(e)),
						void 0 !== this.options.enabled &&
							'boolean' !== typeof this.options.enabled &&
							'function' !== typeof this.options.enabled &&
							'boolean' !==
								typeof Ua(this.options.enabled, this.#m))
					)
						{throw new Error(
							'Expected enabled to be a boolean or a callback that returns a boolean'
						);}
					this.#D(),
						this.#m.setOptions(this.options),
						r._defaulted &&
							!$a(this.options, r) &&
							this.#h.getQueryCache().notify({
								type: 'observerOptionsUpdated',
								query: this.#m,
								observer: this,
							});
					const a = this.hasListeners();
					a && fs(this.#m, n, this.options, r) && this.#C(),
						this.updateResult(t),
						!a ||
							(this.#m === n &&
								Ua(this.options.enabled, this.#m) ===
									Ua(r.enabled, this.#m) &&
								Ma(this.options.staleTime, this.#m) ===
									Ma(r.staleTime, this.#m)) ||
							this.#I();
					const s = this.#T();
					!a ||
						(this.#m === n &&
							Ua(this.options.enabled, this.#m) ===
								Ua(r.enabled, this.#m) &&
							s === this.#S) ||
						this.#N(s);
				}
				getOptimisticResult(e) {
					const t = this.#h.getQueryCache().build(this.#h, e),
						r = this.createResult(t, e);
					return (
						(n = r),
						!$a(this.getCurrentResult(), n) &&
							((this.#v = r),
							(this.#w = this.options),
							(this.#g = this.#m.state)),
						r
					);
					let n;
				}
				getCurrentResult() {
					return this.#v;
				}
				trackResult(e, t) {
					const r = {};
					return (
						Object.keys(e).forEach((n) => {
							Object.defineProperty(r, n, {
								configurable: !1,
								enumerable: !0,
								get: () => (this.trackProp(n), t?.(n), e[n]),
							});
						}),
						r
					);
				}
				trackProp(e) {
					this.#R.add(e);
				}
				getCurrentQuery() {
					return this.#m;
				}
				refetch({ ...e } = {}) {
					return this.fetch({ ...e });
				}
				fetchOptimistic(e) {
					const t = this.#h.defaultQueryOptions(e),
						r = this.#h.getQueryCache().build(this.#h, t);
					return r.fetch().then(() => this.createResult(r, t));
				}
				fetch(e) {
					return this.#C({
						...e,
						cancelRefetch: e.cancelRefetch ?? !0,
					}).then(() => (this.updateResult(), this.#v));
				}
				#C(e) {
					this.#D();
					let t = this.#m.fetch(this.options, e);
					return e?.throwOnError || (t = t.catch(Ta)), t;
				}
				#I() {
					this.#k();
					const e = Ma(this.options.staleTime, this.#m);
					if (Ia || this.#v.isStale || !Na(e)) {return;}
					const t = Aa(this.#v.dataUpdatedAt, e) + 1;
					this.#x = setTimeout(() => {
						this.#v.isStale || this.updateResult();
					}, t);
				}
				#T() {
					return (
						('function' === typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#m)
							: this.options.refetchInterval) ?? !1
					);
				}
				#N(e) {
					this.#O(),
						(this.#S = e),
						!Ia &&
							!1 !== Ua(this.options.enabled, this.#m) &&
							Na(this.#S) &&
							0 !== this.#S &&
							(this.#P = setInterval(() => {
								(this.options.refetchIntervalInBackground ||
									Za.isFocused()) &&
									this.#C();
							}, this.#S));
				}
				#q() {
					this.#I(), this.#N(this.#T());
				}
				#k() {
					this.#x && (clearTimeout(this.#x), (this.#x = void 0));
				}
				#O() {
					this.#P && (clearInterval(this.#P), (this.#P = void 0));
				}
				createResult(e, t) {
					const r = this.#m,
						n = this.options,
						a = this.#v,
						s = this.#g,
						o = this.#w,
						i = e !== r ? e.state : this.#y,
						{ state: c } = e;
					let l,
						u = { ...c },
						d = !1;
					if (t._optimisticResults) {
						const a = this.hasListeners(),
							s = !a && hs(e, t),
							o = a && fs(e, r, t, n);
						(s || o) && (u = { ...u, ...us(c.data, e.options) }),
							'isRestoring' === t._optimisticResults &&
								(u.fetchStatus = 'idle');
					}
					let { error: h, errorUpdatedAt: p, status: f } = u;
					if (t.select && void 0 !== u.data)
						{if (a && u.data === s?.data && t.select === this.#b)
							l = this.#j;
						else
							try {
								(this.#b = t.select),
									(l = t.select(u.data)),
									(l = Ga(a?.data, l, t)),
									(this.#j = l),
									(this.#p = null);
							} catch (e) {
								this.#p = e;
							}}
					else {l = u.data;}
					if (
						void 0 !== t.placeholderData &&
						void 0 === l &&
						'pending' === f
					) {
						let e;
						if (
							a?.isPlaceholderData &&
							t.placeholderData === o?.placeholderData
						)
							{e = a.data;}
						else if (
							((e =
								'function' === typeof t.placeholderData
									? t.placeholderData(
											this.#E?.state.data,
											this.#E
										)
									: t.placeholderData),
							t.select && void 0 !== e)
						)
							{try {
								(e = t.select(e)), (this.#p = null);
							} catch (e) {
								this.#p = e;
							}}
						void 0 !== e &&
							((f = 'success'),
							(l = Ga(a?.data, e, t)),
							(d = !0));
					}
					this.#p &&
						((h = this.#p),
						(l = this.#j),
						(p = Date.now()),
						(f = 'error'));
					const m = 'fetching' === u.fetchStatus,
						y = 'pending' === f,
						v = 'error' === f,
						g = y && m,
						w = void 0 !== l,
						b = {
							status: f,
							fetchStatus: u.fetchStatus,
							isPending: y,
							isSuccess: 'success' === f,
							isError: v,
							isInitialLoading: g,
							isLoading: g,
							data: l,
							dataUpdatedAt: u.dataUpdatedAt,
							error: h,
							errorUpdatedAt: p,
							failureCount: u.fetchFailureCount,
							failureReason: u.fetchFailureReason,
							errorUpdateCount: u.errorUpdateCount,
							isFetched:
								u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
							isFetchedAfterMount:
								u.dataUpdateCount > i.dataUpdateCount ||
								u.errorUpdateCount > i.errorUpdateCount,
							isFetching: m,
							isRefetching: m && !y,
							isLoadingError: v && !w,
							isPaused: 'paused' === u.fetchStatus,
							isPlaceholderData: d,
							isRefetchError: v && w,
							isStale: ms(e, t),
							refetch: this.refetch,
							promise: this.#f,
						};
					if (this.options.experimental_prefetchInRender) {
						const t = (e) => {
								'error' === b.status
									? e.reject(b.error)
									: void 0 !== b.data && e.resolve(b.data);
							},
							n = () => {
								const e = (this.#f = b.promise = rs());
								t(e);
							},
							a = this.#f;
						switch (a.status) {
							case 'pending':
								e.queryHash === r.queryHash && t(a);
								break;
							case 'fulfilled':
								('error' !== b.status && b.data === a.value) ||
									n();
								break;
							case 'rejected':
								('error' === b.status &&
									b.error === a.reason) ||
									n();
						}
					}
					return b;
				}
				updateResult(e) {
					const t = this.#v,
						r = this.createResult(this.#m, this.options);
					if (
						((this.#g = this.#m.state),
						(this.#w = this.options),
						void 0 !== this.#g.data && (this.#E = this.#m),
						$a(r, t))
					)
						{return;}
					this.#v = r;
					const n = {};
					!1 !== e?.listeners &&
						(() => {
							if (!t) {return !0;}
							const { notifyOnChangeProps: e } = this.options,
								r = 'function' === typeof e ? e() : e;
							if ('all' === r || (!r && !this.#R.size)) {return !0;}
							const n = new Set(r ?? this.#R);
							return (
								this.options.throwOnError && n.add('error'),
								Object.keys(this.#v).some((e) => {
									const r = e;
									return this.#v[r] !== t[r] && n.has(r);
								})
							);
						})() &&
						(n.listeners = !0),
						this.#A({ ...n, ...e });
				}
				#D() {
					const e = this.#h
						.getQueryCache()
						.build(this.#h, this.options);
					if (e === this.#m) {return;}
					const t = this.#m;
					(this.#m = e),
						(this.#y = e.state),
						this.hasListeners() &&
							(t?.removeObserver(this), e.addObserver(this));
				}
				onQueryUpdate() {
					this.updateResult(), this.hasListeners() && this.#q();
				}
				#A(e) {
					es.batch(() => {
						e.listeners &&
							this.listeners.forEach((e) => {
								e(this.#v);
							}),
							this.#h.getQueryCache().notify({
								query: this.#m,
								type: 'observerResultsUpdated',
							});
					});
				}
			};
			function hs(e, t) {
				return (
					(function (e, t) {
						return (
							!1 !== Ua(t.enabled, e) &&
							void 0 === e.state.data &&
							!(
								'error' === e.state.status &&
								!1 === t.retryOnMount
							)
						);
					})(e, t) ||
					(void 0 !== e.state.data && ps(e, t, t.refetchOnMount))
				);
			}
			function ps(e, t, r) {
				if (!1 !== Ua(t.enabled, e)) {
					const n = 'function' === typeof r ? r(e) : r;
					return 'always' === n || (!1 !== n && ms(e, t));
				}
				return !1;
			}
			function fs(e, t, r, n) {
				return (
					(e !== t || !1 === Ua(n.enabled, e)) &&
					(!r.suspense || 'error' !== e.state.status) &&
					ms(e, r)
				);
			}
			function ms(e, t) {
				return (
					!1 !== Ua(t.enabled, e) &&
					e.isStaleByTime(Ma(t.staleTime, e))
				);
			}
			const ys = o(790),
				vs = e.createContext(void 0),
				gs = ({ client: t, children: r }) => (
					e.useEffect(
						() => (
							t.mount(),
							() => {
								t.unmount();
							}
						),
						[t]
					),
					(0, ys.jsx)(vs.Provider, { value: t, children: r })
				);
			const ws = e.createContext(
				(function () {
					let e = !1;
					return {
						clearReset: () => {
							e = !1;
						},
						reset: () => {
							e = !0;
						},
						isReset: () => e,
					};
				})()
			);
			function bs() {}
			const js = e.createContext(!1),
				Es =
					(js.Provider,
					(e, t, r) =>
						t.fetchOptimistic(e).catch(() => {
							r.clearReset();
						}));
			const xs = window.wp.i18n,
				Ps = window.wp.date,
				Ss = /([\p{Ll}\d])(\p{Lu})/gu,
				Rs = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu,
				Cs = /(\d)\p{Ll}|(\p{L})\d/u,
				qs = /[^\p{L}\d]+/giu,
				ks = '$1\0$2';
			function Os(e) {
				let t = e.trim();
				(t = t.replace(Ss, ks).replace(Rs, ks)),
					(t = t.replace(qs, '\0'));
				let r = 0,
					n = t.length;
				for (; '\0' === t.charAt(r); ) {
					r++;
				}
				if (r === n) {
					return [];
				}
				for (; '\0' === t.charAt(n - 1); ) {
					n--;
				}
				return t.slice(r, n).split(/\0/g);
			}
			function Ds(e) {
				const t = Os(e);
				for (let e = 0; e < t.length; e++) {
					const r = t[e],
						n = Cs.exec(r);
					if (n) {
						const a = n.index + (n[1] ?? n[2]).length;
						t.splice(e, 1, r.slice(0, a), r.slice(a));
					}
				}
				return t;
			}
			function Is(e, t) {
				const [r, n, a] = (function (e, t = {}) {
					const r = t.split ?? (t.separateNumbers ? Ds : Os),
						n = t.prefixCharacters ?? '',
						a = t.suffixCharacters ?? '';
					let s = 0,
						o = e.length;
					for (; s < e.length; ) {
						const t = e.charAt(s);
						if (!n.includes(t)) {
							break;
						}
						s++;
					}
					for (; o > s; ) {
						const t = o - 1,
							r = e.charAt(t);
						if (!a.includes(r)) {
							break;
						}
						o = t;
					}
					return [e.slice(0, s), r(e.slice(s, o)), e.slice(o)];
				})(e, t);
				return (
					r +
					n
						.map(
							((s = t?.locale),
							!1 === s
								? (e) => e.toLowerCase()
								: (e) => e.toLocaleLowerCase(s))
						)
						.join(t?.delimiter ?? ' ') +
					a
				);
				let s;
			}
			function Ts(e, t) {
				return Is(e, { delimiter: '-', ...t });
			}
			const Ns = o(3752),
				As = o(1973),
				Ms = o(5573);
			const Us = (0, ys.jsx)(Ms.SVG, {
				width: '24',
				height: '24',
				fill: 'none',
				viewBox: '0 0 24 24',
				strokeWidth: '1.5',
				stroke: 'currentColor',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				xmlns: 'http://www.w3.org/2000/svg',
				children: (0, ys.jsx)(Ms.Path, {
					d: 'M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12',
				}),
			});
			class Ls extends bt.Component {
				constructor(e) {
					super(e), (this.state = { hasError: !1 });
				}
				static getDerivedStateFromError() {
					return { hasError: !0 };
				}
				componentDidCatch(e, t) {
					console.error('Icon loading failed:', e, t);
				}
				render() {
					return this.state.hasError
						? (0, ys.jsx)(Ns.A, { icon: As.default, size: 18 })
						: this.props.children;
				}
			}
			const Fs = ({ value: e }) => {
					const t = (0, bt.lazy)(() =>
						o(2563)(`./${e}.js`).then((e) => ({
							default: () =>
								(0, ys.jsx)(Ns.A, {
									icon: e.default,
									size: 18,
								}),
						}))
					);
					return (0, ys.jsx)(bt.Suspense, {
						fallback: (0, ys.jsx)(Ns.A, { icon: Us, size: 18 }),
						children: (0, ys.jsx)(t, {}),
					});
				},
				_s = (0, bt.createContext)({ templates: {}, entities: {} }),
				Qs = () => (0, bt.useContext)(_s),
				Bs = ({ children: e, value: t }) =>
					(0, ys.jsx)(_s.Provider, { value: t, children: e }),
				Ks = (e, t) =>
					t.includes('.')
						? t.split('.').reduce((e, t) => e && e[t], e)
						: void 0 === e[t]
							? null
							: e[t],
				$s = (e, t, r = null) => {
					if (Array.isArray(e)) {
						if (r) {
							const n = e.map((e) => $s(e, t)).filter(Boolean);
							return 0 === n.length
								? null
								: (0, ys.jsx)('span', {
										children: n.join(` ${r} `),
									});
						}
						const [n, ...a] = e,
							s = a
								.map((e) =>
									'string' === typeof e
										? Ks(t, e)
										: 'object' === typeof e &&
											  'formatted' === e.function
											? (function (e, t) {
													return (0, Ps.format)(
														t,
														new Date(
															1e3 * parseInt(e)
														)
													);
												})(t[e.key], ...e.args)
											: ''
								)
								.filter(Boolean);
						return 0 === s.length ? null : (0, xs.sprintf)(n, ...s);
					}
					if ('object' === typeof e) {
						const [r, n] = e,
							a = Ks(t, n);
						return (0, xs.sprintf)(r, a);
					}
					return 'string' === typeof e ? Ks(t, e) : null;
				},
				zs = ({ content: e, bindings: t, item: r }) => {
					const { type: n, name: a, separator: s } = e,
						o = t[a];
					return 'image' === n
						? ((e, t) => {
								if ('icon' === e.function) {
									return (
										(r = e.args[0]),
										(0, ys.jsx)(Ls, {
											children: (0, ys.jsx)(Fs, {
												value: r,
											}),
										})
									);
								}
								let r;
								const n = Ks(t, e);
								return (0, ys.jsx)('img', { src: n, alt: '' });
							})(o, r)
						: 'text' === n
							? $s(o, r, s)
							: null;
				},
				Hs = ({ row: e, bindings: t, item: r }) => {
					const n = e.content.name;
					return (0, ys.jsx)('div', {
						className: `row has-${Ts(n)}`,
						children:
							e.content &&
							(0, ys.jsx)(zs, {
								content: e.content,
								bindings: t,
								item: r,
							}),
					});
				},
				Ws = ({ column: e, bindings: t, item: r }) => {
					let n;
					return (0, ys.jsx)('div', {
						className: `column column-${null !== (n = e.size) && void 0 !== n ? n : 'auto'}`,
						children: e.rows.map((e, n) =>
							(0, ys.jsx)(Hs, { row: e, bindings: t, item: r }, n)
						),
					});
				},
				Gs = ({ entity: e, item: t }) => {
					const { templates: r } = Qs(),
						n = r[e.template],
						a = e.bindings;
					return (0, ys.jsx)(ys.Fragment, {
						children: n.columns.map((e, r) =>
							(0, ys.jsx)(
								Ws,
								{ column: e, bindings: a, item: t },
								r
							)
						),
					});
				};
			function Vs(e) {
				return (
					e && (e.startsWith('http://') || e.startsWith('https://'))
				);
			}
			const Js = ({ entityKey: e, item: t }) => {
					const r = We(),
						{ entities: n } = Qs(),
						a = n[e],
						s = ta((e) => e.value === t.id.toString()),
						[o, i] = (0, bt.useState)(!1);
					(0, bt.useEffect)(() => {
						const e = (e) => {
								i(e.shiftKey);
							},
							t = (e) => {
								i(e.shiftKey);
							};
						return (
							window.addEventListener('keydown', e),
							window.addEventListener('keyup', t),
							() => {
								window.removeEventListener('keydown', e),
									window.removeEventListener('keyup', t);
							}
						);
					}, []);
					const c = (0, bt.useMemo)(
							() =>
								(function (e, t) {
									const r = t.bindings?.primary_action;
									return e[r?.url] ? e[r?.url] : null;
								})(t, a),
							[t, a]
						),
						l = (0, bt.useMemo)(
							() =>
								(function (e, t) {
									const r = t.bindings?.secondary_action;
									return e[r?.url] ? e[r?.url] : null;
								})(t, a),
							[t, a]
						),
						u = o && l ? l : c;
					(0, bt.useEffect)(() => {
						let e,
							t = null;
						return (
							s &&
								Vs(u) &&
								(e = setTimeout(() => {
									t = (function (e) {
										const t =
											document.createElement('link');
										return (
											(t.rel = 'prefetch'),
											(t.href = e),
											(t.fetchPriority = 'high'),
											(t.as = 'document'),
											document.head.appendChild(t),
											t
										);
									})(u);
								}, 50)),
							() => {
								clearTimeout(e), t && t.remove();
							}
						);
					}, [s, u]);
					const d = (0, bt.useCallback)(() => {
						Vs(u) && (window.location.href = u),
							u.startsWith('meta://') &&
								r(u.replace('meta:/', ''));
					}, [u, r]);
					return (0, ys.jsx)(
						Gn.Item,
						{
							value: t.id.toString(),
							className: 'entity-renderer',
							onSelect: d,
							children: (0, ys.jsx)(Gs, { entity: a, item: t }),
						},
						t.id
					);
				},
				Xs = () =>
					(0, ys.jsx)('svg', {
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 2400 2400',
						width: '24',
						height: '24',
						className: 'search-buddy-loading-icon',
						children: (0, ys.jsxs)('g', {
							strokeWidth: '200',
							strokeLinecap: 'round',
							stroke: '#000',
							fill: 'none',
							children: [
								(0, ys.jsx)('path', { d: 'M1200 600V100' }),
								(0, ys.jsx)('path', {
									opacity: '.5',
									d: 'M1200 2300v-500',
								}),
								(0, ys.jsx)('path', {
									opacity: '.917',
									d: 'M900 680.4l-250-433',
								}),
								(0, ys.jsx)('path', {
									opacity: '.417',
									d: 'M1750 2152.6l-250-433',
								}),
								(0, ys.jsx)('path', {
									opacity: '.833',
									d: 'M680.4 900l-433-250',
								}),
								(0, ys.jsx)('path', {
									opacity: '.333',
									d: 'M2152.6 1750l-433-250',
								}),
								(0, ys.jsx)('path', {
									opacity: '.75',
									d: 'M600 1200H100',
								}),
								(0, ys.jsx)('path', {
									opacity: '.25',
									d: 'M2300 1200h-500',
								}),
								(0, ys.jsx)('path', {
									opacity: '.667',
									d: 'M680.4 1500l-433 250',
								}),
								(0, ys.jsx)('path', {
									opacity: '.167',
									d: 'M2152.6 650l-433 250',
								}),
								(0, ys.jsx)('path', {
									opacity: '.583',
									d: 'M900 1719.6l-250 433',
								}),
								(0, ys.jsx)('path', {
									opacity: '.083',
									d: 'M1750 247.4l-250 433',
								}),
								(0, ys.jsx)('animateTransform', {
									attributeName: 'transform',
									attributeType: 'XML',
									type: 'rotate',
									keyTimes:
										'0;0.08333;0.16667;0.25;0.33333;0.41667;0.5;0.58333;0.66667;0.75;0.83333;0.91667',
									values: '0 1199 1199;30 1199 1199;60 1199 1199;90 1199 1199;120 1199 1199;150 1199 1199;180 1199 1199;210 1199 1199;240 1199 1199;270 1199 1199;300 1199 1199;330 1199 1199',
									dur: '0.83333s',
									begin: '0s',
									repeatCount: 'indefinite',
									calcMode: 'discrete',
								}),
							],
						}),
					}),
				Ys = () => {
					let t;
					const { entity: r = '' } = (function () {
							const { matches: t } = e.useContext(Be),
								r = t[t.length - 1];
							return r ? r.params : {};
						})(),
						{ entities: n } = Qs(),
						a = n[r],
						[s] = wt(),
						o =
							null !== (t = s.get('search')) && void 0 !== t
								? t
								: '',
						{
							data: i,
							isSuccess: c,
							error: l,
							isFetched: u,
							isFetching: d,
						} = (function (t) {
							return (function (t, r, n) {
								const a = ((t) => {
										const r = e.useContext(vs);
										if (t) {
											return t;
										}
										if (!r) {
											throw new Error(
												'No QueryClient set, use QueryClientProvider to set one'
											);
										}
										return r;
									})(n),
									s = e.useContext(js),
									o = e.useContext(ws),
									i = a.defaultQueryOptions(t);
								a
									.getDefaultOptions()
									.queries?._experimental_beforeQuery?.(i),
									(i._optimisticResults = s
										? 'isRestoring'
										: 'optimistic'),
									((e) => {
										e.suspense &&
											('number' !== typeof e.staleTime &&
												(e.staleTime = 1e3),
											'number' === typeof e.gcTime &&
												(e.gcTime = Math.max(
													e.gcTime,
													1e3
												)));
									})(i),
									((e, t) => {
										(e.suspense || e.throwOnError) &&
											(t.isReset() ||
												(e.retryOnMount = !1));
									})(i, o),
									((t) => {
										e.useEffect(() => {
											t.clearReset();
										}, [t]);
									})(o);
								const c = !a.getQueryCache().get(i.queryHash),
									[l] = e.useState(() => new r(a, i)),
									u = l.getOptimisticResult(i);
								if (
									(e.useSyncExternalStore(
										e.useCallback(
											(e) => {
												const t = s
													? () => {}
													: l.subscribe(
															es.batchCalls(e)
														);
												return l.updateResult(), t;
											},
											[l, s]
										),
										() => l.getCurrentResult(),
										() => l.getCurrentResult()
									),
									e.useEffect(() => {
										l.setOptions(i, { listeners: !1 });
									}, [i, l]),
									((e, t) => e?.suspense && t.isPending)(
										i,
										u
									))
								) {
									throw Es(i, l, o);
								}
								if (
									(({
										result: e,
										errorResetBoundary: t,
										throwOnError: r,
										query: n,
									}) => {
										return (
											e.isError &&
											!t.isReset() &&
											!e.isFetching &&
											n &&
											((a = r),
											(s = [e.error, n]),
											'function' === typeof a
												? a(...s)
												: !!a)
										);
										let a, s;
									})({
										result: u,
										errorResetBoundary: o,
										throwOnError: i.throwOnError,
										query: a
											.getQueryCache()
											.get(i.queryHash),
									})
								) {
									throw u.error;
								}
								if (
									(a
										.getDefaultOptions()
										.queries?._experimental_afterQuery?.(
											i,
											u
										),
									i.experimental_prefetchInRender &&
										!Ia &&
										((e, t) =>
											e.isLoading && e.isFetching && !t)(
											u,
											s
										))
								) {
									const e = c
										? Es(i, l, o)
										: a.getQueryCache().get(i.queryHash)
												?.promise;
									e?.catch(bs).finally(() => {
										l.hasListeners() || l.updateResult();
									});
								}
								return i.notifyOnChangeProps
									? u
									: l.trackResult(u);
							})(t, ds, void 0);
						})({
							queryKey: ['provider', r, o],
							queryFn: ({ signal: e }) => Oa.search(o, r, e),
							enabled: !!o,
							placeholderData: (e) => (o ? e : []),
							refetchOnWindowFocus: !1,
							refetchOnMount: !1,
							refetchInterval: 0,
							refetchIntervalInBackground: !1,
							refetchOnReconnect: !1,
						});
					return (0, ys.jsxs)(ys.Fragment, {
						children: [
							0 === i?.length &&
								u &&
								c &&
								(0, ys.jsxs)(Gn.Empty, {
									children: [
										'No ',
										a.label.toLowerCase(),
										' found for "',
										o,
										'"',
									],
								}),
							l &&
								(0, ys.jsxs)(Gn.Empty, {
									children: [
										'Error searching for ',
										a.label.toLowerCase(),
										':',
										' ',
										l.message,
									],
								}),
							d &&
								(0, bt.createPortal)(
									(0, ys.jsx)(Xs, {}),
									document.querySelector(
										'.search-buddy-input-portal'
									)
								),
							i &&
								i.map((e) =>
									(0, ys.jsx)(
										Js,
										{ entityKey: r, item: e },
										e.id
									)
								),
						],
					});
				},
				Zs = window.wp.keycodes,
				eo = () => {
					const { entities: e } = Qs(),
						t = ze().pathname.split('/').filter(Boolean);
					return t.at(-1) && Object.keys(e).includes(t.at(-1))
						? e[t.at(-1)]
						: null;
				};
			function to() {
				const e = eo(),
					t = ta((e) => e.filtered.count > 0);
				if (!e || !t) {
					return null;
				}
				const r = (function (e) {
						return e.bindings?.primary_action?.label;
					})(e),
					n = (function (e) {
						return e.bindings?.secondary_action?.label;
					})(e);
				return (0, ys.jsxs)('div', {
					className: 'command-footer',
					children: [
						(0, ys.jsxs)('span', {
							'aria-label': (0, xs.sprintf)(
								// translators: %1s: The shortcut label, %2$s the action name.
								// translators: %1s: The shortcut label, %2$s the action name.
								(0, xs.__)(
									'Press %1$s to %2$s',
									'merchant-buddy'
								),
								Zs.displayShortcutList.undefined('↵'),
								r
							),
							children: [
								r,
								' ',
								Zs.displayShortcutList
									.undefined('↵')
									.map((e) =>
										(0, ys.jsx)('kbd', { children: e }, e)
									),
							],
						}),
						n &&
							(0, ys.jsxs)(ys.Fragment, {
								children: [
									(0, ys.jsx)('hr', {}),
									(0, ys.jsxs)('span', {
										'aria-label': (0, xs.sprintf)(
											// translators: %1s: The shortcut label, %2s: The action name.
											// translators: %1s: The shortcut label, %2s: The action name.
											(0, xs.__)(
												'Press %1$s to %2$s',
												'merchant-buddy'
											),
											Zs.displayShortcutList.shift('↵'),
											n
										),
										children: [
											n,
											Zs.displayShortcutList
												.shift('↵')
												.map((e) =>
													(0, ys.jsx)(
														'kbd',
														{ children: e },
														e
													)
												),
										],
									}),
								],
							}),
					],
				});
			}
			const ro = ({
					placeholder: e,
					searchValue: t,
					setSearchValue: r,
				}) => {
					const n = ta((e) => 0 === e.filtered.count);
					return (0, ys.jsxs)('div', {
						className:
							'search-buddy-input-wrapper ' +
							(n ? 'has-collapsed-input' : ''),
						children: [
							(0, ys.jsx)(Gn.Input, {
								autoFocus: !0,
								value: t,
								onValueChange: r,
								placeholder: e,
							}),
							(0, ys.jsx)('div', {
								className: 'search-buddy-input-portal',
							}),
						],
					});
				},
				no = () => {
					const [e, t] = (0, bt.useState)(!1);
					(0, bt.useEffect)(() => {
						const e = (e) => {
							'k' === e.key &&
								(e.metaKey || e.ctrlKey) &&
								(e.preventDefault(), t((e) => !e));
						};
						return (
							document.addEventListener('keydown', e),
							() => document.removeEventListener('keydown', e)
						);
					}, []);
					const r = We(),
						n = ze().pathname.split('/').filter(Boolean),
						a = eo(),
						s = n.at(-1)
							? // translators: %s is the last page in the navigation stack
								// translators: %s is the last page in the navigation stack
								(0, xs.sprintf)(
									(0, xs.__)('Search %s…', 'merchant-buddy'),
									n.at(-1)
								)
							: (0, xs.__)(
									'Select an entity to search',
									'merchant-buddy'
								),
						[o, i] = wt(),
						c = o.get('search') || '';
					return (0, ys.jsxs)(Gn.Dialog, {
						loop: !0,
						open: e,
						onOpenChange: t,
						label: 'Global Command Menu',
						shouldFilter: !a,
						onKeyDown: (e) => {
							0 !== n.length &&
								0 === c.length &&
								'Backspace' === e.key &&
								r(-2);
						},
						children: [
							(0, ys.jsx)('div', {
								children: n.map((e) =>
									(0, ys.jsx)(
										'div',
										{
											'cmdk-vercel-badge': '',
											children:
												e.charAt(0).toUpperCase() +
												e.slice(1).toLowerCase(),
										},
										e
									)
								),
							}),
							(0, ys.jsx)(ro, {
								placeholder: s,
								searchValue: c,
								setSearchValue: (e) =>
									i({ search: e }, { replace: !0 }),
							}),
							(0, ys.jsx)(Gn.List, {
								children: (0, ys.jsx)(at, {}),
							}),
							(0, ys.jsx)(to, {}),
						],
					});
				},
				ao = ({ to: e, children: t }) => {
					const r = We();
					return (0, ys.jsx)(Gn.Item, {
						onSelect: () => r(e),
						children: t,
					});
				},
				so = () => {
					const { entities: e } = Qs();
					return (0, ys.jsxs)(ys.Fragment, {
						children: [
							(0, ys.jsx)(Gn.Empty, {
								children: 'No results found.',
							}),
							(0, ys.jsx)(Gn.Group, {
								heading: 'Entities',
								children: Object.entries(e).map(([e, t]) =>
									(0, ys.jsx)(
										ao,
										{ to: `/${e}`, children: t.label },
										e
									)
								),
							}),
						],
					});
				};
			const oo = class extends Da {
					constructor(e = {}) {
						super(), (this.config = e), (this.#M = new Map());
					}
					#M;
					build(e, t, r) {
						const n = t.queryKey,
							a = t.queryHash ?? _a(n, t);
						let s = this.get(a);
						return (
							s ||
								((s = new ls({
									cache: this,
									queryKey: n,
									queryHash: a,
									options: e.defaultQueryOptions(t),
									state: r,
									defaultOptions: e.getQueryDefaults(n),
								})),
								this.add(s)),
							s
						);
					}
					add(e) {
						this.#M.has(e.queryHash) ||
							(this.#M.set(e.queryHash, e),
							this.notify({ type: 'added', query: e }));
					}
					remove(e) {
						const t = this.#M.get(e.queryHash);
						t &&
							(e.destroy(),
							t === e && this.#M.delete(e.queryHash),
							this.notify({ type: 'removed', query: e }));
					}
					clear() {
						es.batch(() => {
							this.getAll().forEach((e) => {
								this.remove(e);
							});
						});
					}
					get(e) {
						return this.#M.get(e);
					}
					getAll() {
						return [...this.#M.values()];
					}
					find(e) {
						const t = { exact: !0, ...e };
						return this.getAll().find((e) => La(t, e));
					}
					findAll(e = {}) {
						const t = this.getAll();
						return Object.keys(e).length > 0
							? t.filter((t) => La(e, t))
							: t;
					}
					notify(e) {
						es.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					onFocus() {
						es.batch(() => {
							this.getAll().forEach((e) => {
								e.onFocus();
							});
						});
					}
					onOnline() {
						es.batch(() => {
							this.getAll().forEach((e) => {
								e.onOnline();
							});
						});
					}
				},
				io = class extends cs {
					#U;
					#L;
					#c;
					constructor(e) {
						super(),
							(this.mutationId = e.mutationId),
							(this.#L = e.mutationCache),
							(this.#U = []),
							(this.state = e.state || {
								context: void 0,
								data: void 0,
								error: null,
								failureCount: 0,
								failureReason: null,
								isPaused: !1,
								status: 'idle',
								variables: void 0,
								submittedAt: 0,
							}),
							this.setOptions(e.options),
							this.scheduleGc();
					}
					setOptions(e) {
						(this.options = e),
							this.updateGcTime(this.options.gcTime);
					}
					get meta() {
						return this.options.meta;
					}
					addObserver(e) {
						this.#U.includes(e) ||
							(this.#U.push(e),
							this.clearGcTimeout(),
							this.#L.notify({
								type: 'observerAdded',
								mutation: this,
								observer: e,
							}));
					}
					removeObserver(e) {
						(this.#U = this.#U.filter((t) => t !== e)),
							this.scheduleGc(),
							this.#L.notify({
								type: 'observerRemoved',
								mutation: this,
								observer: e,
							});
					}
					optionalRemove() {
						this.#U.length ||
							('pending' === this.state.status
								? this.scheduleGc()
								: this.#L.remove(this));
					}
					continue() {
						return (
							this.#c?.continue() ??
							this.execute(this.state.variables)
						);
					}
					async execute(e) {
						this.#c = is({
							fn: () =>
								this.options.mutationFn
									? this.options.mutationFn(e)
									: Promise.reject(
											new Error('No mutationFn found')
										),
							onFail: (e, t) => {
								this.#d({
									type: 'failed',
									failureCount: e,
									error: t,
								});
							},
							onPause: () => {
								this.#d({ type: 'pause' });
							},
							onContinue: () => {
								this.#d({ type: 'continue' });
							},
							retry: this.options.retry ?? 0,
							retryDelay: this.options.retryDelay,
							networkMode: this.options.networkMode,
							canRun: () => this.#L.canRun(this),
						});
						const t = 'pending' === this.state.status,
							r = !this.#c.canStart();
						try {
							if (!t) {
								this.#d({
									type: 'pending',
									variables: e,
									isPaused: r,
								}),
									await this.#L.config.onMutate?.(e, this);
								const t = await this.options.onMutate?.(e);
								t !== this.state.context &&
									this.#d({
										type: 'pending',
										context: t,
										variables: e,
										isPaused: r,
									});
							}
							const n = await this.#c.start();
							return (
								await this.#L.config.onSuccess?.(
									n,
									e,
									this.state.context,
									this
								),
								await this.options.onSuccess?.(
									n,
									e,
									this.state.context
								),
								await this.#L.config.onSettled?.(
									n,
									null,
									this.state.variables,
									this.state.context,
									this
								),
								await this.options.onSettled?.(
									n,
									null,
									e,
									this.state.context
								),
								this.#d({ type: 'success', data: n }),
								n
							);
						} catch (t) {
							try {
								throw (
									(await this.#L.config.onError?.(
										t,
										e,
										this.state.context,
										this
									),
									await this.options.onError?.(
										t,
										e,
										this.state.context
									),
									await this.#L.config.onSettled?.(
										void 0,
										t,
										this.state.variables,
										this.state.context,
										this
									),
									await this.options.onSettled?.(
										void 0,
										t,
										e,
										this.state.context
									),
									t)
								);
							} finally {
								this.#d({ type: 'error', error: t });
							}
						} finally {
							this.#L.runNext(this);
						}
					}
					#d(e) {
						(this.state = ((t) => {
							switch (e.type) {
								case 'failed':
									return {
										...t,
										failureCount: e.failureCount,
										failureReason: e.error,
									};
								case 'pause':
									return { ...t, isPaused: !0 };
								case 'continue':
									return { ...t, isPaused: !1 };
								case 'pending':
									return {
										...t,
										context: e.context,
										data: void 0,
										failureCount: 0,
										failureReason: null,
										error: null,
										isPaused: e.isPaused,
										status: 'pending',
										variables: e.variables,
										submittedAt: Date.now(),
									};
								case 'success':
									return {
										...t,
										data: e.data,
										failureCount: 0,
										failureReason: null,
										error: null,
										status: 'success',
										isPaused: !1,
									};
								case 'error':
									return {
										...t,
										data: void 0,
										error: e.error,
										failureCount: t.failureCount + 1,
										failureReason: e.error,
										isPaused: !1,
										status: 'error',
									};
							}
						})(this.state)),
							es.batch(() => {
								this.#U.forEach((t) => {
									t.onMutationUpdate(e);
								}),
									this.#L.notify({
										mutation: this,
										type: 'updated',
										action: e,
									});
							});
					}
				},
				co = class extends Da {
					constructor(e = {}) {
						super(),
							(this.config = e),
							(this.#F = new Map()),
							(this.#_ = Date.now());
					}
					#F;
					#_;
					build(e, t, r) {
						const n = new io({
							mutationCache: this,
							mutationId: ++this.#_,
							options: e.defaultMutationOptions(t),
							state: r,
						});
						return this.add(n), n;
					}
					add(e) {
						const t = lo(e),
							r = this.#F.get(t) ?? [];
						r.push(e),
							this.#F.set(t, r),
							this.notify({ type: 'added', mutation: e });
					}
					remove(e) {
						const t = lo(e);
						if (this.#F.has(t)) {
							const r = this.#F.get(t)?.filter((t) => t !== e);
							r &&
								(0 === r.length
									? this.#F.delete(t)
									: this.#F.set(t, r));
						}
						this.notify({ type: 'removed', mutation: e });
					}
					canRun(e) {
						const t = this.#F
							.get(lo(e))
							?.find((e) => 'pending' === e.state.status);
						return !t || t === e;
					}
					runNext(e) {
						const t = this.#F
							.get(lo(e))
							?.find((t) => t !== e && t.state.isPaused);
						return t?.continue() ?? Promise.resolve();
					}
					clear() {
						es.batch(() => {
							this.getAll().forEach((e) => {
								this.remove(e);
							});
						});
					}
					getAll() {
						return [...this.#F.values()].flat();
					}
					find(e) {
						const t = { exact: !0, ...e };
						return this.getAll().find((e) => Fa(t, e));
					}
					findAll(e = {}) {
						return this.getAll().filter((t) => Fa(e, t));
					}
					notify(e) {
						es.batch(() => {
							this.listeners.forEach((t) => {
								t(e);
							});
						});
					}
					resumePausedMutations() {
						const e = this.getAll().filter((e) => e.state.isPaused);
						return es.batch(() =>
							Promise.all(e.map((e) => e.continue().catch(Ta)))
						);
					}
				};
			function lo(e) {
				return e.options.scope?.id ?? String(e.mutationId);
			}
			function uo(e) {
				return {
					onFetch: (t, r) => {
						const n = t.options,
							a = t.fetchOptions?.meta?.fetchMore?.direction,
							s = t.state.data?.pages || [],
							o = t.state.data?.pageParams || [];
						let i = { pages: [], pageParams: [] },
							c = 0;
						const l = async () => {
							let r = !1;
							const l = Ya(t.options, t.fetchOptions),
								u = async (e, n, a) => {
									if (r) {
										return Promise.reject();
									}
									if (null == n && e.pages.length) {
										return Promise.resolve(e);
									}
									const s = {
										queryKey: t.queryKey,
										pageParam: n,
										direction: a ? 'backward' : 'forward',
										meta: t.options.meta,
									};
									let o;
									(o = s),
										Object.defineProperty(o, 'signal', {
											enumerable: !0,
											get: () => (
												t.signal.aborted
													? (r = !0)
													: t.signal.addEventListener(
															'abort',
															() => {
																r = !0;
															}
														),
												t.signal
											),
										});
									const i = await l(s),
										{ maxPages: c } = t.options,
										u = a ? Ja : Va;
									return {
										pages: u(e.pages, i, c),
										pageParams: u(e.pageParams, n, c),
									};
								};
							if (a && s.length) {
								const e = 'backward' === a,
									t = { pages: s, pageParams: o },
									r = (e ? po : ho)(n, t);
								i = await u(t, r, e);
							} else {
								const t = e ?? s.length;
								do {
									const e =
										0 === c
											? (o[0] ?? n.initialPageParam)
											: ho(n, i);
									if (c > 0 && null == e) {
										break;
									}
									(i = await u(i, e)), c++;
								} while (c < t);
							}
							return i;
						};
						t.options.persister
							? (t.fetchFn = () =>
									t.options.persister?.(
										l,
										{
											queryKey: t.queryKey,
											meta: t.options.meta,
											signal: t.signal,
										},
										r
									))
							: (t.fetchFn = l);
					},
				};
			}
			function ho(e, { pages: t, pageParams: r }) {
				const n = t.length - 1;
				return t.length > 0
					? e.getNextPageParam(t[n], t, r[n], r)
					: void 0;
			}
			function po(e, { pages: t, pageParams: r }) {
				return t.length > 0
					? e.getPreviousPageParam?.(t[0], t, r[0], r)
					: void 0;
			}
			const fo = new (class {
					#Q;
					#L;
					#l;
					#B;
					#K;
					#$;
					#z;
					#H;
					constructor(e = {}) {
						(this.#Q = e.queryCache || new oo()),
							(this.#L = e.mutationCache || new co()),
							(this.#l = e.defaultOptions || {}),
							(this.#B = new Map()),
							(this.#K = new Map()),
							(this.#$ = 0);
					}
					mount() {
						this.#$++,
							1 === this.#$ &&
								((this.#z = Za.subscribe(async (e) => {
									e &&
										(await this.resumePausedMutations(),
										this.#Q.onFocus());
								})),
								(this.#H = ts.subscribe(async (e) => {
									e &&
										(await this.resumePausedMutations(),
										this.#Q.onOnline());
								})));
					}
					unmount() {
						this.#$--,
							0 === this.#$ &&
								(this.#z?.(),
								(this.#z = void 0),
								this.#H?.(),
								(this.#H = void 0));
					}
					isFetching(e) {
						return this.#Q.findAll({
							...e,
							fetchStatus: 'fetching',
						}).length;
					}
					isMutating(e) {
						return this.#L.findAll({ ...e, status: 'pending' })
							.length;
					}
					getQueryData(e) {
						const t = this.defaultQueryOptions({ queryKey: e });
						return this.#Q.get(t.queryHash)?.state.data;
					}
					ensureQueryData(e) {
						const t = this.getQueryData(e.queryKey);
						if (void 0 === t) {
							return this.fetchQuery(e);
						}
						{
							const r = this.defaultQueryOptions(e),
								n = this.#Q.build(this, r);
							return (
								e.revalidateIfStale &&
									n.isStaleByTime(Ma(r.staleTime, n)) &&
									this.prefetchQuery(r),
								Promise.resolve(t)
							);
						}
					}
					getQueriesData(e) {
						return this.#Q
							.findAll(e)
							.map(({ queryKey: e, state: t }) => [e, t.data]);
					}
					setQueryData(e, t, r) {
						const n = this.defaultQueryOptions({ queryKey: e }),
							a = this.#Q.get(n.queryHash),
							s = a?.state.data,
							o = (function (e, t) {
								return 'function' === typeof e ? e(t) : e;
							})(t, s);
						if (void 0 !== o) {
							return this.#Q
								.build(this, n)
								.setData(o, { ...r, manual: !0 });
						}
					}
					setQueriesData(e, t, r) {
						return es.batch(() =>
							this.#Q
								.findAll(e)
								.map(({ queryKey: e }) => [
									e,
									this.setQueryData(e, t, r),
								])
						);
					}
					getQueryState(e) {
						const t = this.defaultQueryOptions({ queryKey: e });
						return this.#Q.get(t.queryHash)?.state;
					}
					removeQueries(e) {
						const t = this.#Q;
						es.batch(() => {
							t.findAll(e).forEach((e) => {
								t.remove(e);
							});
						});
					}
					resetQueries(e, t) {
						const r = this.#Q,
							n = { type: 'active', ...e };
						return es.batch(
							() => (
								r.findAll(e).forEach((e) => {
									e.reset();
								}),
								this.refetchQueries(n, t)
							)
						);
					}
					cancelQueries(e = {}, t = {}) {
						const r = { revert: !0, ...t },
							n = es.batch(() =>
								this.#Q.findAll(e).map((e) => e.cancel(r))
							);
						return Promise.all(n).then(Ta).catch(Ta);
					}
					invalidateQueries(e = {}, t = {}) {
						return es.batch(() => {
							if (
								(this.#Q.findAll(e).forEach((e) => {
									e.invalidate();
								}),
								'none' === e.refetchType)
							) {
								return Promise.resolve();
							}
							const r = {
								...e,
								type: e.refetchType ?? e.type ?? 'active',
							};
							return this.refetchQueries(r, t);
						});
					}
					refetchQueries(e = {}, t) {
						const r = {
								...t,
								cancelRefetch: t?.cancelRefetch ?? !0,
							},
							n = es.batch(() =>
								this.#Q
									.findAll(e)
									.filter((e) => !e.isDisabled())
									.map((e) => {
										let t = e.fetch(void 0, r);
										return (
											r.throwOnError || (t = t.catch(Ta)),
											'paused' === e.state.fetchStatus
												? Promise.resolve()
												: t
										);
									})
							);
						return Promise.all(n).then(Ta);
					}
					fetchQuery(e) {
						const t = this.defaultQueryOptions(e);
						void 0 === t.retry && (t.retry = !1);
						const r = this.#Q.build(this, t);
						return r.isStaleByTime(Ma(t.staleTime, r))
							? r.fetch(t)
							: Promise.resolve(r.state.data);
					}
					prefetchQuery(e) {
						return this.fetchQuery(e).then(Ta).catch(Ta);
					}
					fetchInfiniteQuery(e) {
						return (e.behavior = uo(e.pages)), this.fetchQuery(e);
					}
					prefetchInfiniteQuery(e) {
						return this.fetchInfiniteQuery(e).then(Ta).catch(Ta);
					}
					ensureInfiniteQueryData(e) {
						return (
							(e.behavior = uo(e.pages)), this.ensureQueryData(e)
						);
					}
					resumePausedMutations() {
						return ts.isOnline()
							? this.#L.resumePausedMutations()
							: Promise.resolve();
					}
					getQueryCache() {
						return this.#Q;
					}
					getMutationCache() {
						return this.#L;
					}
					getDefaultOptions() {
						return this.#l;
					}
					setDefaultOptions(e) {
						this.#l = e;
					}
					setQueryDefaults(e, t) {
						this.#B.set(Qa(e), { queryKey: e, defaultOptions: t });
					}
					getQueryDefaults(e) {
						const t = [...this.#B.values()];
						let r = {};
						return (
							t.forEach((t) => {
								Ba(e, t.queryKey) &&
									(r = { ...r, ...t.defaultOptions });
							}),
							r
						);
					}
					setMutationDefaults(e, t) {
						this.#K.set(Qa(e), {
							mutationKey: e,
							defaultOptions: t,
						});
					}
					getMutationDefaults(e) {
						const t = [...this.#K.values()];
						let r = {};
						return (
							t.forEach((t) => {
								Ba(e, t.mutationKey) &&
									(r = { ...r, ...t.defaultOptions });
							}),
							r
						);
					}
					defaultQueryOptions(e) {
						if (e._defaulted) {
							return e;
						}
						const t = {
							...this.#l.queries,
							...this.getQueryDefaults(e.queryKey),
							...e,
							_defaulted: !0,
						};
						return (
							t.queryHash || (t.queryHash = _a(t.queryKey, t)),
							void 0 === t.refetchOnReconnect &&
								(t.refetchOnReconnect =
									'always' !== t.networkMode),
							void 0 === t.throwOnError &&
								(t.throwOnError = !!t.suspense),
							!t.networkMode &&
								t.persister &&
								(t.networkMode = 'offlineFirst'),
							!0 !== t.enabled &&
								t.queryFn === Xa &&
								(t.enabled = !1),
							t
						);
					}
					defaultMutationOptions(e) {
						return e?._defaulted
							? e
							: {
									...this.#l.mutations,
									...(e?.mutationKey &&
										this.getMutationDefaults(
											e.mutationKey
										)),
									...e,
									_defaulted: !0,
								};
					}
					clear() {
						this.#Q.clear(), this.#L.clear();
					}
				})(),
				mo =
					((yo = [
						{
							path: '/',
							element: (0, ys.jsx)(no, {}),
							children: [
								{ index: !0, element: (0, ys.jsx)(so, {}) },
								{
									path: '/:entity',
									element: (0, ys.jsx)(Ys, {}),
								},
							],
						},
					]),
					(function (e) {
						const n = e.window
								? e.window
								: 'undefined' !== typeof window
									? window
									: void 0,
							o =
								void 0 !== n &&
								void 0 !== n.document &&
								void 0 !== n.document.createElement,
							l = !o;
						let u;
						if (
							(s(
								e.routes.length > 0,
								'You must provide a non-empty routes array to createRouter'
							),
							e.mapRouteProperties)
						) {
							u = e.mapRouteProperties;
						} else if (e.detectErrorBoundary) {
							const t = e.detectErrorBoundary;
							u = (e) => ({ hasErrorBoundary: t(e) });
						} else {
							u = V;
						}
						let m,
							y,
							v,
							g = {},
							w = h(e.routes, u, void 0, g),
							b = e.basename || '/',
							j = e.dataStrategy || oe,
							E = e.patchRoutesOnNavigation,
							x = a(
								{
									v7_fetcherPersist: !1,
									v7_normalizeFormMethod: !1,
									v7_partialHydration: !1,
									v7_prependBasename: !1,
									v7_relativeSplatPath: !1,
									v7_skipActionErrorRevalidation: !1,
								},
								e.future
							),
							P = null,
							S = new Set(),
							R = null,
							C = null,
							k = null,
							O = null != e.hydrationData,
							D = p(w, e.history.location, b),
							I = null;
						if (null == D && !E) {
							const t = ge(404, {
									pathname: e.history.location.pathname,
								}),
								{ matches: r, route: n } = ve(w);
							(D = r), (I = { [n.id]: t });
						}
						if (
							(D &&
								!e.hydrationData &&
								ct(D, w, e.history.location.pathname).active &&
								(D = null),
							D)
						) {
							if (D.some((e) => e.route.lazy)) {y = !1;}
							else if (D.some((e) => e.route.loader))
								{if (x.v7_partialHydration) {
									let t = e.hydrationData
											? e.hydrationData.loaderData
											: null,
										r = e.hydrationData
											? e.hydrationData.errors
											: null;
									if (r) {
										let e = D.findIndex(
											(e) => void 0 !== r[e.route.id]
										);
										y = D.slice(0, e + 1).every(
											(e) => !te(e.route, t, r)
										);
									} else
										y = D.every((e) => !te(e.route, t, r));
								} else y = null != e.hydrationData;}
							else {y = !0;}}
						} else if (
							((y = !1), (D = []), x.v7_partialHydration)
						) {
							const t = ct(null, w, e.history.location.pathname);
							t.active && t.matches && (D = t.matches);
						}
						let T,
							N,
							A = {
								historyAction: e.history.action,
								location: e.history.location,
								matches: D,
								initialized: y,
								navigation: z,
								restoreScrollPosition:
									null == e.hydrationData && null,
								preventScrollReset: !1,
								revalidation: 'idle',
								loaderData:
									(e.hydrationData &&
										e.hydrationData.loaderData) ||
									{},
								actionData:
									(e.hydrationData &&
										e.hydrationData.actionData) ||
									null,
								errors:
									(e.hydrationData &&
										e.hydrationData.errors) ||
									I,
								fetchers: new Map(),
								blockers: new Map(),
							},
							M = t.Pop,
							U = !1,
							F = !1,
							_ = new Map(),
							Q = null,
							B = !1,
							K = !1,
							Z = [],
							re = new Set(),
							ne = new Map(),
							se = 0,
							de = -1,
							he = new Map(),
							be = new Set(),
							Se = new Map(),
							Re = new Map(),
							De = new Set(),
							Ue = new Map(),
							Le = new Map();
						function Fe(e, t) {
							void 0 === t && (t = {}), (A = a({}, A, e));
							const r = [],
								n = [];
							x.v7_fetcherPersist &&
								A.fetchers.forEach((e, t) => {
									'idle' === e.state &&
										(De.has(t) ? n.push(t) : r.push(t));
								}),
								[...S].forEach((e) =>
									e(A, {
										deletedFetchers: n,
										viewTransitionOpts:
											t.viewTransitionOpts,
										flushSync: !0 === t.flushSync,
									})
								),
								x.v7_fetcherPersist &&
									(r.forEach((e) => A.fetchers.delete(e)),
									n.forEach((e) => Je(e)));
						}
						function _e(r, n, s) {
							let o, i;
							let c,
								{ flushSync: l } = void 0 === s ? {} : s,
								u =
									null != A.actionData &&
									null != A.navigation.formMethod &&
									Ce(A.navigation.formMethod) &&
									'loading' === A.navigation.state &&
									!0 !==
										(null == (o = r.state)
											? void 0
											: o._isRedirect);
							c = n.actionData
								? Object.keys(n.actionData).length > 0
									? n.actionData
									: null
								: u
									? A.actionData
									: null;
							let d = n.loaderData
									? fe(
											A.loaderData,
											n.loaderData,
											n.matches || [],
											n.errors
										)
									: A.loaderData,
								h = A.blockers;
							h.size > 0 &&
								((h = new Map(h)),
								h.forEach((e, t) => h.set(t, W)));
							let p,
								f =
									!0 === U ||
									(null != A.navigation.formMethod &&
										Ce(A.navigation.formMethod) &&
										!0 !==
											(null == (i = r.state)
												? void 0
												: i._isRedirect));
							if (
								(m && ((w = m), (m = void 0)),
								B ||
									M === t.Pop ||
									(M === t.Push
										? e.history.push(r, r.state)
										: M === t.Replace &&
											e.history.replace(r, r.state)),
								M === t.Pop)
							) {
								const e = _.get(A.location.pathname);
								e && e.has(r.pathname)
									? (p = {
											currentLocation: A.location,
											nextLocation: r,
										})
									: _.has(r.pathname) &&
										(p = {
											currentLocation: r,
											nextLocation: A.location,
										});
							} else if (F) {
								let e = _.get(A.location.pathname);
								e
									? e.add(r.pathname)
									: ((e = new Set([r.pathname])),
										_.set(A.location.pathname, e)),
									(p = {
										currentLocation: A.location,
										nextLocation: r,
									});
							}
							Fe(
								a({}, n, {
									actionData: c,
									loaderData: d,
									historyAction: M,
									location: r,
									initialized: !0,
									navigation: z,
									revalidation: 'idle',
									restoreScrollPosition: it(
										r,
										n.matches || A.matches
									),
									preventScrollReset: f,
									blockers: h,
								}),
								{ viewTransitionOpts: p, flushSync: !0 === l }
							),
								(M = t.Pop),
								(U = !1),
								(F = !1),
								(B = !1),
								(K = !1),
								(Z = []);
						}
						async function Qe(n, s, o) {
							T && T.abort(),
								(T = null),
								(M = n),
								(B =
									!0 ===
									(o && o.startUninterruptedRevalidation)),
								(function (e, t) {
									if (R && k) {
										const r = ot(e, t);
										R[r] = k();
									}
								})(A.location, A.matches),
								(U = !0 === (o && o.preventScrollReset)),
								(F = !0 === (o && o.enableViewTransition));
							let i = m || w,
								c = o && o.overrideNavigation,
								l = p(i, s, b),
								u = !0 === (o && o.flushSync),
								d = ct(l, i, s.pathname);
							if (
								(d.active && d.matches && (l = d.matches), !l)
							) {
								const {
									error: e,
									notFoundMatches: t,
									route: r,
								} = at(s.pathname);
								return void _e(
									s,
									{
										matches: t,
										loaderData: {},
										errors: { [r.id]: e },
									},
									{ flushSync: u }
								);
							}
							if (
								A.initialized &&
								!K &&
								((h = A.location),
								(f = s),
								h.pathname === f.pathname &&
									h.search === f.search &&
									('' === h.hash
										? '' !== f.hash
										: h.hash === f.hash ||
											'' !== f.hash)) &&
								!(
									o &&
									o.submission &&
									Ce(o.submission.formMethod)
								)
							) {
								return void _e(
									s,
									{ matches: l },
									{ flushSync: u }
								);
							}
							let h, f;
							T = new AbortController();
							let y,
								v = ue(
									e.history,
									s,
									T.signal,
									o && o.submission
								);
							if (o && o.pendingError) {
								y = [
									ye(l).route.id,
									{ type: r.error, error: o.pendingError },
								];
							} else if (
								o &&
								o.submission &&
								Ce(o.submission.formMethod)
							) {
								const n = await (async function (
									e,
									n,
									a,
									s,
									o,
									i
								) {
									void 0 === i && (i = {}), He();
									let c,
										l = (function (e, t) {
											return {
												state: 'submitting',
												location: e,
												formMethod: t.formMethod,
												formAction: t.formAction,
												formEncType: t.formEncType,
												formData: t.formData,
												json: t.json,
												text: t.text,
											};
										})(n, a);
									if (
										(Fe(
											{ navigation: l },
											{ flushSync: !0 === i.flushSync }
										),
										o)
									) {
										const t = await lt(
											s,
											n.pathname,
											e.signal
										);
										if ('aborted' === t.type)
											{return { shortCircuited: !0 };}
										if ('error' === t.type) {
											const e = ye(t.partialMatches).route
												.id;
											return {
												matches: t.partialMatches,
												pendingActionResult: [
													e,
													{
														type: r.error,
														error: t.error,
													},
												],
											};
										}
										if (!t.matches) {
											const {
												notFoundMatches: e,
												error: t,
												route: a,
											} = at(n.pathname);
											return {
												matches: e,
												pendingActionResult: [
													a.id,
													{ type: r.error, error: t },
												],
											};
										}
										s = t.matches;
									}
									const u = Ie(s, n);
									if (u.route.action || u.route.lazy) {
										if (
											((c = (
												await $e(
													'action',
													A,
													e,
													[u],
													s,
													null
												)
											)[u.route.id]),
											e.signal.aborted)
										)
											{return { shortCircuited: !0 };}
									} else
										{c = {
											type: r.error,
											error: ge(405, {
												method: e.method,
												pathname: n.pathname,
												routeId: u.route.id,
											}),
										};}
									if (Pe(c)) {
										let t;
										return (
											(t =
												i && null != i.replace
													? i.replace
													: le(
															c.response.headers.get(
																'Location'
															),
															new URL(e.url),
															b
														) ===
														A.location.pathname +
															A.location.search),
											await Ke(e, c, !0, {
												submission: a,
												replace: t,
											}),
											{ shortCircuited: !0 }
										);
									}
									if (Ee(c))
										{throw ge(400, { type: 'defer-action' });}
									if (xe(c)) {
										const e = ye(s, u.route.id);
										return (
											!0 !== (i && i.replace) &&
												(M = t.Push),
											{
												matches: s,
												pendingActionResult: [
													e.route.id,
													c,
												],
											}
										);
									}
									return {
										matches: s,
										pendingActionResult: [u.route.id, c],
									};
								})(v, s, o.submission, l, d.active, {
									replace: o.replace,
									flushSync: u,
								});
								if (n.shortCircuited) {
									return;
								}
								if (n.pendingActionResult) {
									const [e, t] = n.pendingActionResult;
									if (
										xe(t) &&
										L(t.error) &&
										404 === t.error.status
									) {
										return (
											(T = null),
											void _e(s, {
												matches: n.matches,
												loaderData: {},
												errors: { [e]: t.error },
											})
										);
									}
								}
								(l = n.matches || l),
									(y = n.pendingActionResult),
									(c = Ne(s, o.submission)),
									(u = !1),
									(d.active = !1),
									(v = ue(e.history, v.url, v.signal));
							}
							const {
								shortCircuited: g,
								matches: j,
								loaderData: E,
								errors: P,
							} = await (async function (
								t,
								r,
								n,
								s,
								o,
								i,
								c,
								l,
								u,
								d,
								h
							) {
								const p = o || Ne(r, i),
									f = i || c || Te(p),
									y = !(B || (x.v7_partialHydration && u));
								if (s) {
									if (y) {
										const e = Be(h);
										Fe(
											a(
												{ navigation: p },
												void 0 !== e
													? { actionData: e }
													: {}
											),
											{ flushSync: d }
										);
									}
									const e = await lt(n, r.pathname, t.signal);
									if ('aborted' === e.type)
										{return { shortCircuited: !0 };}
									if ('error' === e.type) {
										const t = ye(e.partialMatches).route.id;
										return {
											matches: e.partialMatches,
											loaderData: {},
											errors: { [t]: e.error },
										};
									}
									if (!e.matches) {
										const {
											error: e,
											notFoundMatches: t,
											route: n,
										} = at(r.pathname);
										return {
											matches: t,
											loaderData: {},
											errors: { [n.id]: e },
										};
									}
									n = e.matches;
								}
								const v = m || w,
									[g, j] = ee(
										e.history,
										A,
										n,
										f,
										r,
										x.v7_partialHydration && !0 === u,
										x.v7_skipActionErrorRevalidation,
										K,
										Z,
										re,
										De,
										Se,
										be,
										v,
										b,
										h
									);
								if (
									(st(
										(e) =>
											!(
												n &&
												n.some((t) => t.route.id === e)
											) ||
											(g &&
												g.some((t) => t.route.id === e))
									),
									(de = ++se),
									0 === g.length && 0 === j.length)
								) {
									const e = Ze();
									return (
										_e(
											r,
											a(
												{
													matches: n,
													loaderData: {},
													errors:
														h && xe(h[1])
															? {
																	[h[0]]: h[1]
																		.error,
																}
															: null,
												},
												me(h),
												e
													? {
															fetchers: new Map(
																A.fetchers
															),
														}
													: {}
											),
											{ flushSync: d }
										),
										{ shortCircuited: !0 }
									);
								}
								if (y) {
									const e = {};
									if (!s) {
										e.navigation = p;
										const t = Be(h);
										void 0 !== t && (e.actionData = t);
									}
									j.length > 0 &&
										(e.fetchers = (function (e) {
											return (
												e.forEach((e) => {
													const t = A.fetchers.get(
															e.key
														),
														r = Ae(
															void 0,
															t ? t.data : void 0
														);
													A.fetchers.set(e.key, r);
												}),
												new Map(A.fetchers)
											);
										})(j)),
										Fe(e, { flushSync: d });
								}
								j.forEach((e) => {
									Xe(e.key),
										e.controller &&
											ne.set(e.key, e.controller);
								});
								const E = () => j.forEach((e) => Xe(e.key));
								T && T.signal.addEventListener('abort', E);
								const { loaderResults: P, fetcherResults: S } =
									await ze(A, n, g, j, t);
								if (t.signal.aborted)
									{return { shortCircuited: !0 };}
								T && T.signal.removeEventListener('abort', E),
									j.forEach((e) => ne.delete(e.key));
								let R = we(P);
								if (R)
									{return (
										await Ke(t, R.result, !0, {
											replace: l,
										}),
										{ shortCircuited: !0 }
									);}
								if (((R = we(S)), R))
									{return (
										be.add(R.key),
										await Ke(t, R.result, !0, {
											replace: l,
										}),
										{ shortCircuited: !0 }
									);}
								let { loaderData: C, errors: q } = pe(
									A,
									n,
									P,
									h,
									j,
									S,
									Ue
								);
								Ue.forEach((e, t) => {
									e.subscribe((r) => {
										(r || e.done) && Ue.delete(t);
									});
								}),
									x.v7_partialHydration &&
										u &&
										A.errors &&
										(q = a({}, A.errors, q));
								const k = Ze(),
									O = et(de),
									D = k || O || j.length > 0;
								return a(
									{ matches: n, loaderData: C, errors: q },
									D ? { fetchers: new Map(A.fetchers) } : {}
								);
							})(
								v,
								s,
								l,
								d.active,
								c,
								o && o.submission,
								o && o.fetcherSubmission,
								o && o.replace,
								o && !0 === o.initialHydration,
								u,
								y
							);
							g ||
								((T = null),
								_e(
									s,
									a({ matches: j || l }, me(y), {
										loaderData: E,
										errors: P,
									})
								));
						}
						function Be(e) {
							return e && !xe(e[1])
								? { [e[0]]: e[1].data }
								: A.actionData
									? 0 === Object.keys(A.actionData).length
										? null
										: A.actionData
									: void 0;
						}
						async function Ke(r, i, l, u) {
							let {
								submission: d,
								fetcherSubmission: h,
								preventScrollReset: p,
								replace: f,
							} = void 0 === u ? {} : u;
							i.response.headers.has('X-Remix-Revalidate') &&
								(K = !0);
							let m = i.response.headers.get('Location');
							s(
								m,
								'Expected a Location header on the redirect Response'
							),
								(m = le(m, new URL(r.url), b));
							const y = c(A.location, m, { _isRedirect: !0 });
							if (o) {
								let t = !1;
								if (
									i.response.headers.has(
										'X-Remix-Reload-Document'
									)
								) {
									t = !0;
								} else if (G.test(m)) {
									const r = e.history.createURL(m);
									t =
										r.origin !== n.location.origin ||
										null == q(r.pathname, b);
								}
								if (t) {
									return void (f
										? n.location.replace(m)
										: n.location.assign(m));
								}
							}
							T = null;
							const v =
									!0 === f ||
									i.response.headers.has('X-Remix-Replace')
										? t.Replace
										: t.Push,
								{
									formMethod: g,
									formAction: w,
									formEncType: j,
								} = A.navigation;
							!d && !h && g && w && j && (d = Te(A.navigation));
							const E = d || h;
							if (
								$.has(i.response.status) &&
								E &&
								Ce(E.formMethod)
							) {
								await Qe(v, y, {
									submission: a({}, E, { formAction: m }),
									preventScrollReset: p || U,
									enableViewTransition: l ? F : void 0,
								});
							} else {
								const e = Ne(y, d);
								await Qe(v, y, {
									overrideNavigation: e,
									fetcherSubmission: h,
									preventScrollReset: p || U,
									enableViewTransition: l ? F : void 0,
								});
							}
						}
						async function $e(e, t, n, o, c, l) {
							let h,
								p = {};
							try {
								h = await (async function (
									e,
									t,
									n,
									o,
									c,
									l,
									u,
									h,
									p,
									f
								) {
									const m = l.map((e) =>
											e.route.lazy
												? (async function (e, t, r) {
														if (!e.lazy) {return;}
														const n = await e.lazy();
														if (!e.lazy) {return;}
														const o = r[e.id];
														s(
															o,
															'No route found in manifest'
														);
														const c = {};
														for (const e in n) {
															const t =
																void 0 !==
																	o[e] &&
																'hasErrorBoundary' !==
																	e;
															i(
																!t,
																'Route "' +
																	o.id +
																	'" has a static property "' +
																	e +
																	'" defined but its lazy function is also returning a value for this property. The lazy route property "' +
																	e +
																	'" will be ignored.'
															),
																t ||
																	d.has(e) ||
																	(c[e] =
																		n[e]);
														}
														Object.assign(o, c),
															Object.assign(
																o,
																a({}, t(o), {
																	lazy: void 0,
																})
															);
													})(e.route, p, h)
												: void 0
										),
										y = l.map((e, n) => {
											let i = m[n],
												l = c.some(
													(t) =>
														t.route.id ===
														e.route.id
												);
											return a({}, e, {
												shouldLoad: l,
												resolve: async (n) => (
													n &&
														'GET' === o.method &&
														(e.route.lazy ||
															e.route.loader) &&
														(l = !0),
													l
														? (async function (
																e,
																t,
																n,
																a,
																o,
																i
															) {
																let c,
																	l,
																	u = (r) => {
																		let a,
																			s =
																				new Promise(
																					(
																						e,
																						t
																					) =>
																						(a =
																							t)
																				);
																		(l =
																			() =>
																				a()),
																			t.signal.addEventListener(
																				'abort',
																				l
																			);
																		const c =
																				(
																					a
																				) =>
																					'function' !=
																					typeof r
																						? Promise.reject(
																								new Error(
																									'You cannot call the handler for a route which defines a boolean "' +
																										e +
																										'" [routeId: ' +
																										n
																											.route
																											.id +
																										']'
																								)
																							)
																						: r(
																								{
																									request:
																										t,
																									params: n.params,
																									context:
																										i,
																								},
																								...(void 0 !==
																								a
																									? [
																											a,
																										]
																									: [])
																							),
																			u =
																				(async () => {
																					try {
																						return {
																							type: 'data',
																							result: await (o
																								? o(
																										(
																											e
																										) =>
																											c(
																												e
																											)
																									)
																								: c()),
																						};
																					} catch (e) {
																						return {
																							type: 'error',
																							result: e,
																						};
																					}
																				})();
																		return Promise.race(
																			[
																				u,
																				s,
																			]
																		);
																	};
																try {
																	let o =
																		n.route[
																			e
																		];
																	if (a)
																		{if (o) {
																			let e,
																				[
																					t,
																				] =
																					await Promise.all(
																						[
																							u(
																								o
																							).catch(
																								(
																									t
																								) => {
																									e =
																										t;
																								}
																							),
																							a,
																						]
																					);
																			if (
																				void 0 !==
																				e
																			)
																				throw e;
																			c =
																				t;
																		} else {
																			if (
																				(await a,
																				(o =
																					n
																						.route[
																						e
																					]),
																				!o)
																			) {
																				if (
																					'action' ===
																					e
																				) {
																					let e =
																							new URL(
																								t.url
																							),
																						r =
																							e.pathname +
																							e.search;
																					throw ge(
																						405,
																						{
																							method: t.method,
																							pathname:
																								r,
																							routeId:
																								n
																									.route
																									.id,
																						}
																					);
																				}
																				return {
																					type: r.data,
																					result: void 0,
																				};
																			}
																			c =
																				await u(
																					o
																				);
																		}}
																	else {
																		if (
																			!o
																		) {
																			const e =
																				new URL(
																					t.url
																				);
																			throw ge(
																				404,
																				{
																					pathname:
																						e.pathname +
																						e.search,
																				}
																			);
																		}
																		c =
																			await u(
																				o
																			);
																	}
																	s(
																		void 0 !==
																			c.result,
																		'You defined ' +
																			('action' ===
																			e
																				? 'an action'
																				: 'a loader') +
																			' for route "' +
																			n
																				.route
																				.id +
																			'" but didn\'t return anything from your `' +
																			e +
																			'` function. Please return a value or `null`.'
																	);
																} catch (e) {
																	return {
																		type: r.error,
																		result: e,
																	};
																} finally {
																	l &&
																		t.signal.removeEventListener(
																			'abort',
																			l
																		);
																}
																return c;
															})(t, o, e, i, n, f)
														: Promise.resolve({
																type: r.data,
																result: void 0,
															})
												),
											});
										}),
										v = await e({
											matches: y,
											request: o,
											params: l[0].params,
											fetcherKey: u,
											context: f,
										});
									try {
										await Promise.all(m);
									} catch (e) {}
									return v;
								})(j, e, 0, n, o, c, l, g, u);
							} catch (e) {
								return (
									o.forEach((t) => {
										p[t.route.id] = {
											type: r.error,
											error: e,
										};
									}),
									p
								);
							}
							for (const [e, t] of Object.entries(h)) {
								if (je(t)) {
									const a = t.result;
									p[e] = {
										type: r.redirect,
										response: ce(
											a,
											n,
											e,
											c,
											b,
											x.v7_relativeSplatPath
										),
									};
								} else {p[e] = await ie(t);}}
							return p;
						}
						async function ze(t, n, a, s, o) {
							const i = t.matches,
								c = $e('loader', 0, o, a, n, null),
								l = Promise.all(
									s.map(async (t) => {
										if (
											t.matches &&
											t.match &&
											t.controller
										) {
											const r = (
												await $e(
													'loader',
													0,
													ue(
														e.history,
														t.path,
														t.controller.signal
													),
													[t.match],
													t.matches,
													t.key
												)
											)[t.match.route.id];
											return { [t.key]: r };
										}
										return Promise.resolve({
											[t.key]: {
												type: r.error,
												error: ge(404, {
													pathname: t.path,
												}),
											},
										});
									})
								),
								u = await c,
								d = (await l).reduce(
									(e, t) => Object.assign(e, t),
									{}
								);
							return (
								await Promise.all([
									qe(n, u, o.signal, i, t.loaderData),
									ke(n, d, s),
								]),
								{ loaderResults: u, fetcherResults: d }
							);
						}
						function He() {
							(K = !0),
								Z.push(...st()),
								Se.forEach((e, t) => {
									ne.has(t) && re.add(t), Xe(t);
								});
						}
						function We(e, t, r) {
							void 0 === r && (r = {}),
								A.fetchers.set(e, t),
								Fe(
									{ fetchers: new Map(A.fetchers) },
									{ flushSync: !0 === (r && r.flushSync) }
								);
						}
						function Ge(e, t, r, n) {
							void 0 === n && (n = {});
							const a = ye(A.matches, t);
							Je(e),
								Fe(
									{
										errors: { [a.route.id]: r },
										fetchers: new Map(A.fetchers),
									},
									{ flushSync: !0 === (n && n.flushSync) }
								);
						}
						function Ve(e) {
							return (
								x.v7_fetcherPersist &&
									(Re.set(e, (Re.get(e) || 0) + 1),
									De.has(e) && De.delete(e)),
								A.fetchers.get(e) || H
							);
						}
						function Je(e) {
							const t = A.fetchers.get(e);
							!ne.has(e) ||
								(t && 'loading' === t.state && he.has(e)) ||
								Xe(e),
								Se.delete(e),
								he.delete(e),
								be.delete(e),
								De.delete(e),
								re.delete(e),
								A.fetchers.delete(e);
						}
						function Xe(e) {
							const t = ne.get(e);
							t && (t.abort(), ne.delete(e));
						}
						function Ye(e) {
							for (const t of e) {
								const e = Me(Ve(t).data);
								A.fetchers.set(t, e);
							}
						}
						function Ze() {
							let e = [],
								t = !1;
							for (const r of be) {
								const n = A.fetchers.get(r);
								s(n, 'Expected fetcher: ' + r),
									'loading' === n.state &&
										(be.delete(r), e.push(r), (t = !0));
							}
							return Ye(e), t;
						}
						function et(e) {
							const t = [];
							for (const [r, n] of he) {
								if (n < e) {
									const e = A.fetchers.get(r);
									s(e, 'Expected fetcher: ' + r),
										'loading' === e.state &&
											(Xe(r), he.delete(r), t.push(r));
								}
							}
							return Ye(t), t.length > 0;
						}
						function tt(e) {
							A.blockers.delete(e), Le.delete(e);
						}
						function rt(e, t) {
							const r = A.blockers.get(e) || W;
							s(
								('unblocked' === r.state &&
									'blocked' === t.state) ||
									('blocked' === r.state &&
										'blocked' === t.state) ||
									('blocked' === r.state &&
										'proceeding' === t.state) ||
									('blocked' === r.state &&
										'unblocked' === t.state) ||
									('proceeding' === r.state &&
										'unblocked' === t.state),
								'Invalid blocker state transition: ' +
									r.state +
									' -> ' +
									t.state
							);
							const n = new Map(A.blockers);
							n.set(e, t), Fe({ blockers: n });
						}
						function nt(e) {
							const {
								currentLocation: t,
								nextLocation: r,
								historyAction: n,
							} = e;
							if (0 === Le.size) {
								return;
							}
							Le.size > 1 &&
								i(
									!1,
									'A router only supports one blocker at a time'
								);
							const a = Array.from(Le.entries()),
								[s, o] = a[a.length - 1],
								c = A.blockers.get(s);
							return c && 'proceeding' === c.state
								? void 0
								: o({
											currentLocation: t,
											nextLocation: r,
											historyAction: n,
									  })
									? s
									: void 0;
						}
						function at(e) {
							const t = ge(404, { pathname: e }),
								r = m || w,
								{ matches: n, route: a } = ve(r);
							return (
								st(), { notFoundMatches: n, route: a, error: t }
							);
						}
						function st(e) {
							const t = [];
							return (
								Ue.forEach((r, n) => {
									(e && !e(n)) ||
										(r.cancel(), t.push(n), Ue.delete(n));
								}),
								t
							);
						}
						function ot(e, t) {
							if (C) {
								const r = C(
									e,
									t.map((e) =>
										(function (e, t) {
											const {
												route: r,
												pathname: n,
												params: a,
											} = e;
											return {
												id: r.id,
												pathname: n,
												params: a,
												data: t[r.id],
												handle: r.handle,
											};
										})(e, A.loaderData)
									)
								);
								return r || e.key;
							}
							return e.key;
						}
						function it(e, t) {
							if (R) {
								const r = ot(e, t),
									n = R[r];
								if ('number' === typeof n) {
									return n;
								}
							}
							return null;
						}
						function ct(e, t, r) {
							if (E) {
								if (!e) {
									return {
										active: !0,
										matches: f(t, r, b, !0) || [],
									};
								}
								if (Object.keys(e[0].params).length > 0) {
									return {
										active: !0,
										matches: f(t, r, b, !0),
									};
								}
							}
							return { active: !1, matches: null };
						}
						async function lt(e, t, r) {
							if (!E) {
								return { type: 'success', matches: e };
							}
							let n = e;
							for (;;) {
								const e = null == m,
									a = m || w,
									s = g;
								try {
									await E({
										path: t,
										matches: n,
										patch: (e, t) => {
											r.aborted || ae(e, t, a, s, u);
										},
									});
								} catch (e) {
									return {
										type: 'error',
										error: e,
										partialMatches: n,
									};
								} finally {
									e && !r.aborted && (w = [...w]);
								}
								if (r.aborted) {
									return { type: 'aborted' };
								}
								const o = p(a, t, b);
								if (o) {
									return { type: 'success', matches: o };
								}
								const i = f(a, t, b, !0);
								if (
									!i ||
									(n.length === i.length &&
										n.every(
											(e, t) =>
												e.route.id === i[t].route.id
										))
								) {
									return { type: 'success', matches: null };
								}
								n = i;
							}
						}
						return (
							(v = {
								get basename() {
									return b;
								},
								get future() {
									return x;
								},
								get state() {
									return A;
								},
								get routes() {
									return w;
								},
								get window() {
									return n;
								},
								initialize() {
									if (
										((P = e.history.listen((t) => {
											const {
												action: r,
												location: n,
												delta: a,
											} = t;
											if (N)
												{return N(), void (N = void 0);}
											i(
												0 === Le.size || null != a,
												'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
											);
											const s = nt({
												currentLocation: A.location,
												nextLocation: n,
												historyAction: r,
											});
											if (s && null != a) {
												const t = new Promise((e) => {
													N = e;
												});
												return (
													e.history.go(-1 * a),
													void rt(s, {
														state: 'blocked',
														location: n,
														proceed() {
															rt(s, {
																state: 'proceeding',
																proceed: void 0,
																reset: void 0,
																location: n,
															}),
																t.then(() =>
																	e.history.go(
																		a
																	)
																);
														},
														reset() {
															const e = new Map(
																A.blockers
															);
															e.set(s, W),
																Fe({
																	blockers: e,
																});
														},
													})
												);
											}
											return Qe(r, n);
										})),
										o)
									) {
										!(function (e, t) {
											try {
												const r =
													e.sessionStorage.getItem(J);
												if (r) {
													const e = JSON.parse(r);
													for (const [
														r,
														n,
													] of Object.entries(
														e || {}
													))
														{n &&
															Array.isArray(n) &&
															t.set(
																r,
																new Set(n || [])
															);}
												}
											} catch (e) {}
										})(n, _);
										const e = () =>
											(function (e, t) {
												if (t.size > 0) {
													let r = {};
													for (let [e, n] of t)
														r[e] = [...n];
													try {
														e.sessionStorage.setItem(
															J,
															JSON.stringify(r)
														);
													} catch (e) {
														i(
															!1,
															'Failed to save applied view transitions in sessionStorage (' +
																e +
																').'
														);
													}
												}
											})(n, _);
										n.addEventListener('pagehide', e),
											(Q = () =>
												n.removeEventListener(
													'pagehide',
													e
												));
									}
									return (
										A.initialized ||
											Qe(t.Pop, A.location, {
												initialHydration: !0,
											}),
										v
									);
								},
								subscribe(e) {
									return S.add(e), () => S.delete(e);
								},
								enableScrollRestoration(e, t, r) {
									if (
										((R = e),
										(k = t),
										(C = r || null),
										!O && A.navigation === z)
									) {
										O = !0;
										const e = it(A.location, A.matches);
										null != e &&
											Fe({ restoreScrollPosition: e });
									}
									return () => {
										(R = null), (k = null), (C = null);
									};
								},
								navigate: async function r(n, s) {
									if ('number' === typeof n) {
										return void e.history.go(n);
									}
									let o = X(
											A.location,
											A.matches,
											b,
											x.v7_prependBasename,
											n,
											x.v7_relativeSplatPath,
											null == s ? void 0 : s.fromRouteId,
											null == s ? void 0 : s.relative
										),
										{
											path: i,
											submission: l,
											error: u,
										} = Y(
											x.v7_normalizeFormMethod,
											!1,
											o,
											s
										),
										d = A.location,
										h = c(A.location, i, s && s.state);
									h = a({}, h, e.history.encodeLocation(h));
									let p =
											s && null != s.replace
												? s.replace
												: void 0,
										f = t.Push;
									!0 === p
										? (f = t.Replace)
										: !1 === p ||
											(null != l &&
												Ce(l.formMethod) &&
												l.formAction ===
													A.location.pathname +
														A.location.search &&
												(f = t.Replace));
									const m =
											s && 'preventScrollReset' in s
												? !0 === s.preventScrollReset
												: void 0,
										y = !0 === (s && s.flushSync),
										v = nt({
											currentLocation: d,
											nextLocation: h,
											historyAction: f,
										});
									if (!v) {
										return await Qe(f, h, {
											submission: l,
											pendingError: u,
											preventScrollReset: m,
											replace: s && s.replace,
											enableViewTransition:
												s && s.viewTransition,
											flushSync: y,
										});
									}
									rt(v, {
										state: 'blocked',
										location: h,
										proceed() {
											rt(v, {
												state: 'proceeding',
												proceed: void 0,
												reset: void 0,
												location: h,
											}),
												r(n, s);
										},
										reset() {
											const e = new Map(A.blockers);
											e.set(v, W), Fe({ blockers: e });
										},
									});
								},
								fetch(t, r, n, a) {
									if (l)
										{throw new Error(
											"router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
										);}
									Xe(t);
									let o = !0 === (a && a.flushSync),
										i = m || w,
										c = X(
											A.location,
											A.matches,
											b,
											x.v7_prependBasename,
											n,
											x.v7_relativeSplatPath,
											r,
											null == a ? void 0 : a.relative
										),
										u = p(i, c, b),
										d = ct(u, i, c);
									if (
										(d.active &&
											d.matches &&
											(u = d.matches),
										!u)
									)
										{return void Ge(
											t,
											r,
											ge(404, { pathname: c }),
											{ flushSync: o }
										);}
									const {
										path: h,
										submission: f,
										error: y,
									} = Y(x.v7_normalizeFormMethod, !0, c, a);
									if (y)
										{return void Ge(t, r, y, {
											flushSync: o,
										});}
									const v = Ie(u, h),
										g = !0 === (a && a.preventScrollReset);
									f && Ce(f.formMethod)
										? (async function (
												t,
												r,
												n,
												a,
												o,
												i,
												c,
												l,
												u
											) {
												function d(e) {
													if (
														!e.route.action &&
														!e.route.lazy
													) {
														const e = ge(405, {
															method: u.formMethod,
															pathname: n,
															routeId: r,
														});
														return (
															Ge(t, r, e, {
																flushSync: c,
															}),
															!0
														);
													}
													return !1;
												}
												if (
													(He(),
													Se.delete(t),
													!i && d(a))
												)
													{return;}
												const h = A.fetchers.get(t);
												We(
													t,
													(function (e, t) {
														return {
															state: 'submitting',
															formMethod:
																e.formMethod,
															formAction:
																e.formAction,
															formEncType:
																e.formEncType,
															formData:
																e.formData,
															json: e.json,
															text: e.text,
															data: t
																? t.data
																: void 0,
														};
													})(u, h),
													{ flushSync: c }
												);
												const f = new AbortController(),
													y = ue(
														e.history,
														n,
														f.signal,
														u
													);
												if (i) {
													const e = await lt(
														o,
														n,
														y.signal
													);
													if ('aborted' === e.type)
														{return;}
													if ('error' === e.type)
														{return void Ge(
															t,
															r,
															e.error,
															{ flushSync: c }
														);}
													if (!e.matches)
														{return void Ge(
															t,
															r,
															ge(404, {
																pathname: n,
															}),
															{ flushSync: c }
														);}
													if (
														d(
															(a = Ie(
																(o = e.matches),
																n
															))
														)
													)
														{return;}
												}
												ne.set(t, f);
												const v = se,
													g = (
														await $e(
															'action',
															0,
															y,
															[a],
															o,
															t
														)
													)[a.route.id];
												if (y.signal.aborted)
													{return void (
														ne.get(t) === f &&
														ne.delete(t)
													);}
												if (
													x.v7_fetcherPersist &&
													De.has(t)
												) {
													if (Pe(g) || xe(g))
														{return void We(
															t,
															Me(void 0)
														);}
												} else {
													if (Pe(g))
														{return (
															ne.delete(t),
															de > v
																? void We(
																		t,
																		Me(
																			void 0
																		)
																	)
																: (be.add(t),
																	We(
																		t,
																		Ae(u)
																	),
																	Ke(
																		y,
																		g,
																		!1,
																		{
																			fetcherSubmission:
																				u,
																			preventScrollReset:
																				l,
																		}
																	))
														);}
													if (xe(g))
														{return void Ge(
															t,
															r,
															g.error
														);}
												}
												if (Ee(g))
													{throw ge(400, {
														type: 'defer-action',
													});}
												const j =
														A.navigation.location ||
														A.location,
													E = ue(
														e.history,
														j,
														f.signal
													),
													P = m || w,
													S =
														'idle' !==
														A.navigation.state
															? p(
																	P,
																	A.navigation
																		.location,
																	b
																)
															: A.matches;
												s(
													S,
													"Didn't find any matches after fetcher action"
												);
												const R = ++se;
												he.set(t, R);
												const C = Ae(u, g.data);
												A.fetchers.set(t, C);
												const [q, k] = ee(
													e.history,
													A,
													S,
													u,
													j,
													!1,
													x.v7_skipActionErrorRevalidation,
													K,
													Z,
													re,
													De,
													Se,
													be,
													P,
													b,
													[a.route.id, g]
												);
												k
													.filter((e) => e.key !== t)
													.forEach((e) => {
														const t = e.key,
															r =
																A.fetchers.get(
																	t
																),
															n = Ae(
																void 0,
																r
																	? r.data
																	: void 0
															);
														A.fetchers.set(t, n),
															Xe(t),
															e.controller &&
																ne.set(
																	t,
																	e.controller
																);
													}),
													Fe({
														fetchers: new Map(
															A.fetchers
														),
													});
												const O = () =>
													k.forEach((e) => Xe(e.key));
												f.signal.addEventListener(
													'abort',
													O
												);
												const {
													loaderResults: D,
													fetcherResults: I,
												} = await ze(A, S, q, k, E);
												if (f.signal.aborted) {return;}
												f.signal.removeEventListener(
													'abort',
													O
												),
													he.delete(t),
													ne.delete(t),
													k.forEach((e) =>
														ne.delete(e.key)
													);
												let N = we(D);
												if (N)
													{return Ke(E, N.result, !1, {
														preventScrollReset: l,
													});}
												if (((N = we(I)), N))
													{return (
														be.add(N.key),
														Ke(E, N.result, !1, {
															preventScrollReset:
																l,
														})
													);}
												const {
													loaderData: U,
													errors: L,
												} = pe(
													A,
													S,
													D,
													void 0,
													k,
													I,
													Ue
												);
												if (A.fetchers.has(t)) {
													const e = Me(g.data);
													A.fetchers.set(t, e);
												}
												et(R),
													'loading' ===
														A.navigation.state &&
													R > de
														? (s(
																M,
																'Expected pending action'
															),
															T && T.abort(),
															_e(
																A.navigation
																	.location,
																{
																	matches: S,
																	loaderData:
																		U,
																	errors: L,
																	fetchers:
																		new Map(
																			A.fetchers
																		),
																}
															))
														: (Fe({
																errors: L,
																loaderData: fe(
																	A.loaderData,
																	U,
																	S,
																	L
																),
																fetchers:
																	new Map(
																		A.fetchers
																	),
															}),
															(K = !1));
											})(t, r, h, v, u, d.active, o, g, f)
										: (Se.set(t, { routeId: r, path: h }),
											(async function (
												t,
												r,
												n,
												a,
												o,
												i,
												c,
												l,
												u
											) {
												const d = A.fetchers.get(t);
												We(
													t,
													Ae(u, d ? d.data : void 0),
													{ flushSync: c }
												);
												const h = new AbortController(),
													p = ue(
														e.history,
														n,
														h.signal
													);
												if (i) {
													const e = await lt(
														o,
														n,
														p.signal
													);
													if ('aborted' === e.type)
														{return;}
													if ('error' === e.type)
														{return void Ge(
															t,
															r,
															e.error,
															{ flushSync: c }
														);}
													if (!e.matches)
														{return void Ge(
															t,
															r,
															ge(404, {
																pathname: n,
															}),
															{ flushSync: c }
														);}
													a = Ie((o = e.matches), n);
												}
												ne.set(t, h);
												let f = se,
													m = (
														await $e(
															'loader',
															0,
															p,
															[a],
															o,
															t
														)
													)[a.route.id];
												if (
													(Ee(m) &&
														(m =
															(await Oe(
																m,
																p.signal,
																!0
															)) || m),
													ne.get(t) === h &&
														ne.delete(t),
													!p.signal.aborted)
												) {
													if (!De.has(t))
														{return Pe(m)
															? de > f
																? void We(
																		t,
																		Me(
																			void 0
																		)
																	)
																: (be.add(t),
																	void (await Ke(
																		p,
																		m,
																		!1,
																		{
																			preventScrollReset:
																				l,
																		}
																	)))
															: void (xe(m)
																	? Ge(
																			t,
																			r,
																			m.error
																		)
																	: (s(
																			!Ee(
																				m
																			),
																			'Unhandled fetcher deferred data'
																		),
																		We(
																			t,
																			Me(
																				m.data
																			)
																		)));}
													We(t, Me(void 0));
												}
											})(
												t,
												r,
												h,
												v,
												u,
												d.active,
												o,
												g,
												f
											));
								},
								revalidate() {
									He(),
										Fe({ revalidation: 'loading' }),
										'submitting' !== A.navigation.state &&
											('idle' !== A.navigation.state
												? Qe(
														M || A.historyAction,
														A.navigation.location,
														{
															overrideNavigation:
																A.navigation,
															enableViewTransition:
																!0 === F,
														}
													)
												: Qe(
														A.historyAction,
														A.location,
														{
															startUninterruptedRevalidation:
																!0,
														}
													));
								},
								createHref: (t) => e.history.createHref(t),
								encodeLocation: (t) =>
									e.history.encodeLocation(t),
								getFetcher: Ve,
								deleteFetcher(e) {
									if (x.v7_fetcherPersist) {
										const t = (Re.get(e) || 0) - 1;
										t <= 0
											? (Re.delete(e), De.add(e))
											: Re.set(e, t);
									} else {Je(e);}
									Fe({ fetchers: new Map(A.fetchers) });
								},
								dispose() {
									P && P(),
										Q && Q(),
										S.clear(),
										T && T.abort(),
										A.fetchers.forEach((e, t) => Je(t)),
										A.blockers.forEach((e, t) => tt(t));
								},
								getBlocker(e, t) {
									const r = A.blockers.get(e) || W;
									return Le.get(e) !== t && Le.set(e, t), r;
								},
								deleteBlocker: tt,
								patchRoutes(e, t) {
									const r = null == m;
									ae(e, t, m || w, g, u),
										r && ((w = [...w]), Fe({}));
								},
								_internalFetchControllers: ne,
								_internalActiveDeferreds: Ue,
								_internalSetRoutes(e) {
									(g = {}), (m = h(e, u, void 0, g));
								},
							}),
							v
						);
					})({
						basename:
							null ==
							(vo = {
								initialEntries: ['/', '/orders'],
								initialIndex: 0,
							})
								? void 0
								: vo.basename,
						future: Ue({}, null == vo ? void 0 : vo.future, {
							v7_prependBasename: !0,
						}),
						history: (function (e) {
							void 0 === e && (e = {});
							let r,
								{
									initialEntries: n = ['/'],
									initialIndex: a,
									v5Compat: s = !1,
								} = e;
							r = n.map((e, t) =>
								m(
									e,
									'string' === typeof e ? null : e.state,
									0 === t ? 'default' : void 0
								)
							);
							let o = p(null == a ? r.length - 1 : a),
								d = t.Pop,
								h = null;
							function p(e) {
								return Math.min(Math.max(e, 0), r.length - 1);
							}
							function f() {
								return r[o];
							}
							function m(e, t, n) {
								void 0 === t && (t = null);
								const a = c(r ? f().pathname : '/', e, t, n);
								return (
									i(
										'/' === a.pathname.charAt(0),
										'relative pathnames are not supported in memory history: ' +
											JSON.stringify(e)
									),
									a
								);
							}
							function y(e) {
								return 'string' === typeof e ? e : l(e);
							}
							return {
								get index() {
									return o;
								},
								get action() {
									return d;
								},
								get location() {
									return f();
								},
								createHref: y,
								createURL: (e) =>
									new URL(y(e), 'http://localhost'),
								encodeLocation(e) {
									const t = 'string' === typeof e ? u(e) : e;
									return {
										pathname: t.pathname || '',
										search: t.search || '',
										hash: t.hash || '',
									};
								},
								push(e, n) {
									d = t.Push;
									const a = m(e, n);
									(o += 1),
										r.splice(o, r.length, a),
										s &&
											h &&
											h({
												action: d,
												location: a,
												delta: 1,
											});
								},
								replace(e, n) {
									d = t.Replace;
									const a = m(e, n);
									(r[o] = a),
										s &&
											h &&
											h({
												action: d,
												location: a,
												delta: 0,
											});
								},
								go(e) {
									d = t.Pop;
									const n = p(o + e),
										a = r[n];
									(o = n),
										h &&
											h({
												action: d,
												location: a,
												delta: e,
											});
								},
								listen: (e) => (
									(h = e),
									() => {
										h = null;
									}
								),
							};
						})({
							initialEntries:
								null == vo ? void 0 : vo.initialEntries,
							initialIndex: null == vo ? void 0 : vo.initialIndex,
						}),
						hydrationData: null == vo ? void 0 : vo.hydrationData,
						routes: yo,
						mapRouteProperties(t) {
							const r = {
								hasErrorBoundary:
									null != t.ErrorBoundary ||
									null != t.errorElement,
							};
							return (
								t.Component &&
									Object.assign(r, {
										element: e.createElement(t.Component),
										Component: void 0,
									}),
								t.HydrateFallback &&
									Object.assign(r, {
										hydrateFallbackElement: e.createElement(
											t.HydrateFallback
										),
										HydrateFallback: void 0,
									}),
								t.ErrorBoundary &&
									Object.assign(r, {
										errorElement: e.createElement(
											t.ErrorBoundary
										),
										ErrorBoundary: void 0,
									}),
								r
							);
						},
						dataStrategy: null == vo ? void 0 : vo.dataStrategy,
						patchRoutesOnNavigation:
							null == vo ? void 0 : vo.patchRoutesOnNavigation,
					}).initialize());
			let yo, vo;
			const go = document.body.appendChild(document.createElement('div'));
			document.body.classList.add('search-buddy-panel-container'),
				(0, bt.createRoot)(go).render(
					(0, ys.jsx)(bt.StrictMode, {
						children: (0, ys.jsx)(Bs, {
							value: window.searchBuddy,
							children: (0, ys.jsx)(gs, {
								client: fo,
								children: (0, ys.jsx)(ft, { router: mo }),
							}),
						}),
					})
				);
		})();
})();
