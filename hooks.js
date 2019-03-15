  // update every time selectedChar changes
  useEffect(() => {
    fetchData();
    return () => {
      console.log('Cleaning up...');
    };
  }, [props.selectedChar]);

  // replaces componentWillUnmount()
  useEffect(() => {
    return () => {
      console.log('Unmount...');
    };
  }, []);
