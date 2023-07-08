//article array
let artWorks = [
    {
        id: 0,
        title: "The Starry Night",
        Artist: "Vincent van Gogh",
        year: 1889,
        description: "The Starry Night (Dutch: De sterrennacht) is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. Widely regarded as Van Gogh's magnum opus, The Starry Night is one of the most recognizable paintings in Western art.",
        image: "https://lh3.googleusercontent.com/Pd2nCUHUz4Ruc76LRh1-H0Dldl04hWSXw8P9uCYZ4TIWP7yNPArIgWlHZrf1qT9T=s1200",
        alt: "Van Gogh"
    },
    {
        id: 1,
        title: "Campbell's Soup Cans",
        Artist: "Andy Warhol",
        year: 1961,
        description: "Campbell's Soup Cans (sometimes referred to as 32 Campbell's Soup Cans) is a work of art produced between November 1961 and March or April 1962 by American artist Andy Warhol. It consists of thirty-two canvases, each measuring 20 inches (51 cm) in height × 16 inches (41 cm) in width and each consisting of a painting of a Campbell's Soup can—one of each of the canned soup varieties the company offered at the time. The non-painterly works were Warhol's hand-painted depictions of printed imagery deriving from commercial products and popular culture and belong to the pop art movement.",
        image: "https://cdn.artcld.com/img/iwm086jryufkhew0ark8.jpg",
        alt: "Andy Warhol"
    },
    {
        id: 2,
        title: "I and the Village",
        Artist: "Marc Chagall",
        year: 1911,
        description: "I and the Village is an oil-on-canvas painting by the Belarusian-French artist Marc Chagall created in 1911. It is exhibited at the Museum of Modern Art, New York. The work is Cubist in construction and contains many soft, dreamlike images overlapping one another in a continuous space.",
        image: "https://uploads6.wikiart.org/images/marc-chagall/i-and-the-village-1911.jpg",
        alt: "Chagall"
    },
    {
        id: 3,
        title: "Les Demoiselles d'Avignon",
        Artist: "Pablo Picasso",
        year: 1907,
        description: "Les Demoiselles d'Avignon is a large oil painting created in 1907 by the Spanish artist Pablo Picasso. Part of the permanent collection of the Museum of Modern Art in New York, it portrays five nude female prostitutes in a brothel on Carrer d'Avinyó, a street in Barcelona, Spain.",
        image: "https://uploads1.wikiart.org/images/pablo-picasso/the-girls-of-avignon-1907.jpg",
        alt: "Picasso"
    },
    {
        id: 4,
        title: "The Persistence of Memory",
        Artist: "Salvador Dali",
        year: 1934,
        description: "The Persistence of Memory is a 1931 painting by artist Salvador Dalí and one of the most recognizable works of Surrealism. First shown at the Julien Levy Gallery in 1932, since 1934 the painting has been in the collection of the Museum of Modern Art in New York City, which received it from an anonymous donor.",
        image: "https://media.sketchfab.com/models/ab3e99facbdb4d9d8661d3f07815638e/thumbnails/2d916b3cd3c4462dafd72e8b144b6553/3b1ee1f98ef246f3855680594767ffbe.jpeg",
        alt: "Salvador Dali"
    },
    {
        id: 5,
        title: "Portrait of the Postman Joseph Roulin",
        Artist: "Vincent van Gogh",
        year: 1889,
        description: "This portrait of Joseph Roulin is one of six van Gogh painted of his close friend, a postal employee in the southern French town of Arles, a fifteen-hour train ride from Paris. Van Gogh had moved to Arles in 1888, hoping to create an artists cooperative there. The plan never came to fruition, and the artist became lonely and isolated. He found comfort and companionship with the Roulin family, and they are the subjects of many of his paintings. In this portrait, Roulin is depicted in the uniform he always wore proudly, set against an imaginative backdrop of swirling flowers.",
        image: "https://lh3.googleusercontent.com/URtu_zp4xVfMbldm-n6m0jGQYUqmH83fr9zN_ykQQQ3gj8JicrG7SGx91YRzd772cT8=s1200",
        alt: "Van Gogh"
    },
    {
        id: 6,
        title: "Self-Portrait with Cropped Hair",
        Artist: "Frida Kahlo",
        year: 1940,
        description: "In this self-portrait, Kahlo has cast off the feminine attributes with which she often depicted herself—such as traditional embroidered Tehuana dresses or flowers in her hair—and instead sports a loose-fitting man’s suit and short-clipped haircut. Her high-heeled shoes and one dangling earring remain, however, along with her characteristic penetrating outward gaze. Locks of hair are strewn across the floor, a severed braid lies next to her chair, and the artist holds a pair of scissors across her lap. This androgynous persona may refer to Kahlo’s own bisexualit.",
        image: "https://www.fridakahlo.org/images/paintings/self-portrait-with-cropped-hair.jpg",
        alt: "Frida Kahlo"
    },
    {
        id: 7,
        title: "Hope II",
        Artist: "Gustav Klimt",
        year: 1907,
        description: "A pregnant woman bows her head and closes her eyes, as if praying for the safety of her child. Peeping out from behind her stomach is a death’s head, a looming sign of the danger she faces. At her feet, three women with lowered heads raise their hands, presumably also in prayer—although their solemnity might also imply mourning, as if they foresaw the child’s fate. Why, then, the painting’s title? Klimt himself called this work Vision, although he had titled an earlier, related painting of a pregnant woman Hope. By association with the earlier work, this one has become known as Hope, II.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Gustav_Klimt_-_Hope%2C_II_-_Google_Art_Project.jpg/1200px-Gustav_Klimt_-_Hope%2C_II_-_Google_Art_Project.jpg",
        alt: "Gustav Klimt"
    },
    {
        id: 8,
        title: "The Piano Lesson",
        Artist: "Henri Matisse",
        year: 1916,
        description: "The Piano Lesson depicts the living room of Matisse's home in Issy-les-Moulineaux, with his elder son, Pierre, at the piano, the artist's sculpture Decorative Figure (1908), at bottom left, and, at upper right, his painting Woman on a High Stool. Matisse began with a naturalistic drawing, but he eliminated detail as he worked, scraping down areas and rebuilding them in broad fields of color. The painting evokes a specific moment in time - light suddenly turned on in a darkening interior - by the triangle of shadow on the boy's face and the rhyming green triangle of light falling on the garden. The artist's incising on the window frame and stippling on the left side produce a pitted quality that suggests the eroding effects of light or time, a theme reiterated by the presence of the metronome and burning candle on the piano.",
        image: "https://www.henrimatisse.org/images/gallery/the-piano-lesson.jpg",
        alt: "Henri Matisse"
    },
    {
        id: 9,
        title: "The Kiss",
        Artist: "Gustav Klimt",
        year: 1907,
        description: "Gustav Klimt depicts the couple locked in an intimate embrace against a gold, flat background. The two figures are situated at the edge of a patch of flowery meadow that ends under the woman's exposed feet. The man wears a robe printed with geometric patterns and subtle swirls. He wears a crown of vines while the woman wears a crown of flowers. She is shown in a flowing dress with floral patterns. The man's face is not shown to the audience and instead, his face is bent downward to press a kiss to the woman's cheek, and his hands are cradling the woman's face. Her eyes are closed, with one arm wrapped around the man's neck, the other resting gently on his hand, and her face is upturned to receive the man's kiss.",
        image: "https://mymodernmet.com/wp/wp-content/uploads/2017/07/the-kiss-gustav-klimt-1.jpg",
        alt: "Gustav Klimt"
    },
    {
        id: 10,
        title: "Blue Nudes",
        Artist: "Henri Matisse",
        year: 1952,
        description: "The Blue Nudes is a series of collages, and related color lithographs, by Henri Matisse, made from paper cut-outs depicting nude figures in various positions. Restricted by his physical condition after his surgery for stomach cancer, Matisse began creating art by cutting and painting sheets of paper by hand; these Matisse viewed as independent artworks in their own right. The Blue Nudes refers also to the editioned multiples based on the cut-outs. Matisse supervised the creation of these lithographs until his death in 1954.<br>The color blue signified distance and volume to Matisse. Frustrated in his attempts to successfully marry dominant and contrasting tones, the artist was moved to use solid slabs of single color early in his career, a technique that became known as Fauvism.",
        image: "https://upload.wikimedia.org/wikipedia/en/7/78/Blue_Nudes_Henri_Matisse.jpg",
        alt: "Henri Matisse"
    },
    {
        id: 11,
        title: "The Weeping Woman",
        Artist: "Pablo Picasso",
        year: 1937,
        description: "Picasso created The Weeping Woman during the Spanish Civil War, which broke out in July 1936, when General Franco revolted against the Republican government. It was part of a series of works in response to the bombing of Guernica in the Spanish Civil War on 26 April 1937. The bombing took place when Adolf Hitler ordered the German airforce to bomb the Basque town on behalf of Franco.[5] The painting was a personal protest after seeing newspaper photographs of the event.<br>In January 1937, Picasso had been asked to produce a mural for the Spanish Pavilion at the Paris International Exhibition.",
        image: "https://upload.wikimedia.org/wikipedia/en/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg",
        alt: "Picasso"
    },
    {
        id: 12,
        title: "Birthday",
        Artist: "Marc Chagall",
        year: 1915,
        description: "Marc Chagall called 'love' the primary color of his paintings. The central source of the love in his life was his wife, Bella. They met when Bella was a teenager in their home town of Vitebsk, Belarus. In 1915, Chagall finally married Bella, despite the opposition of her parents, who wanted a better match for their daughter.<br>The Birthday was painted by Chagall in 1915 just a few weeks before he and Bella married.The painting is a wonderful expression of the amazing, flowing and powerful love these two shared.Chagall is pictured flowing and dream- like, floating above Bella.His head is unrealistically craned upside down and backward as he twists around to kiss his future wife on the mouth.<br>Bella is depicted holding a cheerful bouquet of flowers and also floating in the air, as if just lifting off.The couple is suspended in loving bliss in a bright living room setting dominated below by a vivid red carpet.The painting is balanced above by the ivory, beige and tans of the living room furniture and wall decorations.",
        image: "https://www.marcchagall.net/images/paintings/the-birthday.jpg",
        alt: "Chagall"
    },
    {
        id: 13,
        title: "Shot Marilyns",
        Artist: "Andy Warhol",
        year: 1964,
        description: "Pop artist Andy Warhol had a fascination with Hollywood and fame. A legend of the silver screen, Marilyn Monroe is widely considered to be the epitome of Hollywood glamour. After her death at the age of 36 in August 1962, Warhol began immortalizing her in his work. 'In August '62 I started doing silkscreens.... It was all so simple-quick and chancy. I was thrilled with it. My first experiments with screens were heads of Troy Donahue and Warren Beatty, and then when Marilyn Monroe happened to die that month, I got the idea to make screens of her beautiful face — the first Marilyns.' <br>In 1964, Warhol created portraits of Monroe based on a publicity photo for her 1953 film Niagara. He painted five Marilyn silkscreen portraits with different colored backgrounds: red, orange, light blue, sage blue, and turquoise, and stored them at The Factory, his studio on East 47th Street in Manhattan.",
        image: "https://upload.wikimedia.org/wikipedia/en/5/5c/Shot_Marilyns.jpg",
        alt: "Andy Warhol"
    },
    {
        id: 14,
        title: "Self-Portrait with Bandaged Ear",
        Artist: "Vincent van Gogh",
        year: 1889,
        description: "In this self-portrait, Van Gogh is shown wearing a blue cap with black fur and a green overcoat, with a bandage covering his ear and extending under his chin. He is in a traditional three-quarter view, and his forward gaze falls slightly to the right, out of the frame. Behind him is an open window, assumedly letting in a winter breeze, a canvas on an easel, with a few indistinguishable marks, as well as a Japanese woodblock print. This woodblock print has been identified as a Geishas in a Landscape published by Sato Tokyo in the 1870s. This shows an important influence of Japonism and wood block print on Van Gogh's work, which also appear in the background of other portraits he had created. <br>The bandage covering Van Gogh's ear in this painting alludes to his most famous conflict. Van Gogh used a mirror for his self-portraits which is why some mistakenly think that he lost part of his right ear instead of his left.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg/270px-Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg",
        alt: "Van Gogh"
    },
    {
        id: 15,
        title: "Almond Blossoms",
        Artist: "Vincent van Gogh",
        year: 1890,
        description: "Almond Blossoms is a group of several paintings made in 1888 and 1890 by Vincent van Gogh in Arles and Saint-Rémy, southern France of blossoming almond trees. Flowering trees were special to van Gogh. They represented awakening and hope. He enjoyed them aesthetically and found joy in painting flowering trees. The works reflect the influence of Impressionism, Divisionism, and Japanese woodcuts. Almond Blossom was made to celebrate the birth of his nephew and namesake, son of his brother Theo and sister-in-law Jo.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/1200px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
        alt: "Van Gogh"
    },
    {
        id: 16,
        title: "The Temptation of St. Anthony",
        Artist: "Salvador Dali",
        year: 1946,
        description: "Artists and authors have long represented the temptation of St. Anthony in their art. The Temptation of St. Anthony is painted with oil on canvas. It depicts a desert-like landscape: a low horizon line with high clouds and dark, warm tones in an azure sky. The figure of St. Anthony kneels in the bottom left corner. He holds up a cross in his right hand and with his left hand supports himself on an ambiguous form. A human skull lies by his right foot. A parade of elephants led by a horse approach St. Anthony. The horse is a depiction of satan, note the reverse of the hooves, many artists of the middle ages depicted anything other than christian as upside down or reverse and Dali did the same here, but the horse as satan was described by Dali as beautiful, terrible and impossible. The elephants carry symbolic objects representing temptation: a statue of a nude woman holding her breasts, an obelisk, a building complex confining a nude, disembodied female torso, and a vertical tower. The animals have exaggerated, long, spindly legs, making them appear weightless.",
        image: "https://emptyeasel.com/wp-content/uploads/2019/03/the-temptation-of-saint-anthony.jpg",
        alt: "Salvador Dali"
    },
    {
        id: 17,
        title: "The Son of Man",
        Artist: "René Magritte",
        year: 1964,
        description: "Magritte painted it as a self-portrait. The painting consists of a man in an overcoat and a bowler hat standing in front of a low wall, beyond which are the sea and a cloudy sky. The man's face is largely obscured by a hovering green apple. However, the man's eyes can be seen peeking over the edge of the apple. Another subtle feature is that the man's left arm appears to bend backwards at the elbow.<br>About the painting, Magritte said:<br>At least it hides the face partly well, so you have the apparent face, the apple, hiding the visible but hidden, the face of the person. It's something that happens constantly. Everything we see hides another thing, we always want to see what is hidden by what we see. There is an interest in that which is hidden and which the visible does not show us. This interest can take the form of a quite intense feeling, a sort of conflict, one might say, between the visible that is hidden and the visible that is present.",
        image: "https://news.artnet.com/app/news-upload/2018/06/12.-Son-of-Man-780x1024.jpg",
        alt: "René Magritte"
    },
    {
        id: 18,
        title: "Golconda",
        Artist: "René Magritte",
        year: 1953,
        description: "The piece depicts a scene of 'raining men', nearly identical to each other dressed in dark overcoats and bowler hats, who seem to be either falling down like rain drops, floating up like helium balloons, or just stationed in mid-air as no movement or motion is implied. The backdrop features red-roofed buildings and a mostly blue partly cloudy sky, lending credence to the theory that the men are not raining. The men are equally spaced in a lattice, facing the viewpoint and receding back in rhombic grid layers.<br> Magritte lived in a similar suburban environment, and dressed in a similar fashion.The bowler hat was a common feature of much of his work, and appears in paintings such as The Son of Man.",
        image: "https://www.renemagritte.org/images/paintings/golconda.jpg",
        alt: "René Magritte"
    },
    {
        id: 19,
        title: "Water Lilies",
        Artist: "Claude Monet",
        year: 1919,
        description: "The Water Lilies is a 1919 painting by impressionist Claude Monet, one of his Water Lilies series. The painting, the left hand panel of a large pair, depicts a scene in Monet's French pond showing light reflecting off the water with water lilies on the surface. It is on display in New York's Metropolitan Museum of Art.<br>One of Monet's larger paintings, it shows the beauty of the sunset reflecting off the water. In 1919, Claude Monet was an elderly man who had already had been painting for almost 70 years, and his Water Lilies series came during a time when he was mainly painting water lilies in his pond, the pond's bridge, and his garden.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/WLA_metmuseum_Water_Lilies_by_Claude_Monet.jpg/1200px-WLA_metmuseum_Water_Lilies_by_Claude_Monet.jpg",
        alt: "Claude Monet"
    },
    {
        id: 20,
        title: "Portrait of an Artist(Pool with Two Figures)",
        Artist: "David Hockney",
        year: 1972,
        description: "One of the most iconic images in the artist’s oeuvre, David Hockney’s Portrait of an Artist (Pool with Two Figures)  is a story of two compositions. The first, started in 1971, was inspired by the serendipitous juxtaposition of two photographs on the artist’s studio floor. ‘One was of a figure swimming underwater and therefore quite distorted… the other was a boy gazing at something on the ground,’ Hockney would later recall. ‘The idea of painting two figures in different styles appealed so much that I began the painting immediately.’",
        image: "https://www.christies.com/img/LotImages/2018/NYR/2018_NYR_15974_0009C_000(david_hockney_portrait_of_an_artist).jpg?w=780",
        alt: "David Hockney"
    }
]