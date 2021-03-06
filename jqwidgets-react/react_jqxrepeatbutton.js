/*
jQWidgets v6.0.6 (2018-August)
Copyright (c) 2011-2018 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxbuttons.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxRepeatButton extends React.Component {
    componentDidMount() {
        let options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        let properties = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];
        let options = {};
        for(let item in this.props) {
              if(item === 'settings') {
                  for(let itemTwo in this.props[item]) {
                      options[itemTwo] = this.props[item][itemTwo];
                      }
                } else {
                      if(properties.indexOf(item) !== -1) {
                        options[item] = this.props[item];
                      }
                }
          }
          return options;
      };
    createComponent(options) {
        if(!this.style) {
              for (let style in this.props.style) {
                  JQXLite(this.componentSelector).css(style, this.props.style[style]);
              }
        }
        if(this.props.className !== undefined) {
            let classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
              JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxRepeatButton(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxRepeatButton('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxRepeatButton(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    delay(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('delay', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('delay');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('disabled');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('height');
        }
    };
    imgSrc(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('imgSrc', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('imgSrc');
        }
    };
    imgWidth(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('imgWidth', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('imgWidth');
        }
    };
    imgHeight(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('imgHeight', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('imgHeight');
        }
    };
    imgPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('imgPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('imgPosition');
        }
    };
    roundedCorners(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('roundedCorners', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('roundedCorners');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('rtl');
        }
    };
    textPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('textPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('textPosition');
        }
    };
    textImageRelation(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('textImageRelation', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('textImageRelation');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('theme');
        }
    };
    template(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('template', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('template');
        }
    };
    toggled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('toggled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('toggled');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('width');
        }
    };
    value(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('value', arg)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('value');
        }
    };
    check() {
        JQXLite(this.componentSelector).jqxRepeatButton('check');  
    };
    destroy() {
        JQXLite(this.componentSelector).jqxRepeatButton('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxRepeatButton('focus');  
    };
    performRender() {
        JQXLite(this.componentSelector).jqxRepeatButton('render');
    };
    toggle() {
        JQXLite(this.componentSelector).jqxRepeatButton('toggle');  
    };
    unCheck() {
        JQXLite(this.componentSelector).jqxRepeatButton('unCheck');  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxRepeatButton('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxRepeatButton('val');
        }
    };

    render() {
        let id = 'jqxRepeatButton' + JQXLite.generateID();
        this.componentSelector = '#' + id;
        return (
            <div id={id}>{this.props.value}{this.props.children}</div>
        )
    };
};

