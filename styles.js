import styled from 'styled-components';


export const LoginWrapper = styled.ScrollView`
  background-color: #caf;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 36px 24px;
`;

export const ScrollWrapper = styled.ScrollView`
  background-color: #caf;
  display: flex;
  flex-direction: column;
`;

export const StaticWrapper = styled.View`
  background-color: #caf;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BandContainer = styled.View`
  background-color: #09c;
  padding: 21px 6px 6px 6px;
`;

export const BandText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-style: italic;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  font-size: 24px;
  padding: 9px 18px;
  min-width: 75%;
`;

export const Label = styled.Text`
  color: #595856;
  font-size: 18px;
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: 9px;
`;

export const Gap = styled.View`
  margin-bottom: 18px;
`;

export const NumericInput = styled.TextInput`
  text-align: center;
  background-color: #fff;
  font-size: 18px;
  padding: 3px 0;
  width: 15%;
`;

export const SubmitButton = styled.TouchableHighlight`
  align-items: center;
  background-color: #09c;
  justify-content: center;
  margin-top: 30px;
  padding: 18px;
`;

export const LogoutButton = styled.TouchableHighlight`
  align-items: center;
  background-color: #09c;
  border-radius: 5px;
  justify-content: center;
  margin: 6px 6px 6px auto;
  padding: 9px;
  width: 25%;
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
  font-size: 24px;
  justify-content: center;
  ${({ completed }) => {
    return completed && 'textDecorationLine: line-through;'
  }}
`;

export const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-family: sans-serif;
  font-size: 42px;
  font-style: italic;
  margin: 18px 0;
`;

export const SubTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-family: sans-serif;
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
