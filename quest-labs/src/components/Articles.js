import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    let res = await axios.get(
      "https://pink-fierce-kitten.cyclic.app/api/v1/quest/get-articles"
    );
    //  console.log(res.data.articles);
    setArticles(res.data.articles);
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Box>
      <Text
        textAlign={"center"}
        fontSize={"20px"}
        fontWeight={"700"}
        color={"white"}
      >
        Articles
      </Text>
      <Box display={"flex"} mt={"40px"} justifyContent={"space-between"}>
        <Box color={"white"}>
          <Text fontSize={"20px"} fontWeight={"600"}>
            Latest
          </Text>
          <Text>From Team Intercom</Text>
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image
            width={"40px"}
            h={"40px"}
            borderRadius={"50%"}
            src="/images/home3.png"
          />
          <Image
            width={"40px"}
            h={"40px"}
            borderRadius={"50%"}
            src="/images/home4.png"
          />
          <Image
            width={"40px"}
            h={"40px"}
            borderRadius={"50%"}
            src="/images/home5.png"
          />
        </Box>
      </Box>
      <Box>
        {articles.map((el, i) => {
          return (
            <Box bgColor={"white"} borderRadius={"10px"} mt={"30px"} _hover={{cursor:"pointer"}}>
              <Image
                src={`/images/article${i + 1}.png`}
                borderTopRightRadius={"10px"}
                borderTopLeftRadius={"10px"}
              />
              <hr />
              <Box
                padding={"10px 10px"}
                borderBottomRightRadius={"10px"}
                borderBottomLeftRadius={"10px"}
              >
                <Text fontSize={"15px"} fontWeight={600}>
                  {el.title}
                </Text>
                <Text fontSize={"14px"} color={"grey"} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                  {el.description}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Articles;
