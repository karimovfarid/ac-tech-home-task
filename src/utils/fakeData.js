export const fakeData = ms =>
  new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        resolve([
          { title: 'Organization 1' },
          { title: 'Organization 2' },
          { title: 'Organization 3' },
          { title: 'Organization 4' },
        ])
      } catch (error) {
        reject(error)
      }
    }, ms)
  })