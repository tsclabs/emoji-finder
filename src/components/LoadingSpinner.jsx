import styled from 'styled-components'

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  border: 4px solid #f1f1f1;
  border-top-color: #6a0dad;
  animation: 1.5s spin infinite linear;
  border-bottom-color: #6a0dad;
  
  @keyframes spin {
    to { transform: rotate(360deg) }
  }  
`;

export default () => <Spinner />;