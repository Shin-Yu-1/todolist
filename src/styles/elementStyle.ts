import styled from 'styled-components';


// Form 스타일
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; // 요소 사이 간격
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  border-radius: 8px;
`;

// 입력 필드 스타일
export const InputField = styled.input`
  padding: 8px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.active};
  }
`;

// 버튼 스타일
export const ButtonStyle = styled.button`
  padding: 8px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.border};
  }

  &:focus {
    outline: none;
  }
`;

export const DivStyle = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  padding: 20px;
`;

export const UlStyle = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LiStyle = styled.li`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 8px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  button {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    border: none;
    padding: 4px 8px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;