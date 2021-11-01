import React from 'react';
import {
  FlexView,
  StyledBadge,
  StyledImage,
  StyledText,
} from '../../styles/stheme';

interface ProductItemProps {
  product: any;
}

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <>
      {product && (
        <FlexView
          type="col"
          style={{
            width: 180,
            marginBottom: 45,
          }}>
          <StyledImage
            size="product"
            resize="contain"
            source={{
              uri: product.rep_img_url,
            }}
            style={{
              marginBottom: 12,
            }}
          />

          <StyledText
            font="b10"
            style={{
              marginBottom: 5,
            }}>
            {product.brand_name}
          </StyledText>
          <StyledText
            font="10"
            style={{
              marginBottom: 10,
            }}>
            {product.title}
          </StyledText>
          <StyledText
            font="10"
            color="gray182"
            style={{
              textDecorationLine: 'line-through',
              marginBottom: 5,
            }}>
            {product.original_price}
          </StyledText>
          <FlexView
            type="row"
            style={{
              marginBottom: 15,
            }}>
            <StyledText
              font="10"
              color="red232"
              style={{
                marginRight: 5,
              }}>
              {product.price}
            </StyledText>
            <StyledText font="10">
              {Math.round((product.price / product.original_price) * 100)}%
            </StyledText>
          </FlexView>
          <FlexView type="row">
            {product.season != '' && (
              <StyledBadge type="season" first>
                {product.season}
              </StyledBadge>
            )}
            {product.flag.preorder === true && (
              <StyledBadge type="preorder">프리오더</StyledBadge>
            )}
            {product.flag.sale === true && (
              <StyledBadge type="sale">빠른배송</StyledBadge>
            )}
            {product.flag.today === true && (
              <StyledBadge type="today">당일배송</StyledBadge>
            )}
            {product.flag.kids === true && (
              <StyledBadge type="kids">키즈</StyledBadge>
            )}
          </FlexView>
        </FlexView>
      )}
    </>
  );
};

export default ProductItem;
