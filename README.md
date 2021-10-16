## Assignment

- It uses Math.round() to parse float to Int
- For x(float) if fractional portion is 0.5 or greater it return (x+1) or else x.

### Unit tests

    Input--D = {2020-01-05: 8, 2020-01-06: -6}
    Output--D ={Fri: 2,Mon: -6,Sat: 6,Sun: 8,Thu: -1,Tue: -5,Wed: -3}

    ----------------------------------------------------------------------------------------------

    Input--D = {2010-01-05: 8,2019-06-06: -6,2020-02-07: 2,2020-07-04: 8,2021-01-01: 4,2021-01-03: 6,2022-01-02: 4,2024-03-08: -2}
    Output--D = {Fri: 4 ,Mon: 9 ,Sat: 8 ,Sun: 10 ,Thu: -6 ,Tue: 8 ,Wed: 1}

    ----------------------------------------------------------------------------------------------

    Input--D ={ 2010-01-05: 28 ,2019-06-06: -16 ,2020-02-07: 20 ,2020-07-04: 38 ,2021-01-01: 42 2021-01-03: 16 ,2022-01-02: 41 ,2024-03-08: -12}
    Output--D ={Fri: 50 ,Mon: 43 ,Sat: 38 ,Sun: 7, Thu: -16 ,Tue: 28 ,Wed: 6}

    ----------------------------------------------------------------------------------------------

    Input--D={2010-01-05: 28 ,2011-01-05: 28 ,2016-06-06: -16 ,2019-06-06: -16 ,2020-02-07: 0 ,2020-07-04: 38 ,2021-01-01: 42 ,2021-01-03: 16 ,2022-01-02: 41 ,2023-02-07: 0 2024-03-08: -12 ,2029-03-08: -12}
    Output--D={Fri: 50 ,Mon: -16 ,Sat: 38 ,Sun: 7 ,Thu: -28 ,Tue: 48 ,Wed: 28}
