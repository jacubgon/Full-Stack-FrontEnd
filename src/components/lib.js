import styled from '@emotion/styled'

import { Input as ChakraInput } from '@chakra-ui/react'
import { FormLabel } from '@chakra-ui/react'
import { Link as DefaultLink } from 'react-router-dom'

const Link = styled(DefaultLink)`
	border-radius: 20px;
	padding: 0.5rem 1.3rem;
	background-color: ${(props) => (props.type === 'danger' ? 'red' : '#444')};
	border: 0;
	color: #fff;
	text-decoration: none;
	font-size: 1rem;

	&:hover {
		color: #fff;
		background-color: #666;
	}
`

const Button = Link.withComponent('button')

const Label = styled(FormLabel)`
	display: inline-block;
	padding: 0.3rem 0;
	margin-right: 0.5rem;
`

const Input = styled(ChakraInput)`
	border-width: 2px;
	color: #555;
	&:focus {
		border: 0;
	}
`

export { Button, Link, Input, Label }
