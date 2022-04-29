import React from "react";
import { Flex, Text, Tab, Tabs, TabList } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Sidebar(props) {
  const collections = useSelector((state) => state.collections);
  const collectionElements = collections.map((collection) => {
    return <Tab
      justifyContent={"flex-start"}
      fontSize={"1.2vw"}
      textAlign={'left'}
      wordBreak={'break-all'}
      _selected={{ color: "#FFFFFF", bg: "#39c0ba"}}
      key={collection.key}
      onClick={() => props.setCurrentCollectionKey(collection.key)}
      >
          {collection.title}
    </Tab>
  });
  return (
    <Flex
      maxH={"calc(100vh - 80px)"}
      overflowY={"auto"}
      minW={"17vw"}
      maxW={'20vw'}
      boxShadow={"15px 0px 34px -19px rgba(57,192,186,0.2)"}
      flexDir={"column"}
      scrollBehavior={'smooth'}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: 'rgb(199, 199, 199)',
          borderRadius: '24px',
        },
      }}
    >
      <Text p={"15px"} fontSize={"1.6vw"} fontWeight={"500"}>
        Collections
      </Text>
      <Tabs orientation={"vertical"} defaultIndex={props.index}>
        <TabList width={"full"}>
          {collectionElements}
        </TabList>
      </Tabs>
      {/* <Tab p={'15px'} m={''} cursor={'pointer'} _selected={{color: 'gray'}} >
                <Text fontSize={'1.5rem'}>Collection 1</Text>
            </Tab>
            <Box p={'15px'} m={''} cursor={'pointer'}>
                <Text fontSize={'1.5rem'}>Collection 2</Text>
            </Box> */}
    </Flex>
  );
}
