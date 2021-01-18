import { useRef, useState, useEffect } from 'react'
import { useThemeUI, Box, Text, Grid, Slider } from 'theme-ui'
import { darken } from '@theme-ui/color'
import LabeledToggle from '../labeled-toggle'
import CostCurve from '../charts/cost-curve'

let chart = null

const Curve = ({
  name,
  description,
  units,
  value,
  setValue,
  displayValue,
  scales,
}) => {
  const container = useRef(null)
  const { theme } = useThemeUI()
  const [isVariable, setIsVariable] = useState(false)

  useEffect(() => {
    chart = new CostCurve(
      container,
      theme,
      value,
      setValue,
      name,
      scales,
      !isVariable
    )

    return function cleanup() {
      container.current.innerHTML = ''
    }
  }, [theme, isVariable])

  useEffect(() => {
    let id = null

    const listener = () => {
      clearTimeout(id)
      id = setTimeout(() => {
        if (container.current.offsetWidth > 0) {
          chart = new CostCurve(
            container,
            theme,
            value,
            setValue,
            name,
            scales,
            !isVariable
          )
        }
      }, 150)
    }

    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [theme])

  const format = (value) => {
    return `$${value.toFixed(0)}`
  }

  return (
    <Box
      sx={{
        mt: [3],
        mb: [4],
      }}
    >
      <Text
        sx={{
          fontFamily: 'heading',
          letterSpacing: 'smallcaps',
          textTransform: 'uppercase',
          fontSize: [3],
          mt: [3],
          mb: [1],
        }}
      >
        {name}
        <Box
          sx={{
            display: 'inline-block',
            mt: [1],
            position: 'absolute',
            left: ['calc(100% - 55px)', 'calc(100% - 55px)', '424px'],
          }}
        >
          <LabeledToggle
            value={isVariable}
            setValue={setIsVariable}
            labels={{ on: 'varied', off: 'fixed' }}
          />
        </Box>
      </Text>
      <Text
        sx={{
          fontFamily: 'faux',
          letterSpacing: 'faux',
          fontSize: [2],
          mt: [0],
          mb: [1],
          maxWidth: ['70%', '70%', '350px'],
        }}
      >
        {description}
      </Text>
      <Grid columns={['75px 1fr']}>
        <Box>
          <Box
            sx={{
              borderStyle: 'solid',
              borderColor: 'primary',
              borderWidth: '0px',
              borderBottomWidth: '1px',
              pb: [1],
              pt: [2],
            }}
          >
            <Text
              sx={{
                display: 'inline-block',
                color: 'pink',
                fontSize: [4],
                fontFamily: 'mono',
                letterSpacing: 'mono',
              }}
            >
              {format(displayValue)}
            </Text>
          </Box>
          <Text
            sx={{
              color: 'secondary',
              fontSize: [2],
              fontFamily: 'faux',
              letterSpacing: 'faux',
              pt: [1],
            }}
          >
            {units}
          </Text>
        </Box>
        <Box sx={{ mt: ['5px'] }}>
          <Box ref={container} sx={{ height: '200px', width: '100%' }} />
        </Box>
      </Grid>
    </Box>
  )
}

export default Curve
