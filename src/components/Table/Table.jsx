import React, { useState, useEffect } from 'react'
import classes from './Table.module.scss'
import Rows from '../Rows/Rows'
import { uuid } from 'uuidv4'

const Table = (props) => {
  const [dataFetched, setDataFetched] = useState(false)
  const [sortedTable, setSortedTable] = useState(false)
  const [stockData, setStockData] = useState('')
  const paragraphClass = classes['main-table-head-paragraph']
  useEffect(() => {
    fetch(
      'https://bitbucket.org/dacsoftware/recruitment/raw/e824e5c44befb603535a33ea88a4888c92cf1042/data.json'
    )
      .then((res) => res.json())
      .then((res) => {
        setStockData(
          res.offers.map((el) => {
            el.id = uuid()
            return el
          })
        )
        setDataFetched(true)
      })
      .catch((err) => alert('ERROR'))
  }, [setStockData, setDataFetched])

  const onChangeAvailability = (event) => {
    setStockData(
      stockData.map((el) => {
        if (el.id === event.target.id) {
          el.availability = !el.availability
        }
        return el
      })
    )
  }

  const onDeleteRowHandler = (event) => {
    setStockData(stockData.filter((el) => el.id !== event.target.id))
  }
  const sortByName = () => {
    setStockData(
      stockData.sort((el1, el2) =>
        el1.make[0] > el2.make[0] ? !sortedTable : sortedTable
      )
    )
    setSortedTable(!sortedTable)
  }

  return (
    <section className={classes.table}>
      <table className={classes['main-table']}>
        <thead className={classes['main-table-head']}>
          <tr>
            <th onClick={sortByName} className={classes['main-table-head-th-1']}>
              <p
                className={paragraphClass}
              >
                Nazwa
              </p>
            </th>
            <th className={classes['main-table-head-th-2']}>
              <p
                className={paragraphClass}
              >
                Model
              </p>
            </th>
            <th className={classes['main-table-head-th-3']}>
              <p
                className={paragraphClass}
              >
                Silnik
              </p>
            </th>
            <th className={classes['main-table-head-th-3']}>
              <p
                className={paragraphClass}
              >
                Dostepnosc
              </p>
            </th>
            <th className={classes['main-table-head-th-4']}>
              <p
                className={paragraphClass}
              >
                Akcje
              </p>
            </th>
          </tr>
        </thead>
        <tbody className={classes['main-table-body']}>
          {dataFetched && (
            <Rows
              data={stockData}
              handleOnDeleteRow={onDeleteRowHandler}
              stockData={stockData}
              changeAvailability={onChangeAvailability}
            />
          )}
        </tbody>
      </table>
    </section>
  )
}
export default Table
