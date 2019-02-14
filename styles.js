import styled from 'styled-components';

export const Label = styled.Text`
  color: #595856;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto';
  margin: 18px 0 9px 0;
`;

export const LoginWrapper = styled.ScrollView`
  background-color: #b3ffcc;
  display: flex;
  flex-direction: column;
  padding: 18px;
`;

export const Wrapper = styled.ScrollView`
  background-color: #b3ffcc;
  display: flex;
  flex-direction: column;
  padding: 9px 0;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  font-size: 24px;
  padding: 9px 18px;
  min-width: 75%;
`;

export const NumericInput = styled.TextInput`
  text-align: center;
  background-color: #fff;
  font-size: 18px;
  padding: 3px 0;
  width: 15%;
`;

export const LoginButton = styled.TouchableHighlight`
  align-items: center;
  background-color: #0099cc;
  justify-content: center;
  margin-top: 36px;
  padding: 18px;
`;

export const FlexText = styled.Text`
  align-items: center;
  background-color: #fff;
  ${({flex}) => flex && `flex: ${flex}`}
  font-size: 18px;
  font-family: Roboto;
  padding: 9px;
  ${({align}) => align && `text-align: ${align}`}
`;

export const PlainText = styled.Text`
  font-size: 18px;
  font-family: Roboto;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: Roboto;
`;

export const ItemText = styled.Text`
  font-size: 18px;
  justify-content: center;
  ${({ completed }) => {
    return completed && 'textDecorationLine: line-through;'
  }}
`;

export const Title = styled.Text`
  color: #595856;
  text-align: center;
  font-size: 36px;
  margin: 18px 0;
`;

export const Form = styled.View`
  flexDirection: row;
  padding: 18px 9px;
`;

export const CustomButton = styled.TouchableHighlight`
  align-items: center;
  background-color: ${({color}) => color};
  ${({flex}) => flex && `flex: ${flex}`}
  justify-content: center;
  padding: 9px;
`;

export const Container = styled.View`
  alignItems: stretch;
  border-bottom-color: #000;
  border-bottom-width: 1;
  flexDirection: row;
  ${({ index }) => !index && 'border-top-color: #000; border-top-width: 1;'}
`;

export const CostContainer = styled.View`
  align-items: center;
  flexDirection: row-reverse;
  margin: 9px;
`;

export const FilterBox = styled.TouchableHighlight`
  align-items: center;
  background-color: ${({ isActive }) => isActive ? '#ccc': '#fff'};
  flex: 1;
  justify-content: center;
  padding: 15px 20px;
`;
