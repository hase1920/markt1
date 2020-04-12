import styled from '@emotion/styled'
export default styled.ol`
text-align: left;
line-height: 1.5;
font-size:1rem;
margin:20px 20px;
padding:4px;

li {
  padding:0;
  margin:0;
}
@media(max-width:800px){
  li a {
    font-size:1rem;
    padding:0;
    margin:0;
    color:red;
  }
  
} 
`