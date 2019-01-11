import postcss from 'postcss';

export default postcss.plugin('postcss-list-style-safari-fix', () => root => {
	root.walkDecls(listStyleRegExp, decl => {
		if (isListStyleNone(decl)) {
			if (hasNoListStyleImageSibling(decl)) {
				if (isListStyleType(decl)) {
					decl.prop = decl.prop.replace(listStyleRegExp, '$1');
				}

				decl.value = patchedNoneValue;
			} else {
				decl.remove();
			}
		}
	})
});

const listStyleRegExp = /^(list-style)(-type)?$/i;
const listStyleTypeRegExp = /^list-style-type$/i;
const listStyleImageRegExp = /^list-style-image$/i;
const noneRegExp = /^none$/i;
const patchedNoneValue = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E")';

const isListStyleNone = decl => noneRegExp.test(decl.value);
const isListStyleImage = decl => listStyleImageRegExp.test(decl.prop);
const isListStyleType = decl => listStyleTypeRegExp.test(decl.prop);
const hasNoListStyleImageSibling = decl => Object(decl.parent).nodes && !decl.parent.nodes.find(child => isListStyleImage(child));
