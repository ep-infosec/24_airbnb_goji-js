import { getIds } from '../../helpers/ids';
import { t } from '../../helpers/t';

// FIXME: should remove `text` node generated by `components` later
// FIXME: how to handle more depth of `text` ?
// FIXME: refactor these lines for better readable
export const FlattenText = () => {
  const ids = getIds();

  return t`
    <text wx:elif="{{${ids.meta}.${ids.type} === 'text'}}" data-goji-id="{{${ids.meta}.${ids.gojiId} || -1}}" id="{{${ids.meta}.${ids.props}.id}}" class="{{${ids.meta}.${ids.props}.className}}" style="{{${ids.meta}.${ids.props}.style || ''}}" selectable="{{${ids.meta}.${ids.props}.selectable}}" space="{{${ids.meta}.${ids.props}.space}}" decode="{{${ids.meta}.${ids.props}.decode}}" bindtouchstart="e" bindtouchmove="e" bindtouchcancel="e" bindtouchend="e" bindtap="e" bindlongpress="e" bindlongtap="e" bindtransitionend="e" bindanimationstart="e" bindanimationiteration="e" bindanimationend="e" bindtouchforcechange="e">
      <block wx:for="{{${ids.meta}.${ids.children}}}" wx:key="${ids.gojiId}">
        <block wx:if="{{item.${ids.type} === 'GOJI_TYPE_TEXT'}}">{{item.text}}</block>
        <text wx:elif="item.${ids.type} === 'text'" data-goji-id="{{item.${ids.gojiId} || -1}}" id="{{${ids.meta}.${ids.props}.id}}" class="{{item.${ids.props}.className}}" style="{{item.${ids.props}.style || ''}}" selectable="{{item.${ids.props}.selectable}}" space="{{item.${ids.props}.space}}" decode="{{item.${ids.props}.decode}}" bindtouchstart="e" bindtouchmove="e" bindtouchcancel="e" bindtouchend="e" bindtap="e" bindlongpress="e" bindlongtap="e" bindtransitionend="e" bindanimationstart="e" bindanimationiteration="e" bindanimationend="e" bindtouchforcechange="e">
          <block wx:for="{{item.${ids.children}}}" wx:key="${ids.gojiId}">
            <block wx:if="{{item.${ids.type} === 'GOJI_TYPE_TEXT'}}">{{item.text}}</block>
            <text wx:elif="item.${ids.type} === 'text'" data-goji-id="{{item.${ids.gojiId} || -1}}" id="{{${ids.meta}.${ids.props}.id}}" class="{{item.${ids.props}.className}}" style="{{item.${ids.props}.style || ''}}" selectable="{{item.${ids.props}.selectable}}" space="{{item.${ids.props}.space}}" decode="{{item.${ids.props}.decode}}" bindtouchstart="e" bindtouchmove="e" bindtouchcancel="e" bindtouchend="e" bindtap="e" bindlongpress="e" bindlongtap="e" bindtransitionend="e" bindanimationstart="e" bindanimationiteration="e" bindanimationend="e" bindtouchforcechange="e">
              <block wx:for="{{item.${ids.children}}}" wx:key="${ids.gojiId}">
                <block wx:if="{{item.${ids.type} === 'GOJI_TYPE_TEXT'}}">{{item.text}}</block>
                <text wx:elif="item.${ids.type} === 'text'" data-goji-id="{{item.${ids.gojiId} || -1}}" id="{{${ids.meta}.${ids.props}.id}}" class="{{item.${ids.props}.className}}" style="{{item.${ids.props}.style || ''}}" selectable="{{item.${ids.props}.selectable}}" space="{{item.${ids.props}.space}}" decode="{{item.${ids.props}.decode}}" bindtouchstart="e" bindtouchmove="e" bindtouchcancel="e" bindtouchend="e" bindtap="e" bindlongpress="e" bindlongtap="e" bindtransitionend="e" bindanimationstart="e" bindanimationiteration="e" bindanimationend="e" bindtouchforcechange="e">
                  <block wx:for="{{item.${ids.children}}}" wx:key="${ids.gojiId}">
                    <block wx:if="{{item.${ids.type} === 'GOJI_TYPE_TEXT'}}">{{item.text}}</block>
                    <text wx:elif="item.${ids.type} === 'text'" data-goji-id="{{item.${ids.gojiId} || -1}}" id="{{${ids.meta}.${ids.props}.id}}" class="{{item.${ids.props}.className}}" style="{{item.${ids.props}.style || ''}}" selectable="{{item.${ids.props}.selectable}}" space="{{item.${ids.props}.space}}" decode="{{item.${ids.props}.decode}}" bindtouchstart="e" bindtouchmove="e" bindtouchcancel="e" bindtouchend="e" bindtap="e" bindlongpress="e" bindlongtap="e" bindtransitionend="e" bindanimationstart="e" bindanimationiteration="e" bindanimationend="e" bindtouchforcechange="e">
                      <block wx:for="{{item.${ids.children}}}" wx:key="${ids.gojiId}">
                        <block wx:if="{{item.${ids.type} === 'GOJI_TYPE_TEXT'}}">{{item.text}}</block>
                        <text wx:elif="item.${ids.type} === 'text'" data-goji-id="{{item.${ids.gojiId} || -1}}" id="{{${ids.meta}.${ids.props}.id}}" class="{{item.${ids.props}.className}}" style="{{item.${ids.props}.style || ''}}" selectable="{{item.${ids.props}.selectable}}" space="{{item.${ids.props}.space}}" decode="{{item.${ids.props}.decode}}" bindtouchstart="e" bindtouchmove="e" bindtouchcancel="e" bindtouchend="e" bindtap="e" bindlongpress="e" bindlongtap="e" bindtransitionend="e" bindanimationstart="e" bindanimationiteration="e" bindanimationend="e" bindtouchforcechange="e">
                          <block wx:for="{{item.${ids.children}}}" wx:key="${ids.gojiId}">
                            <block wx:if="{{item.${ids.type} === 'GOJI_TYPE_TEXT'}}">{{item.text}}</block>
                            <text wx:elif="item.${ids.type} === 'text'" data-goji-id="{{item.${ids.gojiId} || -1}}" id="{{${ids.meta}.${ids.props}.id}}" class="{{item.${ids.props}.className}}" style="{{item.${ids.props}.style || ''}}" selectable="{{item.${ids.props}.selectable}}" space="{{item.${ids.props}.space}}" decode="{{item.${ids.props}.decode}}" bindtouchstart="e" bindtouchmove="e" bindtouchcancel="e" bindtouchend="e" bindtap="e" bindlongpress="e" bindlongtap="e" bindtransitionend="e" bindanimationstart="e" bindanimationiteration="e" bindanimationend="e" bindtouchforcechange="e"></text>
                          </block>
                        </text>
                      </block>
                    </text>
                  </block>
                </text>
              </block>
            </text>
          </block>
        </text>
      </block>
    </text>
  `;
};

