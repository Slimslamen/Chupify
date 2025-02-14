-- CreateTable
CREATE TABLE "FollowArtist" (
    "id" SERIAL NOT NULL,
    "created" TEXT NOT NULL,
    "artist_name" TEXT NOT NULL,
    "artist_id" TEXT NOT NULL,
    "artist_uri" TEXT NOT NULL,

    CONSTRAINT "FollowArtist_pkey" PRIMARY KEY ("id")
);