// FIXME: should remove \`swiper\` and \`swiper-item\` node generated by \`components\` later
export const FlattenSwiper = () => {
  const ids = getIds();

  return t`
    <block wx:elif="{{${ids.meta}.${ids.type} === 'swiper'}}">
      <swiper
        data-goji-id="{{${ids.meta}.${ids.gojiId} || -1}}"
        id="{{${ids.meta}.${ids.props}.id}}"
        class="{{${ids.meta}.${ids.props}.className}}"
        style="{{${ids.meta}.${ids.props}.style || ''}}"
        indicator-dots="{{${ids.meta}.${ids.props}.indicatorDots}}"
        indicator-color="{{${ids.meta}.${ids.props}.indicatorColor || 'rgba(0,0,0,.3)'}}"
        indicator-active-color="{{${ids.meta}.${ids.props}.indicatorActiveColor || '#000000'}}"
        autoplay="{{${ids.meta}.${ids.props}.autoplay}}"
        current="{{${ids.meta}.${ids.props}.current}}"
        interval="{{${ids.meta}.${ids.props}.interval === undefined ? 5000 : props.interval }}"
        duration="{{${ids.meta}.${ids.props}.duration === undefined ? 500 : props.duration }}"
        circular="{{${ids.meta}.${ids.props}.circular}}"
        vertical="{{${ids.meta}.${ids.props}.vertical}}"
        previous-margin="{{${ids.meta}.${ids.props}.previousMargin || '0px'}}"
        next-margin="{{${ids.meta}.${ids.props}.nextMargin || '0px'}}"
        display-multiple-items="{{${ids.meta}.${ids.props}.displayMultipleItems === undefined ? 1 : props.displayMultipleItems }}"
        skip-hidden-item-layout="{{${ids.meta}.${ids.props}.skipHiddenItemLayout}}"
        easing-function="{{${ids.meta}.${ids.props}.easingFunction || 'default'}}"
        onChange="e"
        onTransition="e"
        onAnimationfinish="e"
        onTouchstart="e"
        onTouchmove="e"
        onTouchcancel="e"
        onTouchend="e"
        onTap="e"
        onLongpress="e"
        onLongtap="e"
        onTransitionend="e"
        onAnimationstart="e"
        onAnimationiteration="e"
        onAnimationend="e"
        onTouchforcechange="e"
      >
        <block wx:for="{{${ids.meta}.${ids.children}}}" wx:key="${ids.gojiId}">
          <swiper-item>
            <block wx:for="{{item.${ids.children}}}" wx:key="${ids.gojiId}">
              <template is="$$GOJI_COMPONENT0" data="{{ ${ids.meta}: item }}" />
            </block>
          </swiper-item>
        </block>
      </swiper>
    </block>
  `;
};
